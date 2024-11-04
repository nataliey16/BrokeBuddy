import React from 'react';
import {View, Text, TextInput, Button, Pressable} from 'react-native';
import {CommonStyles} from '../utils/CommonStyles';
import CheckBox from '../components/CheckBox';

function AddTransaction(): React.JSX.Element {
  return (
    <View>
      <TextInput style={CommonStyles.txtInput} placeholder="Title" />
      <TextInput
        style={[CommonStyles.txtInput, {height: 100}]}
        placeholder="Add Description"
      />
      <TextInput style={CommonStyles.txtInput} placeholder="Amount in CAD" />
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
