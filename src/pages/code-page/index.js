import React, { useState, useEffect } from 'react';
import { useParams, Prompt } from 'react-router';
import getPost from '../../actions/getPost';
import deletePost from '../../actions/deletePost';
import Loader from '../../components/loader/index';
import PostMenu from '../../components/post-menu/index';
import { decodeToken } from "react-jwt";
import { androidstudio } from 'react-syntax-highlighter/dist/esm/styles/hljs';
import {
    CodePageDiv,
    CodePageDetails,
    CodePageTop,
    CodePageTitle,
    CodePageDescription,
    CodePageCode,
    CodeSpan
} from './style';

const CodePage = () => {
    const { id } = useParams();

    const [post, setPost] = useState({});
    const [loading, setLoading] = useState(true);
    const tokenData = decodeToken(localStorage.getItem('token'));

    useEffect(() => {
        var load = true;
        getPost({
            id,
            setPost,
            setLoading,
            loading,
            load
        });
    }, []);

    return (
        <div>
            <Prompt
                message={() => {
                    ""
                    document.title = 'ShareCode'
                }}
            />
            {!loading ? (
                <CodePageDiv>
                    <CodePageDetails>
                        <CodePageTop>
                            <CodePageTitle>{post.title}</CodePageTitle>
                            <PostMenu
                                tokenData={tokenData}
                                post={post}
                                deleteFunc={() => deletePost({ id })}
                            />
                        </CodePageTop>
                        <CodePageDescription>{post.description}</CodePageDescription>
                    </CodePageDetails>
                    <CodePageCode
                        language="javascript"
                        style={androidstudio}
                        showLineNumbers
                    >
                        {`${post.code}`}
                    </CodePageCode>
                    <CodeSpan>By <span style={{ cursor: 'pointer' }} onClick={() => window.location.href = `/profile/${post.createdBy._id}`}>{post.createdBy.username}</span></CodeSpan>
                </CodePageDiv>
            ) : (
                <Loader loading={loading} />
            )
            }
        </div>
    )
};

export default CodePage;