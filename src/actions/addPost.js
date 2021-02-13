import axios from 'axios';
import { toast } from 'react-toastify';

const addPost = async ({ values, resetForm }) => {
    await axios({
        method: 'POST',
        url: `https://share-code-server.glitch.me/post`,
        data: {
            title: values.title,
            description: values.description,
            code: values.code,
            createdBy: values.createdBy
        },
        headers: {
            Authorization: localStorage.getItem('token')
        },
    })
        .then(() => {
            resetForm();
            toast.success('Posted Successfully!');
            setTimeout(() => {
                window.location.href = '/';
            }, 1500);
        })
};

export default addPost;