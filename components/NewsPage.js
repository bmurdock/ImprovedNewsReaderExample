import React from 'react';
import {Text, View, Picker } from 'react-native';
import { styles } from '../styles';
import AppContext from '../context';
import SourcePicker from './SourcePicker';
import Headline from './Headline';
import { cacheSources, cacheArticles } from '../newsapi';

export default class NewsPage extends React.Component {
    constructor()
    {
        super();
    }
    static contextType = AppContext;
    componentDidMount()
    {
        cacheSources(this.context.apikey)
            .then(() => {
                return cacheArticles(this.context.apikey, null);
            });
    }
    render()
    {
        console.log('context: ', this.context);
        return (
            <View style={styles.container}>
                <Text style={styles.formTitle}>Welcome {this.context.name}</Text>
                <View>
                    <SourcePicker />
                </View>
                <View>
                    {this.context.headlines}
                </View>

            </View>
        )
    }
}
