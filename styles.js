import { StyleSheet } from 'react-native';

export const styles = StyleSheet.create({
    container: {
      flex: 1,
        backgroundColor: '#fff',
        flexDirection: 'column',
      
      alignItems: 'center',
        justifyContent: 'flex-start',
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
        fontSize: 24,
        fontWeight: '900',
      padding: 10,
        textAlign: 'center',
        marginHorizontal: 'auto',
      width: '100%',
    },
    button: {
      borderWidth: StyleSheet.hairlineWidth,
      paddingHorizontal: 25,
      paddingVertical: 10,
      color: '#000',
      margin: 5,
      borderColor: 'black',
      backgroundColor: '#ccc',
    },
    headlineContainer: {
        flex: 1,
        justifyContent: 'space-between',
        alignItems: 'center',
        marginTop: 5,
        maxWidth: '90%',
        marginHorizontal: 'auto',
    },
    titleBar: {
        borderColor: 'red',
        alignItems: 'flex-end',
        justifyContent: 'flex-end',
        flexDirection: 'row',
        marginVertical: 40,
    },
    settingsBtn: {
        maxWidth: 40,
        marginRight: 10,
    }
  });