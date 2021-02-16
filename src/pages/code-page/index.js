import React from 'react';
import getPost from '../../actions/getPost';
import deletePost from '../../actions/deletePost';
import Loader from '../../components/loader/index';
import { decodeToken } from "react-jwt";
import { androidstudio } from 'react-syntax-highlighter/dist/esm/styles/hljs';
import { useParams } from 'react-router-dom';
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
                        language="javascript"
                        style={androidstudio}
                        showLineNumbers
                        useInlineStyles={true}
                    >
                        {`${post.code}`}
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
                    <Loader loading={loading} />
                )
            }
        </div>
    )
};

export default CodePage;