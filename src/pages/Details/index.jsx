import React, { useEffect, useState, useCallback } from 'react';
import qs from 'query-string';
import Container from '@/components/Container';
import { useQuery } from '@apollo/react-hooks';
import { GET_POKEMON } from '@/queries/pokemons';
import PokemonList from '@/components/PokemonList';
import Loading from '@/components/Loading';
import Navbar from '@/components/Navbar';
import { Item } from './styles';
import { Carousel, Typography, Button } from 'antd';
import { gatchaChances } from '@/libs/utils';

const { Title } = Typography;

const Details = ({ history, location }) => {
  const { name } = qs.parse(location.search);
  
  const [isModalVisible, setIsModalVisible] = useState(false);

  const { loading, error, data: dataPokemon } = useQuery(GET_POKEMON, {
    variables: { name },
  });

  const showModal = () => {
    setIsModalVisible(true);
  };

  const handleOk = () => {
    setIsModalVisible(false);
  };

  const handleCancel = () => {
    setIsModalVisible(false);
  };

  const handleBack = () => {
    history.goBack();
  };

  const handleGatcha = useCallback(() => {
    const chance = gatchaChances();

    if(chance){

    }
  },[]);

  // /* ===================== Lifecycle ================== */

  useEffect(() => {
    console.log(dataPokemon?.pokemon?.moves.slice(-5))
  }, [dataPokemon]);
  

  return (
    <Container>
      <Navbar type="detail" handleBack={handleBack} />
      {loading ? (
        <Loading />
      ) : error ? (
        <div>There is an error. Try refresh!</div>
      ) : !dataPokemon ? (
        <div>No Data Found</div>
      ) : (
        <>
          <Title level={2}>{dataPokemon?.pokemon?.species?.name}</Title>
          <Carousel autoplay>
            <Item>
              <img
                src={dataPokemon?.pokemon?.sprites?.front_default}
                alt={dataPokemon?.pokemon?.species?.name}
                style={{ margin: '0 auto', transform: 'scale(1.5)' }}
              />
            </Item>
            <Item>
              <img
                src={dataPokemon?.pokemon?.sprites?.front_shiny}
                alt={dataPokemon?.pokemon?.species?.name}
                style={{ margin: '0 auto', transform: 'scale(1.5)' }}
              />
            </Item>
            <Item>
              <img
                src={dataPokemon?.pokemon?.sprites?.back_default}
                alt={dataPokemon?.pokemon?.species?.name}
                style={{ margin: '0 auto', transform: 'scale(1.5)' }}
              />
            </Item>
            <Item>
              <img
                src={dataPokemon?.pokemon?.sprites?.back_shiny}
                alt={dataPokemon?.pokemon?.species?.name}
                style={{ margin: '0 auto', transform: 'scale(1.5)' }}
              />
            </Item>
          </Carousel>
          <Button type='primary' size='large' onClick={() => handleBack()}>
            Gatcha
          </Button>
          <section>
            <label>Types</label>
            {
              dataPokemon.pokemon.types.map(typePoke => (
                <div key={typePoke.slot}>{typePoke.type.name}</div>
              ))
            }
          </section>
          <section>
            <label>Moves</label>
            {
              dataPokemon.pokemon.moves.slice(-5).map(movePoke => (
                <div key={movePoke.move.name}>{movePoke.move.name}</div>
              ))
            }
          </section>
        </>
      )}
    </Container>
  );
};

export default Details;
