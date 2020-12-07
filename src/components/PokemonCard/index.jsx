import React from 'react';
import { Card, CardInfo } from './styles';
import { useLocation } from 'react-router-dom';
import { Button } from 'antd';
import { usePokemonDispatch } from '@/hooks/PokemonContext';

const PokemonCard = ({ pokemon, onClick }) => {
  let location = useLocation();
  const dispatch = usePokemonDispatch();
  
  return (
    <Card>
      <div onClick={onClick}>
        {location.pathname === '/inventory' ? (
          <CardInfo>{pokemon.nickname}</CardInfo>
        ) : (
          <CardInfo>{pokemon.name}</CardInfo>
        )}
        <img
          src={pokemon.image}
          alt={pokemon.name}
          height='95px'
          width='95px'
          style={{ margin: '0 auto' }}
        />
      </div>
      {location.pathname === '/inventory' ? (
        <Button
          ghost
          danger
          size='small'
          onClick={() =>
            dispatch({
              type: 'REMOVE',
              payload: pokemon?.nickname,
            })
          }
        >
          Remove
        </Button>
      ) : null}
    </Card>
  );
};

export default PokemonCard;
