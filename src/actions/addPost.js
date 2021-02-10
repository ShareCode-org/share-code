import API from '../api/api';
import { toast } from 'react-toastify';

const addPost = ({postData, title, description, code, Value, setTitle, setDescription, setCode, setErrorMessage }) => {
    if (title === "" && description === "" && code === "") {
        setErrorMessage('The form is empty');
    }
    else if (title === "") {
        setErrorMessage('Title is empty');
    }
    else if (description === "") {
        setErrorMessage('Description is empty');
    }
    else if (code === "") {
        setErrorMessage('Code is empty');
    }
    else {
        if (Value) {
            setErrorMessage('');
            API.post(`/post`, postData)
                .then(res => {
                    setTitle('');
                    setDescription('');
                    setCode('');
                    toast.success('Posted Successfully!');
                    setTimeout(() => {
                        window.location.href = '/';
                    }, 1500);
                })
        } else {
            setErrorMessage('Captcha required');
        }
    }
};

export default addPost;