import React from 'react';
import {Text, View, Picker } from 'react-native';
import { styles } from '../styles';
import AppContext from '../context';
import { cacheSources } from '../newsapi';

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
        cacheSources(this.context.apikey)
            .then((sourceData) => {
                console.log('sourceData: ', sourceData);
                this.setState({
                    sourceItems: sourceData.map((source) =>
                    {
                        return <Picker.Item key={`source_${source.id}`} label={source.name} value={source.id} />
                    }),
                })
            });
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
            <View>

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