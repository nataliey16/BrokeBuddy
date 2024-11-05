import React from 'react';
import {View, Text, TextInput, StyleSheet} from 'react-native';
import BouncyCheckbox from 'react-native-bouncy-checkbox';
import {TransactionType} from '../utils/utility';

type CheckBoxPropType = {
  label: string;
  transType: TransactionType;
};

function CheckBox(props: CheckBoxPropType): React.JSX.Element {
  const {label, transType} = props;
  return (
    <View style={styles.checkboxView}>
      <BouncyCheckbox
        isChecked={transType === TransactionType.Essential} // Replace 'SomeValue' with the appropriate value
        size={25}
        fillColor="red"
        unFillColor="#FFFFFF"
        text={label}
        iconStyle={{borderColor: 'red'}}
        innerIconStyle={{borderWidth: 2}}
        // textStyle={{fontFamily: 'JosefinSans-Regular'}}
        onPress={(isChecked: string) => {
          console.log(isChecked);
        }}
      />
    </View>
  );
}

const styles = StyleSheet.create({
  checkboxView: {
    flexDirection: 'row',
    padding: 10,
    alignItems: 'center',
    marginLeft: 14,
  },
  label: {
    fontSize: 25,
    fontWeight: '600',
  },
});

export default CheckBox;
