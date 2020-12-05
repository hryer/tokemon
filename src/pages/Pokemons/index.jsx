import React, { useCallback, useEffect, useState } from 'react';
import { useLazyQuery } from '@apollo/react-hooks';
import { GET_POKEMONS } from '@/queries/pokemons';
import Container from '@/components/Container';
import PokemonList from '@/components/PokemonList';
import styled from '@emotion/styled';

const Pokemons = () => {
  /* ======================= State Management ======================= */
  const [variables, setVariables] = useState({
    limit: 49,
    offset: 0,
  });

  // /* ======================= Query ======================= */
  const [
    loadDataPokemons,
    { loading, error, data: dataPokemons },
  ] = useLazyQuery(GET_POKEMONS);

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


  // const Card = styled.div`
  //   display: 'flex';
  //   width: '200px';
  //   height: '200px';
  //   padding: '5px';
  //   background-color: 'green';
  // `;
  
  return (
    <Container>
      {loading ? (
        <div> Loading ...</div>
      ) : error ? (
        <div>There is an error. Try refresh!</div>
      ) : !dataPokemons ? (
        <div>No Data Found</div>
      ) : (
        <PokemonList data={dataPokemons} />
      )}
    </Container>
  );
};

export default Pokemons;
