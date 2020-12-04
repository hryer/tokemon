import ApolloClient from 'apollo-boost';

export default new ApolloClient({
  uri: process.env.BASE_URL || 'https://graphql-pokeapi.vercel.app/api/graphql',
});
