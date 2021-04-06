// import API from '../api/api';

const unFollowUser = ({ id, profile, user, setProfile, setIsFollowing, getUser }) => {
    alert('Not working yet :(')
    // const followerIndex = user.followers.indexOf({ _id: me._id, username: me.username });
    // const followingIndex = me.following.indexOf({ _id: user._id, username: user.username });

    // const newFollowersArray = user.followers.splice(followerIndex, 1);
    // const newFollowingArray = me.following.splice(followingIndex, 1);

    // API.patch(`user/${user._id}`, [
    //     { "propName": "followers", "value": user.followers.splice(followerIndex, 1) }
    // ])
    //     .then(() => {
    //         API.patch(`user/${me._id}`, [
    //             { "propName": "following", "value": me.following.splice(followingIndex, 1) }
    //         ])
    //             .then(() => {
    //                 let load = false;
    //                 getUser({ id, setUser, load });
    //             });
    //     })
};

export default unFollowUser;