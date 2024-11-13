import {StyleSheet} from 'react-native';
import {TransactionType_bgColor} from './utility';

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

  placeholderTxt: {
    fontSize: 30,
    color: '#B7B7B7',
    margin: 10,
    padding: 10,
    textAlign: 'center',
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

  transactionsView: {
    flexDirection: 'row',
    justifyContent: 'space-between',
    marginVertical: 3,
    width: '100%',
  },
  transactionsTxt: {
    fontSize: 25,
    justifyContent: 'space-between',
    margin: 10,
    paddingHorizontal: 10,
  },

  errorMsg: {
    color: 'red',
    fontSize: 10,
  },
});
