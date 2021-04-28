import React from 'react';
import {View, ScrollView } from 'react-native';
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
            })
            .then((articles) => {
                this.context.setHeadlines(articles.slice(0, 10).map((art, i) =>
                {
                    return <Headline key={`article_${i}`} {...art} />
                }))
            });
    }
    render()
    {
        return (
            <View style={styles.container}>
                <View>
                    <SourcePicker />
                </View>
                <ScrollView>
                    {this.context.headlines}
                </ScrollView>

            </View>
        )
    }
}
