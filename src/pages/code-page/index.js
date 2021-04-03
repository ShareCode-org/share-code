import React, { useState, useEffect, useContext } from 'react';
import { useParams, Prompt } from 'react-router';
import UserContext from '../../context/UserContext';
import getPost from '../../actions/getPost';
import deletePost from '../../actions/deletePost';
import Loader from '../../components/loader/index';
import PostMenu from '../../components/post-menu/index';
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
    const { user } = useContext(UserContext);

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
                                tokenData={user}
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