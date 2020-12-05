import React, { useState, useEffect } from 'react';
import { ApolloProvider } from '@apollo/react-hooks';
import { ApolloClient } from 'apollo-client';
import { HttpLink } from 'apollo-link-http';
import { InMemoryCache } from 'apollo-cache-inmemory';
import { onError } from 'apollo-link-error';
import { ApolloLink } from 'apollo-link';
import { RetryLink } from 'apollo-link-retry';

const GraphQlProvider = ({ headers, children }) => {
  const [client, setClient] = useState();
  const [loaded, setLoaded] = useState(false);

  useEffect(() => {
    const httpLink = new HttpLink({
      uri: process.env.REACT_APP_API_URL || 'https://graphql-pokeapi.vercel.app/api/graphql',
    });

    const authLink = new ApolloLink((operation, forward) => {
      // Use the setContext method to set the HTTP headers.
      operation.setContext({
        headers,
      });

      // Call the next link in the middleware chain.
      return forward(operation);
    });

    const errorLink = onError(({ response, graphQLErrors, networkError }) => {
      if (graphQLErrors) {
        graphQLErrors.forEach(({ message, locations, path }) => {
          const msg = `[GraphQL error]: Message: ${message}, Location: ${locations}, Path: ${path}`;
          console.log(msg);
        });
      }
      if (networkError) {
        const msg = `[Network error]: ${networkError}`;
        console.log(msg);
      }
      if (response) {
        response.errors = null;
      }
    });

    const retryLink = new RetryLink({
      delay: {
        initial: 500,
        max: Infinity,
        jitter: true,
      },
      attempts: {
        max: 5,
        retryIf: (error, _operation) => !!error,
      },
    });

    const cache = new InMemoryCache();

    const client = new ApolloClient({
      link: ApolloLink.from([authLink, retryLink, errorLink, httpLink]),
      cache,
    });

    setClient(client);
    setLoaded(true);
  }, [headers]);

  if (!loaded) {
    return null;
  }

  return <ApolloProvider client={client}>{children}</ApolloProvider>;
};

export default GraphQlProvider;
