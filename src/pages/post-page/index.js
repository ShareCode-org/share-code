import React, { useState, useContext, useEffect } from 'react';
import isLoggingContext from '../../context/isLoggingContext';
import getPosts from '../../actions/getPosts';
import Loader from '../../components/loader/index';
import CodeCard from '../../components/code-card/index';
import PostForm from '../../components/post-form/index';
import { PostsDiv, PostMessage } from './style';

const PostPage = () => {
    const LocalIsLogging = JSON.parse(localStorage.getItem('isLogging'));
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

    return (
        <div>
            {!loading ? (
                isLogging ? (
                    posts.length ? (
                        <div>
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