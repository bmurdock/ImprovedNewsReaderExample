import { StatusBar } from 'expo-status-bar';
import React from 'react';
import { StyleSheet, Text, View, Button, TextInput, TouchableHighlight } from 'react-native';
import { storeString, getString } from '../util';
import NewsPage from './NewsPage';
import AppContext from '../context';
import { styles } from '../styles';

export default class App extends React.Component {
  constructor()
  {
    super();
    this.state = {
      apikey: '',
    }
  }
  static contextType = AppContext;
  handleInput = ({nativeEvent}) =>
  {
    const { text } = nativeEvent;
    console.log('text: ', text);
    this.setState({
        apikey: text,
    })
  }
  handleNext = ({nativeEvent}) =>
  {
    console.log('nativeEvent: ', nativeEvent);
      storeString('apikey', this.state.apikey)
          .then(() => {
              this.context.setApiKey(this.state.apikey);
          });
          this.context.setView(<NewsPage />);
  }
  componentDidMount()
  {
      getString('apikey')
          .then((data) => {
              if (data !== null && data !== '') {
                  this.context.setApiKey(data);
                  this.context.setView(<NewsPage />);
              }
          });
  }
  render()
  {
    return (
      <View style={styles.container}>
        <Text style={styles.formTitle}>Welcome {this.state.inputName}</Text>

        <Text>Enter your API Key for NewsAPI.org</Text>
        <TextInput placeholder="APIKey" style={styles.inputStyle} onChange={this.handleInput} />
        <TouchableHighlight onPress={this.handleNext}>
          <View style={styles.button}>
            <Text>Next</Text>
          </View>
        </TouchableHighlight>
        <StatusBar style="auto" />
      </View>
    );
  }

}

