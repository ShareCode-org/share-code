import React from 'react';
import API from '../../api/api';
import CodeCard from '../../components/code-card/index';
import { HomePostsDiv, HomeMessage } from './style';

const HomePage = () => {
    const [posts, setPosts] = React.useState([]);

    React.useEffect(() => {
        API.get('/post')
            .then(res => setPosts(res.data))
    }, []);
    return (
        <div>

            {posts.length ? (
                <HomePostsDiv>
                    {posts.map((post, index) => (
                        <CodeCard
                            key={index}
                            title={post.title}
                            description={post.description}
                            id={post._id}
                        />
                    ))}
                </HomePostsDiv>
            ) : (
                    <HomeMessage>There is no posts.</HomeMessage>
                )}

        </div>
    )
};

export default HomePage;