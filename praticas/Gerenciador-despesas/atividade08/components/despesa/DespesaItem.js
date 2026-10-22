import { Pressable, StyleSheet, Text, View } from 'react-native';

function getDataFormatada(data) {
  return data.getDate() + '/' + (data.getMonth() + 1) + '/' + data.getFullYear();
}

function DespesaItem({ item }) {
  return (
    <Pressable style={styles.item}>
      <View style={styles.colunaTexto}>
        <Text style={styles.data}>{getDataFormatada(item.data)}</Text>
        <View style={styles.categoriaTag}>
          <Text style={styles.categoriaTexto}>{item.categoria}</Text>
        </View>
        <Text style={styles.descricao}>{item.descricao}</Text>
      </View>
      <Text style={styles.valor}>R$ {item.valor.toFixed(2)}</Text>
    </Pressable>
  );
}

const styles = StyleSheet.create({
  item: {
    flexDirection: 'row',
    justifyContent: 'space-between',
    alignItems: 'center',
    backgroundColor: '#fff',
    padding: 12,
    borderRadius: 8,
    marginBottom: 10,
    borderWidth: 1,
    borderColor: '#e5e7eb',
  },
  colunaTexto: {
    flex: 1,
    marginRight: 12,
  },
  data: {
    fontSize: 12,
    color: '#6b7280',
    marginBottom: 4,
  },
  categoriaTag: {
    alignSelf: 'flex-start',
    backgroundColor: '#e5e7eb',
    borderRadius: 12,
    paddingHorizontal: 8,
    paddingVertical: 4,
    marginBottom: 6,
  },
  categoriaTexto: {
    fontSize: 11,
    color: '#374151',
    fontWeight: '600',
  },
  descricao: {
    fontSize: 16,
    color: '#111827',
  },
  valor: {
    fontSize: 16,
    fontWeight: '700',
    color: '#111827',
  },
});

export default DespesaItem;
