import { Button, StyleSheet, Text, TextInput, View, ScrollView } from 'react-native';
import { rotulo_btn_cadastro_meta, rotulo_input_meta } from './mensagens';
import { useState } from 'react';
import MetasLists from './componentes/MetaLists';

export default function App() {

  const [inputMetaText, setInputMetaText] = useState('');
  const [metas, setMetas] = useState([]);

  function metaInputHandledler(inputText) {
    setInputMetaText(inputText)
  };

  function adicionarMetaHandler() {
    setMetas([...metas, inputMetaText]);
  }

  return (
    <View style={styles.mainContainer}>
      <View style={{ flexDirection: 'row', justifyContent: 'space-between', flex: 1 }}>
        <View style={{ width: '65%' }}>
          <TextInput style={styles.inputText}
            placeholder={rotulo_input_meta}
            onChangeText={metaInputHandledler}
          />
        </View>
        <View style={{ width: '30%' }}>
          <Button
            title={rotulo_btn_cadastro_meta}
            onPress={adicionarMetaHandler}
          />
        </View>
      </View>
      <View style={styles.metaContainer}>
        <MetasLists array={metas} />
      </View>
    </View>
  );
}


const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#fff',
    alignItems: 'center',
    justifyContent: 'center',
  },
  mainContainer: {
    padding: 30,
    flex: 1,
    flexDirection: 'column',
  },
  inputText: {
    borderColor: "#cccccc",
    borderWidth: 1
  },
  metaContainer: {
    flex: 10
  },

});
