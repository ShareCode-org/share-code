import React from 'react';

const LeaderboardItem = ({ id, Number, Username, postsNumber }) => (
    <tr>
        <td>{Number}#</td>
        <td onClick={() => window.location.href = `/profile/${id}`}>
            <span style={{ cursor: 'pointer' }}>{Username}</span>
        </td>
        <td>{postsNumber}</td>
    </tr>
);

export default LeaderboardItem;