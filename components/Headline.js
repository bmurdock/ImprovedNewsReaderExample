import React from 'react';
import {View, Text, Image} from 'react-native';

const Headline = (props) =>
{
    return(
        <View>
            <Image
                style={{width: 300, height: 200, backgroundSize: 'contain'}}
                source={props.urlToImage}
                />
            <Text>{props.title}</Text>
        </View>
        
    )
}

export default Headline;