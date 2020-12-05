import React, { lazy } from 'react';
import { Redirect } from 'react-router-dom';
import lazyComponent from '@/components/lazyComponent';
// import Pokemons from '@/pages/Pokemons';

const Pokemons = lazy(() => import(/* webpackChunkName: "Pokemons" */ '@/pages/Pokemons'));
// const Inventory = lazy(() => import(/* webpackChunkName: "Inventory" */ '@/pages/Inventory'));
// const Details = lazy(() => import(/* webpackChunkName: "Details" */ '@/pages/Details'));


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
  // {
  //   path: '/inventory',
  //   exact: true,
  //   component: lazyComponent(Inventory),
  // },
  // {
  //   path: '/details',
  //   exact: true,
  //   component: lazyComponent(Details),
  // }
];
