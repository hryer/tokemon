import React, { useCallback, useEffect, useState } from 'react';
import { useLazyQuery } from '@apollo/react-hooks';
import { GET_POKEMONS } from '@/queries/pokemons';
import Container from '@/components/Container';
import PokemonList from '@/components/PokemonList';
import styled from '@emotion/styled';

const Pokemons = ({history}) => {
  /* ======================= State Management ======================= */
  const [variables, setVariables] = useState({
    limit: 39,
    offset: 0,
  });

  // /* ======================= Query ======================= */
  const [
    loadDataPokemons,
    { loading, error, data: dataPokemons },
  ] = useLazyQuery(GET_POKEMONS);

  // /* ===================== Functions ================== */
  const handleClick = id => {
    history.push(`details?id=${id}`);
  };

  // /* ===================== Lifecycle ================== */
  useEffect(() => {
    loadDataPokemons({
      variables,
    });
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, [variables]);

  useEffect(() => {
    // console.log(dataPokemons);
    console.log('load success')
  }, [dataPokemons]);



  return (
    <Container>
      {loading ? (
        <div> Loading ...</div>
      ) : error ? (
        <div>There is an error. Try refresh!</div>
      ) : !dataPokemons ? (
        <div>No Data Found</div>
      ) : (
        <PokemonList data={dataPokemons} handleClick={handleClick} />
      )}
    </Container>
  );
};

export default Pokemons;
