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
  const editTransItemParams = route.params?.transItemData;
  //need to update state of form instead
  console.log(editTransItemParams);
  const [newTransEntry, setNewTransEntry] = useState(defaultTransactionEntry);

  const handleInputChange = (name: string, value: any) => {
    setNewTransEntry(prevEntry => ({
      ...prevEntry,
      [name]: value,
    }));
  };

  const handleTransactionTypeChange = (type: TransactionType) => {
    setNewTransEntry(prevEntry => ({
      ...prevEntry,
      type,
    }));
    console.log(type);
  };

  const handleSubmit = () => {
    //generate an id associated with trans entry
    const transactionWithId = {...newTransEntry, id: getNewID()};

    addEditTransaction(transactionWithId);

    navigation.navigate('Transactions', {
      submittedData: transactionWithId,
    });
    //reset the form
    setNewTransEntry(defaultTransactionEntry);
  };
  return (
    <View>
      <TextInput
        style={CommonStyles.txtInput}
        placeholder="Title"
        value={editTransItemParams.title}
        onChangeText={value => handleInputChange('title', value)}
      />
      <TextInput
        style={[CommonStyles.txtInput, {height: 100}]}
        placeholder="Add Description"
        value={editTransItemParams.desc}
        onChangeText={value => handleInputChange('desc', value)}
      />
      <TextInput
        style={CommonStyles.txtInput}
        placeholder="Amount in CAD"
        value={editTransItemParams.amount.toString()}
        onChangeText={value => handleInputChange('amount', parseFloat(value))}
        keyboardType="numeric"
      />
      <CheckBox
        label="Essential"
        value={editTransItemParams.type === TransactionType.Essential}
        onChangeTransType={() =>
          handleTransactionTypeChange(TransactionType.Essential)
        }
      />
      <CheckBox
        label="Leisure"
        value={editTransItemParams.type === TransactionType.Leisure}
        onChangeTransType={() =>
          handleTransactionTypeChange(TransactionType.Leisure)
        }
      />
      <CheckBox
        label="Others"
        value={editTransItemParams.type === TransactionType.Others}
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
