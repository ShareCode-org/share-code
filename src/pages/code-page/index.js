import React from 'react';
import BeatLoader from 'react-spinners/BeatLoader';
import { dark } from 'react-syntax-highlighter/dist/esm/styles/hljs';
import { useParams } from 'react-router-dom';
import { css } from "@emotion/core";
import API from '../../api/api';
import {
    CodePageDiv,
    CodePageDetails,
    CodePageTitle,
    CodePageDescription,
    CodePageCode
} from './style';

const CodePage = () => {
    let { id } = useParams();

    const [post, setPost] = React.useState({});
    const [loading, setLoading] = React.useState(true);

    const codeString = `${post.code}`;

    const override = css`
        position: absolute;
        top: 50%;
        left: 50%;
        @media (max-width: 768px) {
            left: 42%;
        } 
    `;

    React.useEffect(() => {
        API.get('post/' + id)
            .then(res => {
                setTimeout(() => {
                    setPost(res.data);
                    setLoading(!loading);
                }, 500)
            })
    }, []);

    return (
        <div>
            {!loading ? (
                <CodePageDiv>
                    <CodePageDetails>
                        <CodePageTitle>{post.title}</CodePageTitle>
                        <CodePageDescription>{post.description}</CodePageDescription>
                    </CodePageDetails>
                    <CodePageCode style={dark}>
                        {codeString}
                    </CodePageCode>
                </CodePageDiv>
            ) : (
                    <BeatLoader
                        color='blue'
                        loading={loading}
                        css={override}
                        size={20}
                    />
                )
            }
        </div>
    )
};

export default CodePage;