import { StyleSheet } from 'react-native';

export const styles = StyleSheet.create({
    container: {
      flex: 1,
      backgroundColor: '#fff',
      alignItems: 'center',
        justifyContent: 'center',
        borderWidth: 4,
        borderColor: '#000',
    },
    inputStyle: {
      marginTop: 20,
      width: 300,
      height: 40,
      paddingHorizontal: 10,
      borderRadius: 50,
      backgroundColor: '#ccc',
    },
    formTitle: {
      fontSize: 20,
      color: '#fff',
      backgroundColor: '#000',
      marginVertical: 20,
      width: 400,
      padding: 10,
      textAlign: 'center',
    },
    button: {
      borderWidth: StyleSheet.hairlineWidth,
      paddingHorizontal: 25,
      paddingVertical: 10,
      color: '#000',
      margin: 5,
      borderColor: 'black',
      backgroundColor: '#ccc',
    }
  });