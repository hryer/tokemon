import React, { useEffect, useState, useCallback } from 'react';
import qs from 'query-string';
import Container from '@/components/Container';
import { useQuery } from '@apollo/react-hooks';
import { GET_POKEMON } from '@/queries/pokemons';
import PokemonList from '@/components/PokemonList';
import Loading from '@/components/Loading';
import Navbar from '@/components/Navbar';
import { Title, Item } from './styles';
import { Carousel, Button, Modal } from 'antd';
import { gatchaChances } from '@/libs/utils';
import ModalForm from '@/components/ModalForm';
import PokeDesc from '@/components/PokeDesc';
import { usePokemonDispatch } from '@/hooks/PokemonContext';

const Details = ({ history, location }) => {

  const { name } = qs.parse(location.search);

  const [chance, setChance] = useState(false);
  const [visible, setVisible] = useState(false);
  const dispatch = usePokemonDispatch();

  const { loading, error, data: dataPokemon } = useQuery(GET_POKEMON, {
    variables: { name },
  });

  const onCreate = values => {
    dispatch({
      type: 'ADD',
      payload: {
        nickname: values?.nickname || 'squidwards',
        image: dataPokemon?.pokemon?.sprites?.front_default || 'tests',
        name: dataPokemon?.pokemon?.species?.name || 'tests',
      },
    });
    setVisible(false);
  };

  const handleBack = () => {
    history.goBack();
    // history.push('pokemons');
  };

  const handleGatcha = useCallback(() => {
    const modalFail = () => {
      Modal.error({
        title: 'Sorry, You got nothing',
        content: `Gatcha again to get ${name}`,
      });
    };

    const gatchaChance = gatchaChances();

    if (gatchaChance) {
      setVisible(true);
    } else {
      modalFail();
    }
  }, [name]);

  // /* ===================== Lifecycle ================== */


  return (
    <Container>
      <Navbar type='detail' title="Pokemon Detail" handleBack={handleBack} />
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
          <Button type='primary' size='large' onClick={() => handleGatcha()} shape="round">
            Gatcha
          </Button>
          <PokeDesc types={dataPokemon.pokemon.types} moves={dataPokemon.pokemon.moves} />
          <ModalForm
            visible={visible}
            onCreate={onCreate}
            onCancel={() => {
              setVisible(false);
            }}
          />
        </>
      )}
    </Container>
  );
};

export default Details;
