import React from 'react';
import getPost from '../../actions/getPost';
import BeatLoader from 'react-spinners/BeatLoader';
import { dark } from 'react-syntax-highlighter/dist/esm/styles/hljs';
import { useParams } from 'react-router-dom';
import { css } from "@emotion/core";
import {
    CodePageDiv,
    CodePageDetails,
    CodePageTitle,
    CodePageDescription,
    CodePageCode,
    CodeSpan
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
        getPost({
            id,
            setPost,
            setLoading,
            loading
        });
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
                    <CodeSpan>By {post.createdBy}</CodeSpan>
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