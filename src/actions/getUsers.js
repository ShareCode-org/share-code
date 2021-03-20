import API from '../api/api';

const getUsers = ({ setUsers, setLoading, loading }) => {
    API.get('/user')
        .then(res => {
            setUsers(res.data);
            setLoading(false);
        })
        .catch(() => setLoading(false))
};

export default getUsers;