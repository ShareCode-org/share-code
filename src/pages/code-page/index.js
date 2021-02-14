import React from 'react';
import getPost from '../../actions/getPost';
import deletePost from '../../actions/deletePost';
import BeatLoader from 'react-spinners/BeatLoader';
import { decodeToken } from "react-jwt";
import { dark } from 'react-syntax-highlighter/dist/esm/styles/hljs';
import { useParams } from 'react-router-dom';
import { css } from "@emotion/core";
import {
    CodePageDiv,
    CodePageDetails,
    CodePageBottom,
    CodePageTitle,
    CodePageDescription,
    CodePageCode,
    CodeSpan,
    CodeDeleteButton
} from './style';

const CodePage = () => {
    let { id } = useParams();

    const [post, setPost] = React.useState({});
    const [loading, setLoading] = React.useState(true);
    const tokenData = decodeToken(localStorage.getItem('token'));

    const codeString = `${post.code}`;

    const override = css`
        position: absolute;
        top: 50%;
        left: 50%;
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
                    <CodePageCode
                        style={dark}
                        showLineNumbers
                        useInlineStyles={true}
                    >
                        {codeString}
                    </CodePageCode>
                    <CodePageBottom>
                        <CodeSpan>By {post.createdBy}</CodeSpan>
                        {
                            tokenData === null ?
                                '' : (
                                    tokenData.username === post.createdBy || tokenData.username === 'admin' ? (
                                        <CodeDeleteButton onClick={() => deletePost({ id })}>Delete</CodeDeleteButton>
                                    ) : ''
                                )
                        }
                    </CodePageBottom>

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