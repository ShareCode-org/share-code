import React from 'react';
import { useParams, Prompt } from 'react-router';
import { decodeToken } from "react-jwt";
import getUser from '../../actions/getUser';
import Loader from '../../components/loader/index';
import AccountSvg from '../../assests/account.svg';
import {
    ProfileDiv,
    ProfileInfoDiv,
    ProfilePicture,
    ProfileUsername,
    ProfileStatsDiv,
    ProfileSpan,
    ProfileDescription,
    ProfileButton
} from './style';

const ProfilePage = () => {
    const { id } = useParams();

    const [loading, setLoading] = React.useState(true);
    const [user, setUser] = React.useState({});
    const tokenData = decodeToken(localStorage.getItem('token'));

    React.useEffect(() => getUser({ id, setUser, setLoading, loading }), []);

    return (
        <div>
            <Prompt
                message={() => {
                    ""
                    document.title = 'ShareCode'
                }}
            />
            {!loading ? (
                <ProfileDiv>
                    <ProfileInfoDiv>
                        <div>
                            <ProfilePicture src={AccountSvg} />
                        </div>
                        <div>
                            <ProfileUsername>{user.username}</ProfileUsername>
                            <ProfileSpan>{user.role || "Member"}</ProfileSpan>
                            <ProfileStatsDiv>
                                <ProfileSpan>{user.posts.length} posts</ProfileSpan>
                                <ProfileSpan>0 followers</ProfileSpan>
                                <ProfileSpan>0 following</ProfileSpan>
                            </ProfileStatsDiv>
                            <ProfileDescription>
                                {user.bio || "The bio is empty."}
                            </ProfileDescription>
                            {
                                tokenData === null ?
                                    '' : (
                                        tokenData.username === user.username ? (
                                            <ProfileButton>Edit</ProfileButton>
                                        ) : (
                                            <ProfileButton>Follow</ProfileButton>
                                        )
                                    )
                            }
                        </div>
                    </ProfileInfoDiv>
                </ProfileDiv>
            ) : (
                <div>
                    <Loader loading={loading} />
                </div>
            )}

        </div>
    )
};

export default ProfilePage;