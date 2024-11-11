import React from 'react';
import {Button} from 'react-native';

import {NavigationContainer} from '@react-navigation/native';
import {createNativeStackNavigator} from '@react-navigation/native-stack';

import Home from './screens/Home';
import AddTransaction from './screens/AddTransaction';
import Details from './screens/Details';
import UpdateTransaction from './screens/UpdateTransaction';

const Stack = createNativeStackNavigator();

function Main(): React.JSX.Element {
  return (
    <NavigationContainer>
      <Stack.Navigator
        initialRouteName="Transactions"
        screenOptions={{
          headerStyle: {
            backgroundColor: '#e0114f',
          },
          headerTitleStyle: {
            fontWeight: 'bold',
            color: '#fff',
            fontSize: 30,
          },
        }}>
        <Stack.Screen name="Transactions" component={Home} />
        <Stack.Screen
          name="Details"
          component={Details}
          options={({navigation}) => ({
            title: 'Details',
            headerRight: () => (
              <Button
                title="Edit"
                color="#000"
                onPress={() => navigation.navigate('Update Transaction')}
              />
            ),
          })}
        />
        <Stack.Screen name="Add Transaction" component={AddTransaction} />
        <Stack.Screen name="Update Transaction" component={UpdateTransaction} />
      </Stack.Navigator>
    </NavigationContainer>
  );
}

export default Main;
