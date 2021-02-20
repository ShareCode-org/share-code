import API from '../api/api';

const getPost = ({ id, setPost, setLoading, loading }) => {
    API.get('post/' + id)
        .then(res => {
            document.title = `ShareCode | ${res.data.title}`;
            setTimeout(() => {
                setPost(res.data);
                setLoading(!loading);
            }, 500)
        })
        .catch(() => window.location.href = `/404/post/${id}`)
};

export default getPost;