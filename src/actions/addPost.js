import API from '../api/api';
import { toast } from 'react-toastify';

const addPost = ({ values, resetForm }) => {
    API.post('/post', {
        title: values.title,
        description: values.description,
        code: values.code,
        createdBy: values.createdBy
    })
        .then(res => {
            resetForm();
            toast.success('Posted Successfully!');
            setTimeout(() => {
                window.location.href = `/post/${res.data.createdPost._id}`;
            }, 1500);
        })
};

export default addPost;