import React from 'react';
import { Text, View} from 'react-native';
import Icon from 'react-native-vector-icons/FontAwesome5';
import { styles } from '../styles';
import AppContext from '../context';

const TitleBar = () =>
{
    const context = React.useContext(AppContext);
    console.log('context: ', context);
    return (
        <View style={styles.titleBar}>
            <Text style={styles.formTitle}>Welcome {context.name}</Text>
            <View style={styles.settingsBtn}>
                <Icon.Button name={'cog'} />
            </View>
        </View>
    )
}

export default TitleBar;