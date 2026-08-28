import { ScrollView, StyleSheet } from "react-native";

function MetasLists(props) {
    <ScrollView>
        {props.array.map((meta, index) => <Text key={index} style={styles.item}>{meta}</Text>)}
    </ScrollView>

};

export default MetasLists; 

const styles = StyleSheet.create({
   
    item: {
      margin: 8,
      borderRadius: 5,
      padding: 10,
      backgroundColor: 'lightblue',
    }
  });
  