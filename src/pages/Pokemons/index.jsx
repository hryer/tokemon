import React, { useCallback, useEffect, useState } from 'react';
import { useLazyQuery } from '@apollo/react-hooks';
import { GET_POKEMONS } from '@/queries/pokemons';
import { Content } from './styles';
import Container from '@/components/Container';
import Loading from '@/components/Loading';
import Navbar from '@/components/Navbar';
import PokemonList from '@/components/PokemonList';
import { Pagination } from 'antd';

const Pokemons = ({ history }) => {
  /* ======================= State Management ======================= */
  const [variables, setVariables] = useState({
    limit: 19,
    offset: 0,
  });

  // /* ======================= Query ======================= */
  const [
    loadDataPokemons,
    { loading, error, data: dataPokemons },
  ] = useLazyQuery(GET_POKEMONS);

  // /* ===================== Functions ================== */
  const handleClick = (name) => {
    history.push(`details?name=${name}`);
  };

  const handleInventory = () => {
    history.push('inventory');
  }

  // /* ===================== Lifecycle ================== */
  useEffect(() => {
    loadDataPokemons({
      variables,
    });
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, [variables]);

  useEffect(() => {
    console.log(dataPokemons);
  }, [dataPokemons]);
  
  return (
    <Container>
      <Navbar handleInventory={handleInventory} />
      {loading ? (
        <Loading />
      ) : error ? (
        <div>There is an error. Try refresh!</div>
      ) : !dataPokemons ? (
        <div>No Data Found</div>
      ) : (
        <Content>
          <PokemonList data={dataPokemons?.pokemons?.results} handleClick={handleClick} />
          <Pagination size="small" defaultCurrent={6} total={500} />
        </Content>
      )}
    </Container>
  );
};

export default Pokemons;
