import React from 'react';
import { CardList } from './styles';
import PokemonCard from '@/components/PokemonCard'

const PokemonList = ({data, handleClick, ...props}) => {
  // const { results } = data.pokemons;

  return (
    <CardList>
      {
        data.map(pokemon => (
          <PokemonCard key={pokemon.id} onClick={() => handleClick(pokemon.name)} pokemon={pokemon} {...props} />
        ))
      }
    </CardList>
  );
};

export default PokemonList;
