import React from 'react';
import { Text, View } from 'react-native';
import { Picker } from '@react-native-picker/picker';
import { styles } from '../styles';
import AppContext from '../context';
import { cacheSources, cacheArticles } from '../newsapi';

export default class SourcePicker extends React.Component {
    constructor()
    {
        super();
        this.state = {
            sourceItems: [],
            selectedValue: '',
        }
    }
    static contextType = AppContext;
    componentDidMount()
    {
        cacheArticles(this.context.apikey, null)
        .then((cachedArticles) =>
        {
            console.log('cachedArticles: ', cachedArticles);
            // get all of the valid sources from cachedArticles
            // probably want to use a Set (which is like a fancy array);
            const sourceSet = new Set();
            for (let i = 0; i < cachedArticles.length; i++)
            {
                if (cachedArticles[i].source.id !== null)
                {
                    sourceSet.add(cachedArticles[i].source.id);
                }
                
            }
            const validSources = Array.from(sourceSet);
            return validSources
        })
        .then((validSources) =>
        {
            cacheSources(this.context.apikey)
            .then((sourceData) => {
                console.log('sourceData: ', sourceData);
                console.log('valid sources: ', validSources);
                const filteredSources = sourceData.filter((source) =>
                {
                    return validSources.indexOf(source.id) !== -1;
                });

                this.setState({
                    sourceItems: filteredSources.map((source) =>
                    {
                        return <Picker.Item key={`source_${source.id}`} label={source.name} value={source.id} />
                    }),
                })
            });
        })

    }

    handleSelection = (selected) =>
    {
        console.log('selected: ', selected);
        this.setState({
            selectedValue: selected,
        });
        this.context.setSources([selected]);
    }
    
    render()
    {
        return (
            <View style={{ borderWidth: 1 }}>

                <Picker
                    selectedValue={this.state.selectedValue}
                    onValueChange={this.handleSelection}
                >
                    <Picker.Item label='Filter articles...' />
                    {this.state.sourceItems}
                </Picker>

            </View>
        );
    }
}