import API from '../api/api';
import { toast } from 'react-toastify';

const DeletePost = ({ id }) => {
    API.delete('post/' + id, {
        headers: {
            Authorization: localStorage.getItem('token')
        }
    })
        .then(() => {
            toast.success('Post Deleted!');
            setTimeout(() => {
                window.location.href = '/';
            }, 1500);
        })
};

export default DeletePost;