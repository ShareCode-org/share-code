import React from 'react';
import { UserContext } from '../../context/userContext';
import getPosts from '../../actions/getPosts';
import Loader from '../../components/loader/index';
import CodeCard from '../../components/code-card/index';
import PostForm from '../../components/post-form/index';
import { HomePostsDiv, HomeMessage } from './style';

const PostPage = () => {
    const { isLogging } = React.useContext(UserContext);
    const [posts, setPosts] = React.useState([]);
    const [loading, setLoading] = React.useState(true);

    React.useEffect(() => {
        getPosts({
            setPosts,
            setLoading,
            loading
        });
    }, []);

    return (
        <div>
            {!loading ? (
                isLogging ? (
                    posts.length ? (
                        <HomePostsDiv>
                            {posts.map((post, index) => (
                                <CodeCard
                                    key={index}
                                    title={post.title}
                                    description={post.description}
                                    id={post._id}
                                />
                            ))}
                            <PostForm />
                        </HomePostsDiv>
                    ) : (
                            <div>
                                <HomeMessage>There is no posts.</HomeMessage>
                            </div>
                        )

                ) : (
                        <HomeMessage>You need to login in to see posts.</HomeMessage>
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