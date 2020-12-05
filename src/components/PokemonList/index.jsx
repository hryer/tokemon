import React from 'react';
import { CardList } from './styles';
import PokemonCard from '@/components/PokemonCard'

const PokemonList = ({data, handleClick}) => {
  const { results } = data.pokemons;

  const onClickCard = () => {
    console.log('hehe');
  }

  return (
    <CardList>
      {
        results.map(pokemon => (
          <PokemonCard key={pokemon.id} onClick={() => handleClick(pokemon.id)} {...pokemon} />
        ))
      }
    </CardList>
  );
};

export default PokemonList;
