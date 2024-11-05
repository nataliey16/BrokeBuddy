import React, {useState} from 'react';
import {View, Text, TextInput, Button, Pressable} from 'react-native';
import {CommonStyles} from '../utils/CommonStyles';
import CheckBox from '../components/CheckBox';
import {TransactionType} from '../utils/utility';

function AddTransaction(): React.JSX.Element {
  const [newTransEntry, setNewTransEntry] = useState({
    id: '',
    title: '',
    desc: '',
    amount: 0,
    type: TransactionType.Essential,
  });

  const handleInputChange = (name: string, value: any) => {
    setNewTransEntry(prevEntry => ({
      ...prevEntry,
      [name]: value,
    }));
    console.log(value);
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
      />
      <TextInput
        style={CommonStyles.txtInput}
        placeholder="Amount in CAD"
        value={newTransEntry.amount.toString()}
      />
      <CheckBox label="Essential" />
      <CheckBox label="Leisure" />
      <CheckBox label="Others" />
      <Pressable style={CommonStyles.button}>
        <Text style={CommonStyles.btnTxt}>Submit</Text>
      </Pressable>
    </View>
  );
}

export default AddTransaction;
