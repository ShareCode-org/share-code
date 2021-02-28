import API from '../api/api';

const getUsers = ({ setUsers, setLoading, loading }) => {
    API.get('/user')
        .then(res => {
            setTimeout(() => {
                setUsers(res.data);
                setLoading(!loading);
            }, 500)
        })
        .catch(() => setLoading(false))
};

export default getUsers;