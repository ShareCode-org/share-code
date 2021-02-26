import styled, { keyframes } from "styled-components";

const ToRightSlide = keyframes`
    0% {
        transform: translateX(-25%);
        opacity: 0;
    }
     100% {
        transform: translateX(0);
        opacity: 1;
    }
`;

export const SignInDivContainer = styled.div`
  width: 850px;
  position: relative;
  top: 65px;
  display: flex;
  justify-content: space-between;
  flex-direction: row-reverse;
  margin: 30px auto;
  animation: 1s ease-out 0s 1 ${ToRightSlide};
`;

export const SignInDiv = styled.div``;

export const SignUpDiv = styled.div``;

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

