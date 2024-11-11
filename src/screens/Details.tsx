import React, {useEffect} from 'react';
import {View, Text, StyleSheet, Button} from 'react-native';
import {CommonStyles} from '../utils/CommonStyles';

function Details({
  route,
  navigation,
}: {
  route: any;
  navigation: any;
}): React.JSX.Element {
  const transItemParams = route.params?.transItemData;
  const transTypeColor = route.params?.transTypeColor;

  useEffect(() => {
    navigation.setOptions({
      headerRight: () => (
        <Button
          title="Edit"
          color="#000"
          onPress={() => {
            navigation.navigate('Update Transaction', {
              editItemParams: transItemParams,
            });
            // console.log(transItemParams);
          }}
        />
      ),
    });
  }, [navigation, transItemParams]);

  return (
    <View style={CommonStyles.screens}>
      <View style={[style.boxView, {borderColor: transTypeColor}]}>
        <View
          style={[
            style.titleView,
            {backgroundColor: transTypeColor, borderColor: transTypeColor},
          ]}>
          <Text style={[CommonStyles.txt]}>{transItemParams?.title}</Text>
        </View>
        <View style={style.itemDescView}>
          <Text style={style.txt}>{transItemParams?.desc}</Text>
          <Text style={style.txt}>${transItemParams?.amount}</Text>
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
    color: '#313131',
    margin: 10,
  },
});

export default Details;
