import API from '../api/api';
import { toast } from 'react-toastify';

const EditPost = ({ post }) => {
    if (post.title.length >= 8 && post.description.length >= 15 && post.code.length >= 50) {
        API.patch(`post/${post._id}`, [
            { "propName": "title", "value": post.title },
            { "propName": "description", "value": post.description },
            { "propName": "code", "value": post.code },
        ])
            .then(() => {
                toast.success('Post Edited!');
                setTimeout(() => {
                    window.location.href = `/post/${post._id}`
                }, 1500);
            })
    } else {
        toast.error('There is something wrong!');
    }
};

export default EditPost;