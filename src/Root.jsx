import React from 'react';
import GraphQlProvider from '@/libs/GraphqlProvider';
import client from '@/libs/graph-client';
import { ApolloProvider } from '@apollo/react-hooks';

// import Routes from './app/App';

export default function Root() {
  return (
    <GraphQlProvider headers={client}>
      <div>Just a test</div>
    </GraphQlProvider>
  );
}
