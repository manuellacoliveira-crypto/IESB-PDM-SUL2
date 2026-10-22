import { View, StyleSheet, Text } from 'react-native';
import DespesaSaida from '../components/despesa/DespesaSaida';

const hoje = new Date();

const DESPESAS = [
  { id: '1', descricao: 'Supermercado', valor: 180.5, data: new Date(hoje.getFullYear(), hoje.getMonth(), hoje.getDate() - 3), categoria: 'Alimentação' },
  { id: '2', descricao: 'Combustível', valor: 120, data: new Date(hoje.getFullYear(), hoje.getMonth(), hoje.getDate() - 6), categoria: 'Transporte' },
  { id: '3', descricao: 'Internet', valor: 90.9, data: new Date(hoje.getFullYear(), hoje.getMonth(), hoje.getDate() - 10), categoria: 'Moradia' },
];

function DespesasRecentes() {
  const despesasRecentes = DESPESAS.filter((despesa) => {
    const hoje = new Date();
    const trintaDiasAtras = new Date();
    trintaDiasAtras.setDate(hoje.getDate() - 30);
    return despesa.data >= trintaDiasAtras && despesa.data <= hoje;
  });

  return (
    <View style={styles.container}>
      <Text style={styles.title}>Despesas Recentes</Text>
      <DespesaSaida despesas={despesasRecentes} periodo="Últimos 30 dias" />
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
});

export default DespesasRecentes;