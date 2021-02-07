import API from '../api/api';

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
        .catch(err => err);
};

export default signIn;