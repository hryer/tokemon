import styled from '@emotion/styled';

export const Card = styled.div`
  display: flex;
  width: 180px;
  height: 180px;
  margin: 0;
  padding: 0;
  justify-content: space-between;
  flex-direction: column;
  background-color: cyan;
  color: black;
`;

export const CardImage = styled.div(props => ({
  width: 'auto',
  height: 'auto',
  display: 'flex',
  backgroundImage: `url(${props.imageUri})`,
}));
