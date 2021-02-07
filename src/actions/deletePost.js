import API from '../api/api';
import { toast } from 'react-toastify';

const DeletePost = ({ id }) => {
    API.delete('post/' + id)
        .then(() => {
            toast.success('Post Deleted!');
            window.location.href = '/';
        })
};

export default DeletePost;