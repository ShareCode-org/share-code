import API from '../api/api';

const getUser = ({ id, setUser, setLoading, loading }) => {
    API.get(`/user/${id}`)
        .then(res => {
            document.title = `ShareCode | ${res.data.username}`;
            setTimeout(() => {
                setUser(res.data);
                setLoading(!loading);
            }, 500)
        })
        .catch(err => err)
};

export default getUser;