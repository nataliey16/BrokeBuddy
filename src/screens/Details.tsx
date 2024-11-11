import React from 'react';
import {View, Text, StyleSheet} from 'react-native';
import {CommonStyles} from '../utils/CommonStyles';

function Details({
  route,
  navigation,
}: {
  route: any;
  navigation: any;
}): React.JSX.Element {
  const transParams = route.params?.transItemData;
  const transTypeColor = route.params?.transTypeColor;
  console.log(transTypeColor);
  return (
    <View style={CommonStyles.screens}>
      <View style={[style.boxView, {borderColor: transTypeColor}]}>
        <View
          style={[
            style.titleView,
            {backgroundColor: transTypeColor, borderColor: transTypeColor},
          ]}>
          <Text style={[CommonStyles.txt]}>{transParams.title}</Text>
        </View>
        <View style={style.itemDescView}>
          <Text style={style.txt}>{transParams.desc}</Text>
          <Text style={style.txt}>${transParams.amount}</Text>
        </View>
      </View>
    </View>
  );
}

const style = StyleSheet.create({
  boxView: {
    borderWidth: 2,
    borderRadius: 10,
    width: 300,
    height: 200,
    backgroundColor: '#fff',
  },
  titleView: {
    borderTopEndRadius: 10,
    borderWidth: 2,
    width: '100%',
    padding: 10,
    justifyContent: 'center',
    alignItems: 'center',
  },
  itemDescView: {
    flex: 1,
    padding: 10,
    justifyContent: 'center',
    alignItems: 'center',
  },
  txt: {
    fontSize: 20,
    color: '#525252',
    margin: 10,
  },
});

export default Details;
