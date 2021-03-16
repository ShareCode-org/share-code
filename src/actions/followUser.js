import API from '../api/api';

const followUser = ({ id, user, me, setUser, setIsFollowing, getUser }) => {
    API.patch(`user/${me._id}`, [
        { "propName": "following", "value": [...me.following, user.username] }
    ])
    API.patch(`user/${id}`, [
        { "propName": "followers", "value": [...user.followers, me.username] }
    ])
        .then(() => {
            let load = false;
            getUser({ id, setUser, load });
            setIsFollowing(true);
        })
};

export default followUser;