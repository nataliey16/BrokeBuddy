import {StyleSheet} from 'react-native';

export const CommonStyles = StyleSheet.create({
  screens: {
    flex: 1,
    alignItems: 'center',
    justifyContent: 'center',
  },

  txt: {
    fontSize: 30,
    color: '#000',
    margin: 10,
  },

  txtInput: {
    borderRadius: 10,
    borderWidth: 1,
    borderColor: '#000',
    margin: 20,
    padding: 10,
    fontSize: 20,
  },

  button: {
    borderRadius: 10,
    //   maxWidth: 150,
    minWidth: '40%',
    height: 60,
    alignSelf: 'center',
    padding: 10,
    marginTop: 50,
    alignItems: 'center',
    justifyContent: 'center',
    backgroundColor: '#000',
  },

  btnTxt: {
    fontSize: 25,
    fontWeight: '600',
    color: '#fff',
    textAlign: 'center',
  },
});
