import styled from '@emotion/styled';

export const Card = styled.div`
  display: flex;
  width: 160px;
  height: 160px;
  margin: 0;
  padding: 0;
  align-items: center;
  justify-content: center;
  flex-direction: column;
  background-color:#F8FBFD;
  box-shadow: 0 30px 40px rgba(0,0,0,0.8);
  border-radius: 25px;
  border: 1px solid #20204F;
  /* color: pink; */
  cursor: pointer;
`;

export const CardInfo = styled.h3`
  font-weight: 600;
  color: #20204F;
  margin: 0 auto;
`