import API from '../api/api';

const getUser = ({ id, setProfile, load, setLoading }) => {
    API.get(`/user/${id}`)
        .then(res => {
            document.title = `ShareCode | ${res.data.username}`;
            if (load) {
                setProfile(res.data);
                setLoading(false);
            } else
                setProfile(res.data);
        })
        .catch(() => setLoading(false))
};

export default getUser;