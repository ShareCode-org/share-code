import API from '../api/api';

const getUser = ({ id, setUser, load, setLoading, loading }) => {
    API.get(`/user/${id}`)
        .then(res => {
            document.title = `ShareCode | ${res.data.username}`;
            if (load) {
                setTimeout(() => {
                    setUser(res.data);
                    setLoading(!loading);
                }, 500)
            } else 
                setUser(res.data);
        })
        .catch(err => err)
};

export default getUser;