import React from 'react';
import { useParams, Prompt } from 'react-router';
import getPost from '../../actions/getPost';
import getUsers from '../../actions/getUsers';
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

    const [post, setPost] = React.useState({});
    const [users, setUsers] = React.useState([]);
    const [user, setUser] = React.useState({});
    const [loading, setLoading] = React.useState(true);
    const tokenData = decodeToken(localStorage.getItem('token'));

    React.useEffect(() => {
        var load = true;
        getPost({
            id,
            setPost,
            setLoading,
            loading,
            load
        });
        getUsers({ setUsers, setLoading, loading });
    }, []);

    // getting the user who posted
    React.useEffect(() => {
        const filtredUsers = users.filter(user => user.username === post.createdBy);
        setUser(filtredUsers);
        console.log(filtredUsers)
    }, [users])

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
                    <CodeSpan>By <span style={{cursor: 'pointer'}} onClick={() => window.location.href = `/profile/${user[0]._id}`}>{post.createdBy}</span></CodeSpan>
                </CodePageDiv>
            ) : (
                <Loader loading={loading} />
            )
            }
        </div>
    )
};

export default CodePage;