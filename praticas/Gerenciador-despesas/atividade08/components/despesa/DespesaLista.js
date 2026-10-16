import { FlatList, StyleSheet, Text } from 'react-native';
import DespesaItem from './DespesaItem';

function DespesaLista({ despesas = [] }) {
    return (
        <FlatList
            data={despesas}
            keyExtractor={(item) => item.id}
            contentContainerStyle={styles.list}
            renderItem={({ item }) => <DespesaItem item={item} />}
            ListEmptyComponent={<Text style={styles.empty}>Nenhuma despesa cadastrada.</Text>}
        />
    );
}

const styles = StyleSheet.create({
    list: {
        paddingHorizontal: 16,
        paddingBottom: 16,
    },
    empty: {
        textAlign: 'center',
        color: '#6b7280',
        marginTop: 20,
    },
});

export default DespesaLista;