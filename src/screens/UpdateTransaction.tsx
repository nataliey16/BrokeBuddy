import React, {useState} from 'react';
import {View, Text, TextInput, Pressable} from 'react-native';
import {CommonStyles} from '../utils/CommonStyles';
import CheckBox from '../components/CheckBox';
import {
  addEditTransaction,
  defaultTransactionEntry,
  getNewID,
  TransactionType,
} from '../utils/utility';

function UpdateTransactions({
  route,
  navigation,
}: {
  route: any;
  navigation: any;
}): React.JSX.Element {
  const editTransItem = route.params?.editItemParams;
  console.log(editTransItem);

  const [updateTransaction, setUpdateTransaction] = useState(editTransItem);

  const handleInputChange = (name: string, value: any) => {
    setUpdateTransaction((prevEntry: typeof defaultTransactionEntry) => ({
      ...prevEntry,
      [name]: value,
    }));
    console.log(value);
  };

  const handleTransactionTypeChange = (type: TransactionType) => {
    setUpdateTransaction((prevEntry: typeof defaultTransactionEntry) => ({
      ...prevEntry,
      type,
    }));
    console.log(type);
  };

  const handleSubmit = () => {
    //generate an id associated with trans entry
    // const transactionWithId = {...updateTransaction, id: getNewID()};
    const updateTransactionWithId = {
      ...updateTransaction,
      // id: updateTransaction.id.toString(),
    };
    console.log(updateTransactionWithId);

    addEditTransaction(updateTransactionWithId);
    console.log(updateTransactionWithId);
    navigation.navigate('Transactions', {
      editedSubmittedData: updateTransactionWithId,
    });
    //reset the form
    setUpdateTransaction(defaultTransactionEntry);
  };
  return (
    <View>
      <TextInput
        style={CommonStyles.txtInput}
        placeholder={updateTransaction.title}
        value={updateTransaction.title}
        onChangeText={value => handleInputChange('title', value)}
      />
      <TextInput
        style={[CommonStyles.txtInput, {height: 100}]}
        placeholder={updateTransaction.desc}
        value={updateTransaction.desc}
        onChangeText={value => handleInputChange('desc', value)}
      />
      <TextInput
        style={CommonStyles.txtInput}
        placeholder={updateTransaction.amount.toString()}
        value={updateTransaction.amount.toString()}
        onChangeText={value => handleInputChange('amount', parseFloat(value))}
        keyboardType="numeric"
      />
      <CheckBox
        label="Essential"
        value={updateTransaction.type === TransactionType.Essential}
        onChangeTransType={() =>
          handleTransactionTypeChange(TransactionType.Essential)
        }
      />
      <CheckBox
        label="Leisure"
        value={updateTransaction.type === TransactionType.Leisure}
        onChangeTransType={() =>
          handleTransactionTypeChange(TransactionType.Leisure)
        }
      />
      <CheckBox
        label="Others"
        value={updateTransaction.type === TransactionType.Others}
        onChangeTransType={() =>
          handleTransactionTypeChange(TransactionType.Others)
        }
      />
      <Pressable style={CommonStyles.button} onPress={handleSubmit}>
        <Text style={CommonStyles.btnTxt}>Submit</Text>
      </Pressable>
    </View>
  );
}

export default UpdateTransactions;
