import React from 'react';
import BeatLoader from 'react-spinners/BeatLoader';
import { css } from "@emotion/core";

const Loader = ({ loading }) => {
    const override = css`
        position: absolute;
        top: 50%;
        left: 50%;
    `;

    return (
        <BeatLoader
            color='blue'
            loading={loading}
            css={override}
            size={20}
        />
    )
};

export default Loader;