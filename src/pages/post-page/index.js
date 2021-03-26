import React from 'react';
import { UserContext } from '../../context/userContext';
import { decodeToken } from "react-jwt";
import { toast } from 'react-toastify';
import getPosts from '../../actions/getPosts';
import checkboxChange from '../../actions/checkboxChange';
import Loader from '../../components/loader/index';
import CodeCard from '../../components/code-card/index';
import PostForm from '../../components/post-form/index';
import SupCheckbox from '../../components/sup-checkbox/index';
import { PostsDiv, PostMessage } from './style';

const PostPage = () => {
    const LocalIsLogging = JSON.parse(localStorage.getItem('isLogging'));
    const [posts, setPosts] = React.useState([]);
    const { isLogging } = React.useContext(UserContext);
    const tokenData = decodeToken(localStorage.getItem('token'));
    const [loading, setLoading] = React.useState(true);

    React.useEffect(() => {
        if (LocalIsLogging) {
            var load = true;
            toast.warn('Posts are reseted');
            getPosts({ setPosts, setLoading, loading, load });

        } else {
            setLoading(false);
        }
    }, []);

    const SupGlobalFunc = (e) => checkboxChange({ e, getPosts, setPosts, posts, setLoading, loading, tokenData });

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