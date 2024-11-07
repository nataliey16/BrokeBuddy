import React, {useEffect, useState} from 'react';
import {View, Text, FlatList, StyleSheet} from 'react-native';
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
      <Text style={CommonStyles.placeholderTxt}>
        Add Transaction to See Entry Here.
      </Text>
      {/* <FlatList /> */}
      <FloatingAction
        actions={actions}
        onPressItem={() => navigation.navigate('Add Transaction')}
      />
    </View>
  );
}

const style = StyleSheet.create({});

export default Home;
