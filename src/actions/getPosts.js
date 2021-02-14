import API from '../api/api';

const getPosts = ({ setPosts, setLoading, loading }) => {
    API.get('/post')
        .then(res => {
            setTimeout(() => {
                setPosts(res.data);
                setLoading(!loading);
            }, 500)
        })
        .catch(() => setLoading(false))
};

export default getPosts;