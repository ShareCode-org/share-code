import React from 'react';
import getPost from '../../actions/getPost';
import deletePost from '../../actions/deletePost';
import Loader from '../../components/loader/index';
import PostMenu from '../../components/post-menu/index';
import { decodeToken } from "react-jwt";
import { androidstudio } from 'react-syntax-highlighter/dist/esm/styles/hljs';
import { useParams } from 'react-router-dom';
import {
    CodePageDiv,
    CodePageDetails,
    CodePageTop,
    CodePageBottom,
    CodePageTitle,
    CodePageDescription,
    CodePageCode,
    CodeSpan,
    CodeDeleteButton
} from './style';

const CodePage = () => {
    const { id } = useParams();

    const [post, setPost] = React.useState({});
    const [loading, setLoading] = React.useState(true);
    const tokenData = decodeToken(localStorage.getItem('token'));

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
                        <CodePageTop>
                            <CodePageTitle>{post.title}</CodePageTitle>
                            {
                                tokenData === null ?
                                    '' : (
                                        tokenData.username === post.createdBy || tokenData.username === 'admin' ? (
                                            <PostMenu deleteFunc={() => deletePost({ id })} />
                                        ) : ''
                                    )
                            }
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
                    <CodeSpan>By {post.createdBy}</CodeSpan>
                </CodePageDiv>
            ) : (
                    <Loader loading={loading} />
                )
            }
        </div>
    )
};

export default CodePage;