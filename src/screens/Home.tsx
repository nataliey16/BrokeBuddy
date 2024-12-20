import React, {useEffect, useState} from 'react';
import {View, Text, FlatList, StyleSheet, Pressable} from 'react-native';
import {CommonStyles} from '../utils/CommonStyles';
import {FloatingAction} from 'react-native-floating-action';
import {TransactionType_bgColor} from '../utils/utility';

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

    //if submitted data is from UpdateTransaction and it exists, update transaction

    if (route.params?.editedSubmittedData) {
      console.log(
        'Received Edited Submitted Data:',
        route.params.editedSubmittedData,
      );

      setTransactions(prevTransaction =>
        prevTransaction.map(
          transaction =>
            transaction.id === route.params.editedSubmittedData.id
              ? route.params.editedSubmittedData // updates the trans with matching id
              : transaction, // else keeps the other trans unchanged
        ),
      );
    }
  }, [route.params?.submittedData, route.params?.editedSubmittedData]);

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
          console.log('Item ID:', item.id);
        }}>
        <View style={[CommonStyles.transactionsView, {backgroundColor}]}>
          <Text style={CommonStyles.transactionsTxt}>{item?.title}</Text>
          <Text style={CommonStyles.transactionsTxt}>${item?.amount}</Text>
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
            keyExtractor={item => item.id} // Ensure id is unique
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
