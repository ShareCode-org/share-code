import React from 'react';
import Fast from '../../assests/fast.jpg';
import Accessible from '../../assests/accessible.png';
import Help from '../../assests/help.svg';
import {
    AboutContainer,
    AboutContentDiv,
    AboutImg,
    AboutH2,
    AboutP,
    FeaturesContainer,
    FeaturesDiv,
    FeatureDiv,
    FeaturesTitle,
    FeaturesUnderline,
    FeatureImg,
    Featuretxt
} from "./style";

const HomePage = () => (
    <div>
        <AboutContainer>
            <AboutContentDiv>
                <AboutH2>
                    Share<span style={{ color: "blue" }}>Code</span>
                </AboutH2>
                <AboutP>
                    A open source website that make developers share code with each other.
                </AboutP>
            </AboutContentDiv>
            <AboutImg src="https://svgshare.com/i/TzT.svg" />
        </AboutContainer>
        <FeaturesContainer>
            <FeaturesTitle>Features</FeaturesTitle>
            <FeaturesUnderline />
            <FeaturesDiv>
                <FeatureDiv>
                    <FeatureImg src={Fast} />
                    <Featuretxt>Fast</Featuretxt>
                </FeatureDiv>
                <FeatureDiv>
                    <FeatureImg src={Accessible} />
                    <Featuretxt>Accessible</Featuretxt>
                </FeatureDiv>
                <FeatureDiv>
                    <FeatureImg src={Help} />
                    <Featuretxt>Help</Featuretxt>
                </FeatureDiv>
            </FeaturesDiv>
        </FeaturesContainer>
    </div>
);


export default HomePage;