import React from 'react';
import { CardList } from './styles';
import PokemonCard from '@/components/PokemonCard'

const PokemonList = ({data}) => {
  const { results } = data.pokemons;

  const onClickCard = () => {
    console.log('hehe');
  }

  return (
    <CardList>
      {
        results.map(pokemon => (
          <PokemonCard key={pokemon.id} {...pokemon} onClick={() => onClickCard(pokemon)} />
        ))
      }
    </CardList>
  );
};

export default PokemonList;
