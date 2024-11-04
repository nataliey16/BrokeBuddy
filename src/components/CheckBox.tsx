import React from 'react';
import {View, Text, TextInput, StyleSheet} from 'react-native';
import BouncyCheckbox from 'react-native-bouncy-checkbox';

type CheckBoxPropType = {
  label: string;
};

function CheckBox(props: CheckBoxPropType): React.JSX.Element {
  const {label} = props;
  return (
    <View style={styles.checkboxView}>
      <BouncyCheckbox
        size={25}
        fillColor="red"
        unFillColor="#FFFFFF"
        text={label}
        iconStyle={{borderColor: 'red'}}
        innerIconStyle={{borderWidth: 2}}
        // textStyle={{fontFamily: 'JosefinSans-Regular'}}
        onPress={(isChecked: boolean) => {
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
