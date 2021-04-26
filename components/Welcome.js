import { StatusBar } from 'expo-status-bar';
import React from 'react';
import { StyleSheet, Text, View, Button, TextInput, TouchableHighlight } from 'react-native';
import { storeString, getString } from '../util';
import AppContext from '../context';
import ApiKey from './ApiKey';
import { styles } from '../styles';

export default class App extends React.Component {
  constructor()
  {
    super();
    this.state = {
      inputName: '',
    }
  }
    // use the context we created
    static contextType = AppContext;
  handleName = ({nativeEvent}) =>
  {
    const { text } = nativeEvent;
    console.log('text: ', text);
    this.setState({
      inputName: text,
    })
  }
  handleNext = ({nativeEvent}) =>
  {
    console.log('nativeEvent: ', nativeEvent);
    storeString('name', this.state.inputName)
      .then(() =>
      {
        console.log('saved');
    })
  }
  componentDidMount()
  {
    getString('name')
    .then((data) => {
        if (data !== null && data !== '')
        {
            this.context.setName(data);
            this.context.setView(<ApiKey />);
        }
        
    })
  }
  render()
  {
      return (
        <View style={styles.container}>
            <Text style={styles.formTitle}>Welcome {this.state.inputName}</Text>
            <Text>What should we call you?</Text>
            <TextInput placeholder="Name" style={styles.inputStyle} onChange={this.handleName} />
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
