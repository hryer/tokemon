import React from 'react';
import { usePokemonState, usePokemonDispatch } from '@/hooks/PokemonContext';
import Container from '@/components/Container';
import PokemonList from '@/components/PokemonList';
import Navbar from '@/components/Navbar';

const Inventory = ({ history }) => {
  const { pokemons } = usePokemonState();
  console.log(pokemons);

  const handleClick = (name) => {
    history.push(`details?name=${name}`);
  };

  const handleBack = () => {
    history.goBack();
  };
  return (
    <Container>
      <Navbar type="detail" handleBack={handleBack} />
      <PokemonList data={pokemons} handleClick={handleClick} />
    </Container>
  );
};

export default Inventory;
