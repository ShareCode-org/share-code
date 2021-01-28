import styled from 'styled-components';
import BeatLoader from 'react-spinners/BeatLoader';

export const HomePostsDiv = styled.div` 
  width: 85vw;
  display: grid;
  grid-template-columns: 1fr 1fr 1fr ;
  grid-gap: 20px;
  position: relative;
  top: 50px;
  margin: 0px auto;
  @media (max-width: 768px) {
    grid-template-columns: 1fr;
    top: 120px;
  } 
`;

export const HomeMessage = styled.h1`
  text-align: center;
  position: relative;
  top: 200px;
`;