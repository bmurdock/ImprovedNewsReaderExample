import React from 'react';
import {View, Text} from 'react-native';

const Headline = (props) =>
{
    return(
        <View>
            <Text>{props.title}</Text>
        </View>
        
    )
}

export default Headline;