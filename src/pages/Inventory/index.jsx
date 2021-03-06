import React from 'react';
import { usePokemonState } from '@/hooks/PokemonContext';
import Container from '@/components/Container';
import PokemonList from '@/components/PokemonList';
import Navbar from '@/components/Navbar';

const Inventory = ({ history }) => {
  const { pokemons } = usePokemonState();

  const handleClick = (name) => {
    history.push(`details?name=${name}`);
  };

  const handleBack = () => {
    history.goBack();
    // history.push('pokemons');
  };
  return (
    <Container>
      <Navbar type="detail" title="My Pokemon" handleBack={handleBack} />
      <PokemonList data={pokemons} handleClick={handleClick} />
    </Container>
  );
};

export default Inventory;
