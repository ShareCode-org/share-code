import API from '../api/api';

const getPost = ({ id, setPost, setLoading, loading, load }) => {
    API.get('post/' + id)
        .then(res => {
            if (load) {
                document.title = `ShareCode | ${res.data.title}`;
                setTimeout(() => {
                    setPost(res.data);
                    setLoading(!loading);
                }, 500)
            } else {
                document.title = `ShareCode | ${res.data.title}`;
                setPost(res.data);
            }
        })
        .catch(() => window.location.href = `/404/post/${id}`)
};

export default getPost;