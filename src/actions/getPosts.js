import API from '../api/api';

const getPosts = ({ setPosts, setLoading, loading, load }) => {
    API.get('/post')
        .then(res => {
            if (load) {
                setPosts(res.data);
                setLoading(false);
            } else {
                setPosts(res.data);
            }
        })
        .catch(() => setLoading(false))
};

export default getPosts;