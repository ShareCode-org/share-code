import API from '../api/api';

const getPost = ({ id, setPost, setLoading, loading }) => {
    API.get('post/' + id)
        .then(res => {
            setTimeout(() => {
                setPost(res.data);
                setLoading(!loading);
            }, 500)
        })
};

export default getPost;