
import { View, Text, StyleSheet } from 'react-native';

export default function DespesaSumario({ despesas, periodo }) {
  const somaDespesas = despesas.reduce((soma, despesa) => {
    return soma + despesa.valor;
  }, 0);

  return (
    <View style={styles.container}>
      <Text style={styles.periodo}>{periodo}</Text>

      <Text style={styles.valor}>
        R$ {somaDespesas.toFixed(2)}
      </Text>
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    padding: 16,
    margin: 16,
    borderRadius: 8,
    backgroundColor: '#6200ee',
    flexDirection: 'row',
    justifyContent: 'space-between',
    alignItems: 'center',
  },
  periodo: {
    color: '#ffffff',
    fontSize: 16,
  },
  valor: {
    color: '#ffffff',
    fontSize: 18,
    fontWeight: 'bold',
  },
});