import React from 'react';
import { Card, CardInfo } from './styles';

const PokemonCard = ({ id, image, name, onClick }) => {
  console.log(onClick)
  return (
    <Card onClick={onClick}>
      <img src={image} alt={name} height='95px' width='95px' style={{margin:'0 auto'}} />
      <CardInfo>
        {name}
      </CardInfo>
    </Card>
  );
};

export default PokemonCard;
