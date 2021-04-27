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
  }
    // use the context we created
  static contextType = AppContext;
  handleName = ({nativeEvent}) =>
  {
    const {text} = nativeEvent;
    this.context.setName(text);
  }
  handleNext = ({nativeEvent}) =>
  {
    storeString('name', this.context.name);
    this.context.setView(<ApiKey />)
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
            <Text style={styles.formTitle}>Welcome {this.context.name}</Text>
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
