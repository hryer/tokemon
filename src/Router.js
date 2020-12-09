import React, { lazy } from 'react';
import { Redirect } from 'react-router-dom';
import lazyComponent from '@/components/lazyComponent/index';
// import Pokemons from '@/pages/Pokemons';

const Pokemons = lazy(() =>
  import(/* webpackChunkName: "Pokemons" */ '@/pages/Pokemons/index')
);
const Details = lazy(() =>
  import(/* webpackChunkName: "Details" */ '@/pages/Details/index')
);
const Inventory = lazy(() => import(/* webpackChunkName: "Inventory" */ '@/pages/Inventory/index'));

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
  {
    path: '*',
    component: () => <Redirect to='/404' />,
  },
];
