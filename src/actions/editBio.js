import API from '../api/api';

const editBio = ({ id, user }) => {
    API.patch(`user/${id}`, [
        { "propName": "bio", "value": user.bio }
    ])
        .then(() => window.location.href = window.location.href)
        .catch(err => err)
};

export default editBio;