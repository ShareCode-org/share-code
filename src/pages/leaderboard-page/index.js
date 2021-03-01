import React from 'react';
import { UserContext } from '../../context/userContext';
import Loader from '../../components/loader/index';
import Leaderboard from '../../components/leaderboard/index';
import getPosts from '../../actions/getPosts';
import getUsers from '../../actions/getUsers';
import { LeaderboardDivContainner, LeaderboardUl, LeaderboardMessage } from './style';

const LeaderboardPage = () => {
    const { isLogging } = React.useContext(UserContext);
    const [posts, setPosts] = React.useState([]);
    const [users, setUsers] = React.useState([]);
    const [listOfUsers, setListOfUsers] = React.useState([]);
    const [loading, setLoading] = React.useState(true);

    React.useEffect(() => {
        var load = false;
        getPosts({ setPosts, setLoading, loading, load });
        getUsers({ setUsers, setLoading, loading });
    }, []);

    React.useEffect(() => {
        users.forEach(element => {
            listOfUsers.push({
                username: element.username, posts: posts.filter(post => post.createdBy === element.username).length
            })
        });

        listOfUsers.sort(function (a, b) {
            return b.posts - a.posts;
        });

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

