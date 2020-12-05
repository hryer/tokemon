import React from 'react';
import { BrowserRouter } from 'react-router-dom';
import { renderRoutes } from 'react-router-config';
import { routes } from './Router';
import ErrorBoundary from '@/components/ErrorBoundary';

const App = React.memo(() => {
  return (
    <ErrorBoundary>
      <BrowserRouter>
        {renderRoutes(routes)}
      </BrowserRouter>
    </ErrorBoundary>
  );
});

export default App;
