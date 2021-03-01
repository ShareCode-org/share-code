import React from 'react';
import AccountSvg from '../../assests/account.svg';
// import { LeaderboardDiv, LeaderboardPostNumber } from './style';

const Leaderboard = ({ Number, Username, postsNumber }) => (
    <tr>
        <td>{Number}#</td>
        <td>{Username}</td>
        <td>{postsNumber}</td>
    </tr>
);

export default Leaderboard;