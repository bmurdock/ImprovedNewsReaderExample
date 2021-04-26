import { StatusBar } from 'expo-status-bar';
import React from 'react';
import { StyleSheet, Text, View, Button, TextInput, TouchableHighlight } from 'react-native';
import { storeString, getString, fetchJSON, getJSON } from './util';
import Welcome from './components/Welcome';
import ApiKey from './components/ApiKey';
import { cacheSources } from './newsapi';
import Sources from './components/SourcePicker';
import AppContext from './context';
import { styles } from './styles';
import Headline from './components/Headline';

export default class App extends React.Component {
  constructor()
  {
    super();
    this.state = {
      activeView: <Welcome />,
      apikey: '',
      name: '',
      selectedSources: [],
      headlines: [],
    }
  }

  setHeadlines = (headlines) =>
  {
    this.setState({
      headlines: headlines,
    });
  }

  setView = (view) =>
  {
    console.log('setting view: ', view);
    this.setState({
      activeView: view,
    });
  }

  setApiKey = (apikey) =>
  {
    this.setState({
      apikey: apikey,
    });
  }

  setName = (val) =>
  {
    this.setState({
      name: val,
    });
  }
  
  setSources = (val) =>
  {
    this.setState({
      selectedSources: val,
    }, () =>
    {
      console.log('sources set: ', this.state);
    });
  }
  
  componentDidMount()
  {
    /*
      Do the following things:
      1. Do we have the user's name?
      2. Do we have a valid API Key?
      3. Display headlines

    */

  }

  render()
  {
    const { setView, setApiKey, setName, setSources, setHeadlines} = this;

    return (
      <AppContext.Provider value={{ ...this.state, setView, setApiKey, setName, setSources, setHeadlines}}>
        <View style={styles.container}>
          {this.state.activeView}
        </View>
      </AppContext.Provider>
    );
  }
}


