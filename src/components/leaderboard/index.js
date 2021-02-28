import React from 'react';
import AccountSvg from '../../assests/account.svg';
import { LeaderboardDiv, LeaderboardImg, LeaderboardPostNumber } from './style';

const Leaderboard = ({ Number, Username, postsNumber }) => (
    <LeaderboardDiv>
        {Number}#
        <LeaderboardImg src={AccountSvg} />
        {Username} <LeaderboardPostNumber>{postsNumber}</LeaderboardPostNumber>
    </LeaderboardDiv>
);

export default Leaderboard;