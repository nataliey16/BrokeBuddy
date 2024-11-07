import React from 'react';
import {View, Text, Button} from 'react-native';
import {CommonStyles} from '../utils/CommonStyles';
import {FloatingAction} from 'react-native-floating-action';

function Home({
  route,
  navigation,
}: {
  route: any;
  navigation: any;
}): React.JSX.Element {
  const actions = [
    {
      text: 'Add Transaction',
      icon: require('../assets/icons/dollar-symbol.png'),
      name: 'add_transaction',
      color: '#f02a4b',
      position: 1,
    },
  ];
  return (
    <View style={CommonStyles.screens}>
      <Text> Home</Text>
      <FloatingAction
        actions={actions}
        onPressItem={name => {
          {
            navigation.navigate('Add Transaction');
          }
        }}
      />
      {/* <Button
        title="Go To Details"
        onPress={() => {
          navigation.navigate('Add Transaction');
        }}></Button> */}
    </View>
  );
}

export default Home;
