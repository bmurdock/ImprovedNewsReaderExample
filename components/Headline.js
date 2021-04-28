import React from 'react';
import { View, Text, Image } from 'react-native';
import { styles } from '../styles';

const Headline = (props) =>
{
    let image;
    if (typeof props.urlToImage ==='string' && props.urlToImage !== '')
    {
        console.log('source: ', props.urlToImage);
        image = <Image
            style={{ width: 300, height: 200 }}
            source={{ uri: props.urlToImage }}
        />;
    }
    
    return(
        <View style={styles.headlineContainer}>
            {image}
            <Text>{props.title}</Text>
        </View>
        
    )
}

export default Headline;