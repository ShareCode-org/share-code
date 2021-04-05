import API from '../api/api';

const followUser = ({ id, profile, user, setProfile, setIsFollowing, getUser }) => {
    alert('Not working yet :(')
    // API.patch(`user/${me._id}`, [
    //     { "propName": "following", "value": [...me.following, { _id: profile._id, username: profile.username }] }
    // ])
    // API.patch(`user/${id}`, [
    //     { "propName": "followers", "value": [...user.followers, { _id: user.userId, username: user.username }] }
    // ])
    //     .then(() => {
    //         let load = false;
    //         getUser({ id, setProfile, load });
    //         setIsFollowing(true);
    //     })
};

export default followUser;