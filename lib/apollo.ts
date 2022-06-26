import {ApolloClient, InMemoryCache} from '@apollo/client' 

export const client = new ApolloClient({
    uri: 'https://api-sa-east-1.graphcms.com/v2/cl4v9b53w1bs901un6dx837z9/master',
    cache: new InMemoryCache
})