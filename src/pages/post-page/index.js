import React, { useState, useContext, useEffect } from 'react';
import isLoggingContext from '../../context/isLoggingContext';
// import UserContext from '../../context/userContext';
import getPosts from '../../actions/getPosts';
// import checkboxChange from '../../actions/checkboxChange';
import Loader from '../../components/loader/index';
import CodeCard from '../../components/code-card/index';
import PostForm from '../../components/post-form/index';
// import SupCheckbox from '../../components/sup-checkbox/index';
import { PostsDiv, PostMessage } from './style';

const PostPage = () => {
    const LocalIsLogging = JSON.parse(localStorage.getItem('isLogging'));
    // const { user } = useContext(UserContext);
    const [posts, setPosts] = useState([]);
    const { isLogging } = useContext(isLoggingContext);
    const [loading, setLoading] = useState(true);

    useEffect(() => {
        if (LocalIsLogging) {
            var load = true;
            getPosts({ setPosts, setLoading, loading, load });

        } else {
            setLoading(false);
        }

        document.title = 'ShareCode | Post'
    }, []);

    // const SupGlobalFunc = (e) => checkboxChange({ e, getPosts, setPosts, posts, setLoading, loading, tokenData });

    return (
        <div>
            {!loading ? (
                isLogging ? (
                    posts.length ? (
                        <div>
                            {/* <SupCheckbox
                                onChange={SupGlobalFunc}
                            /> */}
                            <PostsDiv>
                                {posts.map((post, index) => (
                                    <CodeCard
                                        key={index}
                                        title={post.title}
                                        description={post.description}
                                        id={post._id}
                                    />
                                ))}
                                <PostForm />
                            </PostsDiv>
                        </div>
                    ) : (
                            <div>
                                {/* <SupCheckbox
                                    onChange={SupGlobalFunc}
                                /> */}
                                <PostForm />
                                <PostMessage>There is no posts.</PostMessage>
                            </div>
                        )

                ) : (
                        <PostMessage>You need to login in to see posts.</PostMessage>
                    )
            ) : (
                    <div>
                        <Loader loading={loading} />
                    </div>
                )}
        </div>
    )
};

export default PostPage;