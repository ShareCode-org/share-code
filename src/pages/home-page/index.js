import React from 'react';
import getPosts from '../../actions/getPosts';
import BeatLoader from 'react-spinners/BeatLoader';
import CodeCard from '../../components/code-card/index';
import { css } from "@emotion/core";
import { HomePostsDiv, HomeMessage } from './style';

const HomePage = () => {
    const [posts, setPosts] = React.useState([]);
    const [loading, setLoading] = React.useState(true);


    const override = css`
        position: absolute;
        top: 50%;
        left: 50%;
        @media (max-width: 768px) {
            left: 42%;
        } 
    `;

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
                    </HomePostsDiv>

                ) : (
                        <HomeMessage>There is no posts.</HomeMessage>
                    )
            ) : (
                    <div>
                        <BeatLoader
                            color='blue'
                            loading={loading}
                            css={override}
                            size={20}
                        />
                    </div>
                )}
        </div>
    )
};

export default HomePage;