import React from 'react';
import { LeaderboardDiv, LeaderboardImg, LeaderboardPostNumber } from './style';

const Leaderboard = ({ Number, Username, postsNumber }) => (
    <LeaderboardDiv>
        {Number}#
        <LeaderboardImg src='https://www.flaticon.com/svg/vstatic/svg/1738/1738691.svg?token=exp=1614527449~hmac=579094d4c3e27c0f4cf5024e527f7b65' />
        {Username} <LeaderboardPostNumber>{postsNumber}</LeaderboardPostNumber>
    </LeaderboardDiv>
);

export default Leaderboard;