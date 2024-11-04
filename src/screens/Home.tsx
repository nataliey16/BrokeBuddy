import React from 'react';
import {View, Text, Button} from 'react-native';
import {CommonStyles} from '../utils/CommonStyles';

function Home({
  route,
  navigation,
}: {
  route: any;
  navigation: any;
}): React.JSX.Element {
  return (
    <View style={CommonStyles.screens}>
      <Text> Home</Text>
      <Button
        title="Go To Details"
        onPress={() => {
          console.log('clicked');
          navigation.navigate('Add Transaction');
        }}></Button>
    </View>
  );
}

export default Home;
