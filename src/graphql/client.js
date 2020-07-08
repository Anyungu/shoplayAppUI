import ApolloClient,
{
    InMemoryCache,
    IntrospectionFragmentMatcher
} from 'apollo-boost';


import introspectionResult from './graphql.schema.json';

const fragmentMatcher = new IntrospectionFragmentMatcher({
  introspectionQueryResultData: introspectionResult,
});

const cache = new InMemoryCache({
  fragmentMatcher,
});


export const client = new ApolloClient({
    uri: 'https://shoplay.herokuapp.com/graphql',
    cache: cache

});



//   export const client = new ApolloClient({
//     link: createHttpLink({ uri: `${apiUrl}/graphql` })
//     ,
//     cache: new InMemoryCache()
//   });