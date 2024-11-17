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
import AddTransaction from './AddTransaction';

function UpdateTransactions({
  route,
  navigation,
}: {
  route: any;
  navigation: any;
}): React.JSX.Element {
  const editTransItem = route.params?.editItemParams;

  const [updateTransaction, setUpdateTransaction] = useState(editTransItem);
  const [errors, setErrors] = useState<{
    title?: string;
    desc?: string;
    amount?: string;
  }>({});

  const validateForm = () => {
    let newErrors: {title?: string; desc?: string; amount?: string} = {};

    if (!updateTransaction.title) {
      newErrors.title = 'Title is required.';
    }
    if (!updateTransaction.desc) {
      newErrors.desc = 'Description is required.';
    }
    if (!updateTransaction.amount) {
      newErrors.amount = 'Amount is required.';
    }

    setErrors(newErrors);
    //if error object does not have a key for one of the values, no error msgs and form is valid
    return Object.keys(newErrors).length === 0;
  };

  const handleInputChange = (name: string, value: any) => {
    setUpdateTransaction((prevEntry: typeof defaultTransactionEntry) => ({
      ...prevEntry,
      [name]: value,
    }));
  };

  const handleTransactionTypeChange = (type: TransactionType) => {
    setUpdateTransaction((prevEntry: typeof defaultTransactionEntry) => ({
      ...prevEntry,
      type,
    }));
  };

  const handleSubmit = () => {
    const formIsValid = validateForm();

    if (formIsValid) {
      const updateTransactionWithId = {
        ...updateTransaction,
      };

      addEditTransaction(updateTransactionWithId);
      console.log(updateTransactionWithId);
      navigation.navigate('Transactions', {
        editedSubmittedData: updateTransactionWithId,
      });
      //reset the form
      setUpdateTransaction(defaultTransactionEntry);
      console.log('Form submitted successfully with edits!');
    } else {
      console.log('Form has errors. Please correct them.');
    }
  };
  return (
    <View>
      <TextInput
        style={CommonStyles.txtInput}
        placeholder={updateTransaction.title}
        value={updateTransaction.title}
        onChangeText={value => handleInputChange('title', value)}
      />
      {errors.title ? (
        <Text style={CommonStyles.errorMsg}>{errors.title}</Text>
      ) : null}
      <TextInput
        style={[CommonStyles.txtInput, {height: 100}]}
        placeholder={updateTransaction.desc}
        value={updateTransaction.desc}
        onChangeText={value => handleInputChange('desc', value)}
      />
      {errors.desc ? (
        <Text style={CommonStyles.errorMsg}>{errors.desc}</Text>
      ) : null}
      <TextInput
        style={CommonStyles.txtInput}
        placeholder={updateTransaction.amount.toString()}
        value={updateTransaction.amount.toString()}
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
