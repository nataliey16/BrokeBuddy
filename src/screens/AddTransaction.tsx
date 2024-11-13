import React, {useEffect, useState} from 'react';
import {View, Text, TextInput, Pressable} from 'react-native';
import {CommonStyles} from '../utils/CommonStyles';
import CheckBox from '../components/CheckBox';
import {
  addEditTransaction,
  defaultTransactionEntry,
  getNewID,
  TransactionType,
} from '../utils/utility';

function AddTransaction({
  route,
  navigation,
}: {
  route: any;
  navigation: any;
}): React.JSX.Element {
  const [newTransEntry, setNewTransEntry] = useState(defaultTransactionEntry);
  const [errors, setErrors] = useState<{
    title?: string;
    desc?: string;
    amount?: string;
  }>({});

  const validateForm = () => {
    let newErrors: {title?: string; desc?: string; amount?: string} = {};

    if (!newTransEntry.title) {
      newErrors.title = 'Title is required.';
    }
    if (!newTransEntry.desc) {
      newErrors.desc = 'Description is required.';
    }
    if (!newTransEntry.amount) {
      newErrors.amount = 'Amount is required.';
    }

    setErrors(newErrors);
    //if error object does not have a key for one of the values, no error msgs and form is valid
    return Object.keys(newErrors).length === 0;
  };

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
  };

  const handleSubmit = () => {
    const formIsValid = validateForm();

    if (formIsValid) {
      //generate an id associated with trans entry
      const transactionWithId = {...newTransEntry, id: getNewID()};

      addEditTransaction(transactionWithId);

      navigation.navigate('Transactions', {
        submittedData: transactionWithId,
      });

      //reset the form
      setNewTransEntry(defaultTransactionEntry);

      console.log('Form submitted successfully!');
    } else {
      console.log('Form has errors. Please correct them.');
    }
  };

  return (
    <View>
      <TextInput
        style={CommonStyles.txtInput}
        placeholder="Title"
        value={newTransEntry.title}
        onChangeText={value => handleInputChange('title', value)}
      />
      {errors.title ? (
        <Text style={CommonStyles.errorMsg}>{errors.title}</Text>
      ) : null}
      <TextInput
        style={[CommonStyles.txtInput, {height: 100}]}
        placeholder="Add Description"
        value={newTransEntry.desc}
        onChangeText={value => handleInputChange('desc', value)}
      />
      {errors.desc ? (
        <Text style={CommonStyles.errorMsg}>{errors.desc}</Text>
      ) : null}
      <TextInput
        style={CommonStyles.txtInput}
        placeholder="Amount in CAD"
        value={newTransEntry.amount.toString()}
        onChangeText={value => handleInputChange('amount', parseFloat(value))}
        keyboardType="numeric"
      />
      {errors.amount ? (
        <Text style={[CommonStyles.errorMsg, {marginBottom: 10}]}>
          {errors.amount}
        </Text>
      ) : null}
      <CheckBox
        label="Essential"
        value={newTransEntry.type === TransactionType.Essential}
        onChangeTransType={() =>
          handleTransactionTypeChange(TransactionType.Essential)
        }
      />
      <CheckBox
        label="Leisure"
        value={newTransEntry.type === TransactionType.Leisure}
        onChangeTransType={() =>
          handleTransactionTypeChange(TransactionType.Leisure)
        }
      />
      <CheckBox
        label="Others"
        value={newTransEntry.type === TransactionType.Others}
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

export default AddTransaction;
