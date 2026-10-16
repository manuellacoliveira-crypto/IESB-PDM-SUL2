import { useState } from 'react';
import { Pressable, StyleSheet, Text, View } from 'react-native';
import DespesaSaida from '../components/despesa/DespesaSaida';

const hoje = new Date();

const DUMMY_DESPESAS = [
  { id: '1', descricao: 'Supermercado', valor: 180.5, data: new Date(hoje.getFullYear(), hoje.getMonth(), hoje.getDate() - 3), categoria: 'Alimentação' },
  { id: '2', descricao: 'Combustível', valor: 120, data: new Date(hoje.getFullYear(), hoje.getMonth(), hoje.getDate() - 6), categoria: 'Transporte' },
  { id: '3', descricao: 'Internet', valor: 90.9, data: new Date(hoje.getFullYear(), hoje.getMonth(), hoje.getDate() - 10), categoria: 'Contas' },
  { id: '4', descricao: 'Cinema', valor: 55.5, data: new Date(hoje.getFullYear(), hoje.getMonth(), hoje.getDate() - 40), categoria: 'Lazer' },
  { id: '5', descricao: 'Farmácia', valor: 72.3, data: new Date(hoje.getFullYear(), hoje.getMonth(), hoje.getDate() - 12), categoria: 'Contas' },
  { id: '6', descricao: 'Aluguel', valor: 1450, data: new Date(hoje.getFullYear(), hoje.getMonth(), hoje.getDate() - 1), categoria: 'Moradia' },
];

const categorias = ['Todas', 'Alimentação', 'Transporte', 'Moradia', 'Lazer', 'Contas'];

function TodasDespesas() {
  const [categoriaSelecionada, setCategoriaSelecionada] = useState('Todas');

  const despesasFiltradas = categoriaSelecionada === 'Todas'
    ? DUMMY_DESPESAS
    : DUMMY_DESPESAS.filter((despesa) => despesa.categoria === categoriaSelecionada);

  return (
    <View style={styles.container}>
      <Text style={styles.title}>Todas as Despesas</Text>

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

export default TodasDespesas;