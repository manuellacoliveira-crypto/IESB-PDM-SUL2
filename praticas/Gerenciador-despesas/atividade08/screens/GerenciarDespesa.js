import { useState } from 'react';
import {
  Alert,
  Button,
  Platform,
  Pressable,
  StyleSheet,
  Text,
  TextInput,
  View,
} from 'react-native';
import DateTimePicker from '@react-native-community/datetimepicker';

const categorias = ['Alimentação', 'Transporte', 'Moradia', 'Lazer', 'Contas'];

function GerenciarDespesa() {
  const [descricao, setDescricao] = useState('');
  const [valor, setValor] = useState('');
  const [data, setData] = useState(new Date());
  const [categoria, setCategoria] = useState('');
  const [showDatePicker, setShowDatePicker] = useState(false);

  function salvarDespesa() {
    const regexValor = /^\d*\.?\d{0,2}$/;

    if (!descricao.trim() || !valor.trim() || !categoria.trim()) {
      Alert.alert('Campos obrigatórios', 'Preencha descrição, valor e categoria antes de salvar.');
      return;
    }

    if (!regexValor.test(valor)) {
      Alert.alert('Valor inválido', 'Use no máximo duas casas decimais.');
      return;
    }

    Alert.alert('Despesa salva', `${descricao} - R$ ${Number(valor).toFixed(2)}`);
    setDescricao('');
    setValor('');
    setCategoria('');
    setData(new Date());
  }

  function onChangeDate(_, selectedDate) {
    const novaData = selectedDate || data;
    setShowDatePicker(Platform.OS === 'ios');
    setData(novaData);
  }

  return (
    <View style={styles.container}>
      <Text style={styles.title}>Gerenciar despesa</Text>

      <Text style={styles.label}>Descrição</Text>
      <TextInput
        style={styles.input}
        value={descricao}
        onChangeText={setDescricao}
        placeholder="Ex.: Supermercado"
      />

      <Text style={styles.label}>Valor</Text>
      <TextInput
        style={styles.input}
        value={valor}
        onChangeText={(texto) => {
          if (/^\d*\.?\d{0,2}$/.test(texto) || texto === '') {
            setValor(texto);
          }
        }}
        placeholder="Ex.: 150.00"
        keyboardType="decimal-pad"
      />

      <Text style={styles.label}>Data</Text>
      <Pressable onPress={() => setShowDatePicker(true)} style={styles.dataInput}>
        <Text>{data.toLocaleDateString('pt-BR')}</Text>
      </Pressable>

      {showDatePicker && (
        <DateTimePicker
          value={data}
          mode="date"
          display="default"
          onChange={onChangeDate}
        />
      )}

      <Text style={styles.label}>Categoria</Text>
      <View style={styles.categoriasContainer}>
        {categorias.map((item) => (
          <Pressable
            key={item}
            style={[styles.categoria, categoria === item && styles.categoriaSelecionada]}
            onPress={() => setCategoria(item)}
          >
            <Text style={[styles.categoriaTexto, categoria === item && styles.categoriaTextoSelecionado]}>{item}</Text>
          </Pressable>
        ))}
      </View>

      <Button title="Salvar despesa" onPress={salvarDespesa} color="#6200ee" />
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#f5f5f5',
    padding: 20,
  },
  title: {
    fontSize: 24,
    fontWeight: '700',
    marginBottom: 20,
    color: '#1f2937',
  },
  label: {
    fontSize: 15,
    fontWeight: '600',
    marginBottom: 8,
    color: '#374151',
  },
  input: {
    backgroundColor: '#fff',
    borderWidth: 1,
    borderColor: '#d1d5db',
    borderRadius: 8,
    paddingHorizontal: 12,
    paddingVertical: 10,
    marginBottom: 16,
  },
  dataInput: {
    backgroundColor: '#fff',
    borderWidth: 1,
    borderColor: '#d1d5db',
    borderRadius: 8,
    paddingHorizontal: 12,
    paddingVertical: 12,
    marginBottom: 16,
  },
  categoriasContainer: {
    flexDirection: 'row',
    flexWrap: 'wrap',
    gap: 8,
    marginBottom: 20,
  },
  categoria: {
    backgroundColor: '#e5e7eb',
    borderRadius: 20,
    paddingHorizontal: 12,
    paddingVertical: 8,
    marginRight: 8,
    marginBottom: 8,
  },
  categoriaSelecionada: {
    backgroundColor: '#dbeafe',
  },
  categoriaTexto: {
    color: '#374151',
    fontWeight: '600',
  },
  categoriaTextoSelecionado: {
    color: '#1d4ed8',
  },
});

export default GerenciarDespesa;