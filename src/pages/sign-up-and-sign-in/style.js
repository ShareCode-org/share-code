import styled from 'styled-components';

export const SignInDivContainer = styled.div`
  width: 850px;
  position: relative;
  top: 65px;
  display: flex;
  justify-content: space-between;
  flex-direction: row-reverse;
  margin: 30px auto;
  @media (max-width: 768px) {
    width: 100%;
    top: 100px;
    flex-direction: column;
  }
`;

export const SignInDiv = styled.div`
  @media (max-width: 768px) {
    margin: 5%;
  }
`;

export const SignUpDiv = styled.div`
  @media (max-width: 768px) {
    margin: 5%;
  }
`;

export const FormDiv = styled.div`
  position: relative;
  top: 20px;
`;

export const Title = styled.h2`
  color: darkblue;
  margin: 10px 0;
`;

export const Span = styled.span`
  color: grey;
  margin: 10px 0;
`;

