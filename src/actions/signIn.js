import API from '../api/api';
import { toast } from 'react-toastify';

const signIn = ({ values, setIsLogging, resetForm }) => {
    API.post(`/user/login`, values)
        .then(res => {
            if (res.data.message === "Auth successful") {
                resetForm();
                setIsLogging(true);
                window.location.href = '/';
                localStorage.setItem('token', res.data.token);
                localStorage.setItem('isLogging', true);
            }
        })
        .catch(err => toast.error('The account username or password is incorrect.'));
};

export default signIn;