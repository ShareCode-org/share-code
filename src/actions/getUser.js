import API from '../api/api';

const getUser = ({ id, setUser, load, setLoading }) => {
    API.get(`/user/${id}`)
        .then(res => {
            document.title = `ShareCode | ${res.data.username}`;
            if (load) {
                setUser(res.data);
                setLoading(false);
            } else
                setUser(res.data);
        })
        .catch(() => setLoading(false))
};

export default getUser;