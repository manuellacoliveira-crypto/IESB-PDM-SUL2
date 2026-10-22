import { createBottomTabNavigator } from '@react-navigation/bottom-tabs';
import { createNativeStackNavigator } from '@react-navigation/native-stack';
import { StatusBar } from 'expo-status-bar';
import { StyleSheet, Text, View } from 'react-native';
import DespesasRecentes from './screens/DespesasRecentes';
import TodasDespesas from './screens/TodasDespesas';
import { NavigationContainer } from '@react-navigation/native';
import GerenciarDespesa from './screens/GerenciarDespesa';
import { Ionicons } from '@expo/vector-icons';

export default function App() { 

  const Tab = createBottomTabNavigator();  

  function BottomTabScreen() {  
  return (
    <Tab.Navigator>
      <Tab.Screen name="Recentes" component={DespesasRecentes}
      options={{tabBarIcon: ({color, size}) => (<Ionicons name="hourglass" size={size} color={color} />),
      tabBarLabel: 'Recentes',
      title: 'Despesas Recentes',
      tabBarstyle: { fontSize: 12 }
      }}/> 
      
      <Tab.Screen name="Todas" component={TodasDespesas} 
      options={{tabBarIcon: ({color, size}) => (<Ionicons name="wallet-outline" size={size} color={color} />),
      tabBarLabel: 'Todas',
      title: 'Todas as Despesas',
      tabBarstyle: { fontSize: 12 }
      }} />      
    </Tab.Navigator>
  );
}

const Stack = createNativeStackNavigator();

return (
  <NavigationContainer>
    <Stack.Navigator>
      <Stack.Screen name="Despesas" component={BottomTabScreen} 
      options={{ headerShown: false }} /> 
     
        
      <Stack.Screen name="GerenciarDespesa" component={GerenciarDespesa} />
    </Stack.Navigator>
  </NavigationContainer>
);
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#fff',
    alignItems: 'center',
    justifyContent: 'center',
  },
});
