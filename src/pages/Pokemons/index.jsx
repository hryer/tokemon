import React, { useCallback, useEffect, useState } from 'react';
import { useLazyQuery } from '@apollo/react-hooks';
import { GET_POKEMONS } from '@/queries/pokemons';
import { Content } from './styles';
import Container from '@/components/Container';
import Loading from '@/components/Loading';
import Navbar from '@/components/Navbar';
import PokemonList from '@/components/PokemonList';
import InfiniteScroll from 'react-infinite-scroll-component';

const Pokemons = ({ history }) => {
  /* ======================= State Management ======================= */
  const [variables, setVariables] = useState({
    limit: 19,
    offset: 1,
  });

  const [displayPokemons, setDisplayPokemons] = useState([]);

  // /* ======================= Query ======================= */
  const [
    loadDataPokemons,
    { loading, error, data: dataPokemons },
  ] = useLazyQuery(GET_POKEMONS);
  // console.log(dataPokemons);
  // /* ===================== Functions ================== */
  const handleClick = name => {
    history.push(`details?name=${name}`);
  };

  const handleInventory = () => {
    history.push('inventory');
  };

  const fetchMore = () => {
    console.log('fetch more')
    setVariables(prevVariables => {
      return {
        offset: prevVariables.offset + variables.limit+1,
        limit: prevVariables.limit
      };
    });
  };
  // /* ===================== Lifecycle ================== */
  useEffect(() => {
    console.log(variables);
    loadDataPokemons({
      variables,
    });
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, [variables]);

  useEffect(() => {
    if(dataPokemons){
      setDisplayPokemons(poke => {
        return [...poke, ...dataPokemons.pokemons.results];
      });
    }
    console.log(dataPokemons)
  },[dataPokemons]);

  return (
    <Container>
      <Navbar handleInventory={handleInventory} />
      {loading ? (
        <Loading />
      ) : error ? (
        <div>There is an error. Try refresh!</div>
      ) : displayPokemons.length < 1 || !displayPokemons ? (
        <div>No Data Found</div>
      ) : (
        <Content>
          <InfiniteScroll
            dataLength={displayPokemons.length}
            next={fetchMore}
            hasMore={true}
            loader={<Loading />}
          >
            <PokemonList
              data={displayPokemons}
              handleClick={handleClick}
            />
          </InfiniteScroll>
        </Content>
      )}
    </Container>
  );
};

export default Pokemons;
