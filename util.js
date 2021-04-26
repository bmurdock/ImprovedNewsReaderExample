import AsyncStorage from '@react-native-async-storage/async-storage';

export const storeString = async (k,v) => {
    try {
        await AsyncStorage.setItem(k, v);
    } catch (e) {
      // saving error
        console.log('Could not store value.');
    }
}

export const getString = async (k) => {
    console.log('attempting to get: ', k);
    try {
        const value = await AsyncStorage.getItem(k);
        console.log(`Got value for ${k}: ${value}`);
        return value;
    } catch(e) {
        // error reading value
        console.log('Error reading value: ', e);
    }
}
export const getJSON = async (k) =>
{
    try {
        const data = await getString(k);
        console.log('typeof: ', typeof data);
        if (typeof data === 'string' && data !== '' && data !== 'undefined')
        {
            const value = JSON.parse(data);
            return value;
        }
        return null;
    }
    catch (err)
    {
        console.log(`Error reading ${k}: ${err}`);
    }
}

// we expect a json response so let's shorten the fetch code a bit
export const fetchJSON = async (route) => {
    try {
        return await fetch(route).then(response => response.json());
    }
    catch (err)
    {
        console.log('Error fetching JSON: ', err);
    }
}