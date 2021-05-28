import React from 'react';
import { StyleSheet, Text, View } from 'react-native';
import { NavigationContainer } from '@react-navigation/native';
import { createStackNavigator } from '@react-navigation/stack';
import UserList from './screens/UserList';
import CreateUser from './screens/CreateUser';
import UserDetail from './screens/UserDetail';

const Stack = createStackNavigator();
//função que lista a navegação
function MyStack() {
  return (
    <Stack.Navigator>
        <Stack.Screen name ="UserList" component={UserList} options={{title:'Lista de Usuários'}}/>
        <Stack.Screen name ="CreateUser" component={CreateUser} options={{title:'Criar novo Usuário'}}/>
        <Stack.Screen name ="UserDetail" component={UserDetail} options={{title:'Detalhes do Usuário'}}/>
    </Stack.Navigator>
  )
}


//função principal, ela chama a afunção my stack, que no caso é para navegação 
function App() {
  return (
    <NavigationContainer>
      <MyStack/>
    </NavigationContainer>
  );
}

export default App;

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#fff',
    alignItems: 'center',
    justifyContent: 'center',
  },
});
