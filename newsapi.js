import { storeString, getString, fetchJSON, getJSON } from './util';

const baseRoute = `https://newsapi.org/v2`;
// only get US based English sources (you can change this if you want)

export const cacheSources = async (apikey) =>
{
    const sourcesRoute = `${baseRoute}/sources?apiKey=${apikey}&language=en&country=us`
    return getJSON('sources')
        .then((sourceData) => {
            console.log('cached source data: ', sourceData);
            if (sourceData === null) {
                fetchJSON(sourcesRoute)
                    .then((fetchedData) => {
                        console.log('data: ', fetchedData);
                        if (fetchedData.sources.length) {
                            try {
                                storeString('sources', JSON.stringify(fetchedData.sources));
                                return fetchedData.sources;
                            }
                            catch (err) {
                                console.log('Error saving source data: ', err);
                            }
                        }

                    })
                    .catch((err) => {
                        console.log('Could not fetch source data: ', err);
                    });
            }
            else
            {
                return sourceData;
            }
        })
        .catch((err) => {
            console.log('Could not get cached sources: ', err);
        });
}

export const cacheArticles = async (apikey, sources) =>
{
    let articlesRoute = `${baseRoute}/top-headlines?apiKey=${apikey}&language=en&country=us`;
    return getJSON('articles')
        .then((articleCache) => {
            console.log('articleCache: ', articleCache);
            if (articleCache === null) {
                console.log('fetching: ', articlesRoute);
                return fetchJSON(articlesRoute)
                    .then((fetchedData) => {
                        console.log('fetched articles: ', fetchedData);
                        try {
                            storeString('articles', JSON.stringify(fetchedData.articles));
                            if (sources) {
                                return fetchedData.articles.filter((article) => {
                                    return sources.indexOf(article.source.id) !== -1;
                                })
                            }
                            return fetchedData.articles;
                            
                        }
                        catch (err) {
                            console.log('Error saving article data: ', err);
                        }
                    })
                    .catch((err) => {
                        console.log('Error fetching articles: ', err);
                    });
            }
            else {
                console.log('selected sources: ', sources);
                if (sources.length) {
                    return articleCache.filter((article) => {
                        return sources.indexOf(article.source.id) !== -1;
                    })
                }
                return articleCache;
            }
        })
        .catch((err) => {
            console.log('Could not get cached articles.');
        });
}