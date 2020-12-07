import React from 'react';
import {usePokemonState, usePokemonDispatch} from '@/hooks/PokemonContext';

const Inventory = () => {
  const {pokemons} = usePokemonState();
  console.log(pokemons)

  return <div>Pokemon</div>;
};

export default Inventory;
