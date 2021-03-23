import API from '../api/api';

const followUser = ({ id, user, me, setUser, setIsFollowing, getUser }) => {
    API.patch(`user/${me._id}`, [
        { "propName": "following", "value": [...me.following, { _id: user._id, username: user.username }] }
    ])
    API.patch(`user/${id}`, [
        { "propName": "followers", "value": [...user.followers, { _id: me._id, username: me.username }] }
    ])
        .then(() => {
            let load = false;
            getUser({ id, setUser, load });
            setIsFollowing(true);
        })
};

export default followUser;