import React, {useEffect, useState} from 'react';
import {View, Text, FlatList, StyleSheet, Pressable} from 'react-native';
import {CommonStyles} from '../utils/CommonStyles';
import {FloatingAction} from 'react-native-floating-action';
import {
  getInitialData,
  addEditTransaction,
  getTransactionByID,
  TransactionType,
  TransactionType_bgColor,
} from '../utils/utility';

function Home({
  route,
  navigation,
}: {
  route: any;
  navigation: any;
}): React.JSX.Element {
  const [transactions, setTransactions] = useState<any[]>([]);

  useEffect(() => {
    //if submitted data from AddTransaction screen exists, add to transactions state
    if (route.params?.submittedData) {
      console.log('Received Submitted Data:', route.params.submittedData);

      setTransactions(prevTransactions => [
        ...prevTransactions,
        route.params.submittedData,
      ]);
    }
  }, [route.params?.submittedData]);
  const actions = [
    {
      text: 'Add Transaction',
      icon: require('../assets/icons/dollar-symbol.png'),
      name: 'add_transaction',
      color: '#f02a4b',
      position: 1,
    },
  ];

  const renderItem = ({item}: {item: any}) => {
    const backgroundColor = TransactionType_bgColor[item.type] || '#FFF';
    return (
      <Pressable
        onPress={() => {
          navigation.navigate('Details', {
            transItemData: item,
            transTypeColor: backgroundColor,
          });
        }}>
        <View style={[CommonStyles.transactionsView, {backgroundColor}]}>
          <Text style={CommonStyles.transactionsTxt}>{item.title}</Text>
          <Text style={CommonStyles.transactionsTxt}>${item.amount}</Text>
        </View>
      </Pressable>
    );
  };

  return (
    <View style={CommonStyles.screens}>
      {transactions.length === 0 ? (
        <Text style={CommonStyles.placeholderTxt}>
          Add Transaction to see transactions.
        </Text>
      ) : (
        <>
          <FlatList
            data={transactions}
            keyExtractor={item => item.id.toString()} // Ensure id is unique
            renderItem={renderItem}
          />
        </>
      )}
      <FloatingAction
        actions={actions}
        onPressItem={() => navigation.navigate('Add Transaction')}
      />
    </View>
  );
}

const style = StyleSheet.create({});

export default Home;
