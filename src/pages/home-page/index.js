import React, { useEffect, useState } from 'react';
import Loader from '../../components/loader/index';
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
    const [loading, setLoading] = useState(true);
    useEffect(() => setTimeout(() => setLoading(false), 500), []);

    return (
        <div>
            {!loading ? (
                <div>
                    <AboutContainer>
                        <AboutContentDiv>
                            <AboutH2>
                                Share<span style={{ color: "lightgrey" }}>Code</span>
                            </AboutH2>
                            <AboutP>
                                An open source website that make developers share code with each other.
                                </AboutP>
                        </AboutContentDiv>
                        <AboutImg
                            src="https://svgshare.com/i/TzT.svg"
                            alt='ShareCode!'
                            title='ShareCode!'
                        />
                    </AboutContainer>
                    <FeaturesContainer>
                        <FeaturesTitle>Features</FeaturesTitle>
                        <FeaturesUnderline />
                        <FeaturesDiv>
                            <FeatureDiv>
                                <FeatureImg
                                    src={Fast}
                                    alt='Fast'
                                    title='Fast'
                                />
                                <Featuretxt>Fast</Featuretxt>
                            </FeatureDiv>
                            <FeatureDiv>
                                <FeatureImg
                                    src={Accessible}
                                    alt='Accessible'
                                    title='Accessible'
                                />
                                <Featuretxt>Accessible</Featuretxt>
                            </FeatureDiv>
                            <FeatureDiv>
                                <FeatureImg
                                    src={Help}
                                    alt='Help'
                                    title='Help'
                                />
                                <Featuretxt>Help</Featuretxt>
                            </FeatureDiv>
                        </FeaturesDiv>
                    </FeaturesContainer>
                </div>
            ) : (
                    <Loader loading={loading} />
                )}
        </div>
    )
};

export default HomePage;