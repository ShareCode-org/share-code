import React, { useEffect, useState } from 'react';
import BeatLoader from 'react-spinners/BeatLoader';
import { css } from "@emotion/core";
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

const HomePage = () => {
    const [loading, setLoading] = React.useState(true);

    useEffect(() => setTimeout(() => setLoading(false), 500), []);

    const override = css`
        position: absolute;
        top: 50%;
        left: 50%;
    `;

    return (
        <div>
            {!loading ? (
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
            ) : (

                    <BeatLoader
                        color='blue'
                        loading={loading}
                        css={override}
                        size={20}
                    />
                )}
        </div>
    )
};

export default HomePage;