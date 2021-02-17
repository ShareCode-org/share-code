import API from '../api/api';
import { toast } from 'react-toastify';

const DeletePost = ({ id }) => {
    API.delete(`post/${id}`)
        .then(() => {
            toast.success('Post Deleted!');
            setTimeout(() => {
                window.location.href = '/post';
            }, 1500);
        })
};

export default DeletePost;