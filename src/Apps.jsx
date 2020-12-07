import React from 'react';
import { BrowserRouter } from 'react-router-dom';
import { renderRoutes } from 'react-router-config';
import { routes } from './Router';
import ErrorBoundary from '@/components/ErrorBoundary';
import { PokemonProvider } from '@/hooks/PokemonContext';

const App = React.memo(() => {
  return (
    <ErrorBoundary>
      <PokemonProvider>
        <BrowserRouter>{renderRoutes(routes)}</BrowserRouter>
      </PokemonProvider>
    </ErrorBoundary>
  );
});

export default App;
