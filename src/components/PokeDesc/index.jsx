import React from 'react';
import { DescriptionSection, SectionTitle, DescriptionItem, Item, Title, DetailItem  } from './styles';
import { useLocation } from 'react-router-dom';
// import { Button } from 'antd';

const PokeDesc = ({ types, moves }) => {
  let location = useLocation();

  return (
    <DescriptionSection>
      <SectionTitle>Description</SectionTitle>
      <DescriptionItem>
        <Item>
          <Title>TYPES</Title>
          {types.map(typePoke => (
            <DetailItem key={typePoke.slot}>■ {typePoke.type.name}</DetailItem>
          ))}
        </Item>
        <Item>
          <Title>TOP MOVES</Title>
          {moves.slice(-5).map(movePoke => (
            <DetailItem key={movePoke.move.name}>■ {movePoke.move.name}</DetailItem>
          ))}
        </Item>
      </DescriptionItem>
    </DescriptionSection>
  );
};

export default PokeDesc;
