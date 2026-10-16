import { View, Text, StyleSheet } from 'react-native';

function DespesaSumario({ despesas, periodo }) {
  const somaDespesas = despesas.reduce((soma, despesa) => {
    return soma + despesa.valor;
  }, 0);

  const valorColor = somaDespesas > 200 ? '#ff3b30' : '#fff';

  return (
    <View style={styles.container}>
      <Text style={styles.periodo}>{periodo}</Text>
      <Text style={[styles.valor, { color: valorColor }]}>R$ {somaDespesas.toFixed(2)}</Text>
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    margin: 16,
    padding: 16,
    borderRadius: 8,
    backgroundColor: '#6200ee',
    flexDirection: 'row',
    justifyContent: 'space-between',
    alignItems: 'center',
  },
  periodo: {
    color: '#fff',
    fontSize: 16,
  },
  valor: {
    color: '#fff',
    fontSize: 18,
    fontWeight: 'bold',
  },
});

export default DespesaSumario;