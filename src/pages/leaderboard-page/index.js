import React, { useState, useEffect } from 'react';
import Loader from '../../components/loader/index';
import LeaderboardItem from '../../components/leaderboard-item/index';
import getUsers from '../../actions/getUsers';
import { LeaderboardDivContainner, LeaderboardMessage } from './style';

const LeaderboardPage = () => {
    const LocalIsLogging = JSON.parse(localStorage.getItem('isLogging'));
    const [users, setUsers] = useState([]);
    const [listOfUsers] = useState([]);
    const [loading, setLoading] = useState(true);

    useEffect(() => {
        if (LocalIsLogging) {
            getUsers({ setUsers, setLoading, loading });
        } else {
            setLoading(false);
        }

        document.title = 'ShareCode | Leaderboard'
    }, []);

    useEffect(() => {
        if (LocalIsLogging) {
            users.forEach(element => {
                listOfUsers.push({
                    id: element._id,
                    username: element.username,
                    posts: element.posts,
                    followers: element.followers
                })
            });

            listOfUsers.sort(function (a, b) {
                let ResultA = a.posts.length + a.followers.length;
                let ResultB = b.posts.length + b.followers.length;

                return ResultB - ResultA;
            });

        } else {
            setLoading(false);
        }
    }, [users]);

    return (
        <div>
            {!loading ? (
                LocalIsLogging ? (
                    <LeaderboardDivContainner>
                        <table>
                            <tr>
                                <th>#</th>
                                <th>Username</th>
                                <th>Posts</th>
                                <th>Followers</th>
                            </tr>
                            {listOfUsers.map((user, index) => (
                                <LeaderboardItem
                                    key={index}
                                    Number={index}
                                    Username={user.username}
                                    postsNumber={user.posts.length}
                                    followersNumber={user.followers.length}
                                />
                            ))}
                        </table>


                    </LeaderboardDivContainner>
                ) : (
                    <LeaderboardMessage>You need to login in to see the leaderboard.</LeaderboardMessage>
                )
            ) : (
                <div>
                    <Loader loading={loading} />
                </div>
            )}
        </div>
    )
};

export default LeaderboardPage;

