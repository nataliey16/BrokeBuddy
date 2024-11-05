import React, {useState} from 'react';
import {View, Text, TextInput, Button, Pressable} from 'react-native';
import {CommonStyles} from '../utils/CommonStyles';
import CheckBox from '../components/CheckBox';
import {
  addEditTransaction,
  defaultTransactionEntry,
  getNewID,
  TransactionType,
} from '../utils/utility';

function AddTransaction(): React.JSX.Element {
  const [newTransEntry, setNewTransEntry] = useState(defaultTransactionEntry);

  const handleInputChange = (name: string, value: any) => {
    setNewTransEntry(prevEntry => ({
      ...prevEntry,
      [name]: value,
    }));
    console.log(value);
  };

  const handleSubmit = () => {
    //generate an id associated with trans entry
    const transactionWithId = {...newTransEntry, id: getNewID()};
    console.log(transactionWithId);

    addEditTransaction(transactionWithId);

    //reset the form
    setNewTransEntry(defaultTransactionEntry);
  };

  return (
    <View>
      <TextInput
        style={CommonStyles.txtInput}
        placeholder="Title"
        value={newTransEntry.title}
        onChangeText={value => handleInputChange('title', value)}
      />
      <TextInput
        style={[CommonStyles.txtInput, {height: 100}]}
        placeholder="Add Description"
        value={newTransEntry.desc}
        onChangeText={value => handleInputChange('desc', value)}
      />
      <TextInput
        style={CommonStyles.txtInput}
        placeholder="Amount in CAD"
        value={newTransEntry.amount.toString()}
        onChangeText={value => handleInputChange('amount', parseFloat(value))}
      />
      <CheckBox label="Essential" transType={TransactionType.Essential} />
      <CheckBox label="Leisure" transType={TransactionType.Leisure} />
      <CheckBox label="Others" transType={TransactionType.Others} />
      <Pressable style={CommonStyles.button} onPress={handleSubmit}>
        <Text style={CommonStyles.btnTxt}>Submit</Text>
      </Pressable>
    </View>
  );
}

export default AddTransaction;
