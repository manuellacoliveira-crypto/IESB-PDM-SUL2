import { View, StyleSheet } from 'react-native';
import DespesasSumario from './DespesasSumario';
import DespesaLista from './DespesaLista';

function DespesaSaida({ despesas = [], periodo = 'Total' }) {
  return (
    <View style={styles.container}>
      <DespesasSumario despesas={despesas} periodo={periodo} />
      <DespesaLista despesas={despesas} />
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
  },
});

export default DespesaSaida;