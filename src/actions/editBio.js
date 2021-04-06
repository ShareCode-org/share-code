import API from '../api/api';

const editBio = ({ id, profile }) => {
    API.patch(`user/${id}`, [
        { "propName": "bio", "value": profile.bio }
    ])
        .then(() => window.location.href = `/profile/${id}`)
        .catch(err => err)
};

export default editBio;