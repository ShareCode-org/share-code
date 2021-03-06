import React from 'react';
import { UserContext } from '../../context/userContext';
import Loader from '../../components/loader/index';
import Leaderboard from '../../components/leaderboard/index';
import getUsers from '../../actions/getUsers';
import { LeaderboardDivContainner, LeaderboardMessage } from './style';

const LeaderboardPage = () => {
    const LocalIsLogging = JSON.parse(localStorage.getItem('isLogging'));
    const { isLogging } = React.useContext(UserContext);
    const [users, setUsers] = React.useState([]);
    const [listOfUsers, setListOfUsers] = React.useState([]);
    const [loading, setLoading] = React.useState(true);

    React.useEffect(() => {
        if (LocalIsLogging) {
            var load = false;
            getUsers({ setUsers, setLoading, loading });
        } else {
            setLoading(false);
        }
    }, []);

    React.useEffect(() => {
        if (LocalIsLogging) {
            users.forEach(element => {
                listOfUsers.push({
                    username: element.username, posts: element.posts.length
                })
            });

            listOfUsers.sort(function (a, b) {
                return b.posts - a.posts;
            });
        } else {
            setLoading(false);
        }
    }, [users]);

    return (
        <div>
            {!loading ? (
                isLogging ? (
                    <LeaderboardDivContainner>
                        <table>
                            <tr>
                                <th>#</th>
                                <th>Username</th>
                                <th>Posts</th>
                            </tr>
                            {listOfUsers.map((user, index) => (
                                <Leaderboard
                                    Number={index}
                                    Username={user.username}
                                    postsNumber={user.posts}
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

