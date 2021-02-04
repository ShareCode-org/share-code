import styled from 'styled-components';

export const HomePostsDiv = styled.div` 
  width: 85vw;
  display: grid;
  grid-template-columns: 1fr 1fr 1fr ;
  grid-gap: 20px;
  position: relative;
  top: 50px;
  margin: 0px auto;
  @media (max-width: 768px) {
    display: flex;
    justify-content: center;
    flex-direction: column;
    top: 120px;
  } 
`;

export const HomeMessage = styled.h1`
  text-align: center;
  position: relative;
  top: 200px;
`;