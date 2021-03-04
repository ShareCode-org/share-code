import styled, { keyframes } from "styled-components";

const ToRightSlide = keyframes`
    0% {
        transform: translateX(-10%);
        opacity: 0;
    }
     100% {
        transform: translateX(0);
        opacity: 1;
    }
`;

export const LeaderboardDivContainner = styled.div`
    display: flex;
    justify-content: center;
    margin-bottom: 2%;
    animation: 1s ease-out 0s 1 ${ToRightSlide};
`;

export const LeaderboardUl = styled.div`
    font-size: 16px;
    border-collapse: collapse;
`;

export const LeaderboardMessage = styled.h1`
  text-align: center;
  position: relative;
  top: 200px;
`;