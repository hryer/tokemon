import React from 'react';
import { Card, CardImage } from './styles';

const PokemonCard = ({ id, image, name }) => {
  console.log(image)
  return (
    <Card>
      <CardImage imageUri={image} />
    </Card>
  );
};

export default PokemonCard;
