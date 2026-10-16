import { useState } from 'react';
import { Pressable, StyleSheet, Text, View } from 'react-native';
import DespesaSaida from './DespesaSaida';

const DUMMY_DESPESAS = [
  {
    id: '1',
    descricao: 'Conta de Luz',
    valor: 150.0,
    data: new Date(2024, 5, 1),
    categoria: 'Contas',
  },
  {
    id: '2',
    descricao: 'Conta de Água',
    valor: 80.0,
    data: new Date(2024, 5, 15),
    categoria: 'Contas',
  },
  {
    id: '3',
    descricao: 'Cinema',
    valor: 55.5,
    data: new Date(2024, 5, 18),
    categoria: 'Lazer',
  },
];

const categorias = ['Todas', 'Contas', 'Lazer'];

export default function TodasDespesas() {
  const [categoriaSelecionada, setCategoriaSelecionada] = useState('Todas');

  const despesasFiltradas = categoriaSelecionada === 'Todas'
    ? DUMMY_DESPESAS
    : DUMMY_DESPESAS.filter((despesa) => despesa.categoria === categoriaSelecionada);

  return (
    <View style={styles.container}>
      <Text style={styles.title}>Todas despesas</Text>

      <View style={styles.filtroContainer}>
        {categorias.map((categoria) => (
          <Pressable
            key={categoria}
            style={[styles.filtro, categoriaSelecionada === categoria && styles.filtroAtivo]}
            onPress={() => setCategoriaSelecionada(categoria)}
          >
            <Text style={[styles.filtroTexto, categoriaSelecionada === categoria && styles.filtroTextoAtivo]}>{categoria}</Text>
          </Pressable>
        ))}
      </View>

      <DespesaSaida despesas={despesasFiltradas} periodo={categoriaSelecionada === 'Todas' ? 'Total' : categoriaSelecionada} />
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#f5f5f5',
  },
  title: {
    paddingHorizontal: 16,
    paddingTop: 16,
    fontSize: 20,
    fontWeight: '700',
    color: '#1f2937',
  },
  filtroContainer: {
    flexDirection: 'row',
    flexWrap: 'wrap',
    gap: 8,
    paddingHorizontal: 16,
    paddingVertical: 12,
  },
  filtro: {
    backgroundColor: '#e5e7eb',
    borderRadius: 20,
    paddingHorizontal: 12,
    paddingVertical: 8,
  },
  filtroAtivo: {
    backgroundColor: '#6200ee',
  },
  filtroTexto: {
    color: '#374151',
    fontWeight: '600',
  },
  filtroTextoAtivo: {
    color: '#fff',
  },
});