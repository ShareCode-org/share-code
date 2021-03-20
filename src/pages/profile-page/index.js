import React from 'react';
import API from '../../api/api';
import { useParams, Prompt, Redirect } from 'react-router';
import { decodeToken } from "react-jwt";
import getUser from '../../actions/getUser';
import followUser from '../../actions/followUser';
import unFollowUser from '../../actions/unFollowUser';
import editBio from '../../actions/editBio';
import Loader from '../../components/loader/index';
import AccountSvg from '../../assests/account.svg';
import {
    ProfileDiv,
    ProfileInfoDiv,
    ProfilePicture,
    ProfileUsername,
    ProfileStatsDiv,
    ProfileSpan,
    ProfileBio,
    ProfileBioInput,
    ProfileButton,
    SaveButton
} from './style';

const ProfilePage = () => {
    const { id } = useParams();

    const tokenData = decodeToken(localStorage.getItem('token'));
    const [loading, setLoading] = React.useState(true);
    const [isFollowing, setIsFollowing] = React.useState();
    const [isEditing, setIsEditing] = React.useState(false);
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
                            {isEditing ? ''
                                : (
                                    <ProfileBio>
                                        {user.bio || "The bio is empty."}
                                    </ProfileBio>
                                )
                            }
                            {
                                tokenData === null ?
                                    '' : (
                                        tokenData.username === user.username ? (
                                            isEditing ? (
                                                <div>
                                                    <ProfileBioInput
                                                        placeholder='The bio is empty.'
                                                        maxlength='32'
                                                        value={user.bio}
                                                        onChange={(e) => setUser({ ...user, bio: e.target.value })}
                                                    />
                                                    <div>
                                                        <ProfileButton onClick={() => window.location.href = window.location.href}>Cancel</ProfileButton>
                                                        <SaveButton onClick={() => editBio({ id, user })}>Save</SaveButton>
                                                    </div>
                                                </div>
                                            ) : (
                                                <ProfileButton onClick={() => setIsEditing(true)}>Edit</ProfileButton>
                                            )
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