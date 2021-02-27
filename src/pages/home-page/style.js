import styled, { keyframes } from "styled-components";

const ToBottomSlide = keyframes`
    0% {
        transform: translateY(-25%);
        opacity: 0;
    }
    100% {
        transform: translateY(0);
        opacity: 1;
    }
`;

const ToRightSlide = keyframes`
    0% {
        transform: translateX(-100%);
        opacity: 0;
    }
     100% {
        transform: translateX(0);
        opacity: 1;
    }
`;

export const AboutContainer = styled.div`
    display: flex;
    flex-direction: 'row';
    justify-content: space-around;
    align-items: center;
    color: grey;
    font-size: 30px;
    margin-left: 4%;
`;

export const AboutDiv = styled.div``;

export const AboutContentDiv = styled.div`
    animation: 1s ease-out 0s 1 ${ToRightSlide};
    width: 40%;
    height: 300px;
`;

export const AboutTextTyperDiv = styled.div``;

export const AboutImg = styled.img`
    animation: 1s ease-out 0s 1 ${ToBottomSlide};
    position: relative;
    top: -25px;
    right: 50px;
    width: 600px;
    height: 600px;
    z-index: 1;
`;

export const AboutH2 = styled.h2`
    margin-top: 4%;
    color: darkblue;
`;

export const AboutP = styled.p`
    margin-top: 2%;
    color: grey;
`;

export const FeaturesContainer = styled.div`
    position: relative;
    top: -100px;
    margin: 4%;
    animation: 1s ease-out 0s 1 ${ToBottomSlide};
`;

export const FeaturesDiv = styled.div`
    display: flex;
    justify-content: space-evenly;
    text-align: center;
    position: relative;
    top: 30px;
`;

export const FeatureDiv = styled.div`
    :hover {
        transform: scale(1.05);
        transition: transform 0.5s;
    }
`;

export const FeaturesTitle = styled.h1`
    color: blue;
    text-align: center;
`;

export const FeaturesUnderline = styled.span`
    background-color: darkblue;
    width: 60px;
    height: 5px;
    display: block;
    margin: 5px auto;
`;

export const FeatureImg = styled.img`
    width: 150px;
    height: 150px;
`;

export const Featuretxt = styled.h3`
    color: #2d2d3b;
`;