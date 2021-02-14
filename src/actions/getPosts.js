import API from '../api/api';

const getPosts = ({ setPosts, setLoading, loading, load }) => {
    API.get('/post')
        .then(res => {
            if (load) {
                setTimeout(() => {
                    setPosts(res.data);
                    setLoading(false);
                }, 500)
            } else {
                setPosts(res.data);
            }
        })
        .catch(() => setLoading(false))
};

export default getPosts;