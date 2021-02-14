import styled from "styled-components";

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
    width: 40%;
    height: 325px;
`;

export const AboutTextTyperDiv = styled.div``;

export const AboutImg = styled.img`
    position: relative;
    top: -25px;
    right: 50px;
    width: 600px;
    height: 600px;
    z-index: -1;
`;

export const AboutH2 = styled.h2`
    margin-top: 4%;
    color: darkblue;
`;

export const AboutP = styled.p`
    margin-top: 2%;
    color: grey;
`;

export const AboutButton = styled.button`
    margin-top: 2%;
`;
export const FeaturesContainer = styled.div`
    margin-top: 4%;
    margin-left: 4%;
    margin-bottom: 8%;
    margin-right: 4%;
`;

export const FeaturesDiv = styled.div`
    display: flex;
    justify-content: space-evenly;
    text-align: center;
    position: relative;
    top: 30px;
`;

export const FeatureDiv = styled.div`
    margin: 10px;
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