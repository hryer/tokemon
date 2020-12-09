import React, { lazy } from 'react';
import { Redirect } from 'react-router-dom';
import lazyComponent from './components/LazyComponent';
// import Pokemons from '@/pages/Pokemons';

const Pokemons = lazy(() =>
  import(/* webpackChunkName: "Pokemons" */ './pages/Pokemons')
);
const Details = lazy(() =>
  import(/* webpackChunkName: "Details" */ './pages/Details')
);
const Inventory = lazy(() => import(/* webpackChunkName: "Inventory" */ './pages/Inventory'));

export const routes = [
  {
    path: '/',
    exact: true,
    component: () => <Redirect to='/pokemons' />,
    routes: [],
  },
  {
    path: '/pokemons',
    exact: true,
    component: lazyComponent(Pokemons),
  },
  {
    path: '/details',
    exact: true,
    component: lazyComponent(Details),
  },
  {
    path: '/inventory',
    exact: true,
    component: lazyComponent(Inventory),
  },
  // {
  //   path: '*',
  //   component: () => <Redirect to='/404' />,
  // },
];
