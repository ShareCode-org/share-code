import React from 'react';
import API from '../../api/api';
import { useParams, Prompt } from 'react-router';
import { decodeToken } from "react-jwt";
import getUser from '../../actions/getUser';
import followUser from '../../actions/followUser';
import unFollowUser from '../../actions/unFollowUser';
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

    const tokenData = decodeToken(localStorage.getItem('token'));
    const [loading, setLoading] = React.useState(true);
    const [isFollowing, setIsFollowing] = React.useState();
    const [user, setUser] = React.useState({});
    const [me, setMe] = React.useState({});

    React.useEffect(() => {
        let load = true;
        getUser({ id, setUser, load, setLoading, loading })
        API.get(`/user/${tokenData.userId}`)
            .then(res => setMe(res.data))
            .catch(err => err)
    }, []);

    React.useEffect(() => {
        let followers = user.followers || [];
        if (followers.includes(tokenData.username)) {
            setIsFollowing(true);
        } else {
            setIsFollowing(false);
        }
    }, [user]);

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
                                <ProfileSpan>{user.followers.length} followers</ProfileSpan>
                                <ProfileSpan>{user.following.length} following</ProfileSpan>
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
                                            <div>
                                                {isFollowing ? (
                                                    <ProfileButton
                                                        onClick={() => unFollowUser({ id, user, me, setUser, setIsFollowing, getUser })}
                                                    >
                                                        Unfollow
                                                    </ProfileButton>
                                                ) : (
                                                    <ProfileButton
                                                        onClick={() => followUser({ id, user, me, setUser, setIsFollowing, getUser })}
                                                    >
                                                        Follow
                                                    </ProfileButton>
                                                )}
                                            </div>
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