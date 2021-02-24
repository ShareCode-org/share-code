import API from '../api/api';
import { toast } from 'react-toastify';

const signUp = ({ values, resetForm }) => {
    API.post(`/user/signup`, values)
        .then(res => {
            resetForm();
            toast.success('Account created!');
        })
        .catch(() => toast.error('Account already exist!'))
};

export default signUp;