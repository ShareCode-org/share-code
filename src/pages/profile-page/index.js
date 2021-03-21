import React from 'react';
import API from '../../api/api';
import { useParams, Prompt } from 'react-router';
import { decodeToken } from "react-jwt";
import getUser from '../../actions/getUser';
import followUser from '../../actions/followUser';
import unFollowUser from '../../actions/unFollowUser';
import editBio from '../../actions/editBio';
import Loader from '../../components/loader/index';
import ProfileModale from '../../components/profile-modal/index';
import CodeCard from '../../components/code-card/index';
import AccountSvg from '../../assests/account.svg';
import {
    ProfileDiv,
    ProfilesDiv,
    ProfileInfoDiv,
    ProfilePicture,
    ProfileUsername,
    ProfileStatsDiv,
    ProfileSpan,
    ProfileBio,
    ProfileBioInput,
    ProfileButton,
    SaveButton,
    ProfileMessage
} from './style';

const ProfilePage = () => {
    const { id } = useParams();

    const [modals, setModals] = React.useState({
        postsModal: false,
        followersModal: false,
        followingModal: false
    });
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
                    <ProfileModale
                        Content={
                            <div>
                                {user.posts.length ? (
                                    user.posts.map((post, index) => (
                                        <CodeCard
                                            key={index}
                                            title={post.title}
                                            description={post.description}
                                            id={post._id}
                                        />
                                    ))
                                ) : (
                                    <ProfileMessage>There is no posts.</ProfileMessage>
                                )}
                            </div>
                        }
                        modalIsOpen={modals.postsModal}
                        setIsOpen={setModals}
                    />
                    <ProfileModale
                        Content={
                            <div>
                                {user.followers.length ? (
                                    user.followers.map((user, index) => (
                                        <ProfilesDiv key={index}>
                                            <ProfilePicture src={AccountSvg} />
                                            <div>
                                                <h1 style={{ marginLeft: '10px', cursor: 'pointer' }}>{user}</h1>
                                            </div>
                                        </ProfilesDiv>
                                    ))
                                ) : (
                                    <ProfileMessage>There is no followers.</ProfileMessage>
                                )}
                            </div>
                        }
                        modalIsOpen={modals.followersModal}
                        setIsOpen={setModals}
                    />
                    <ProfileModale
                        Content={
                            <div>
                                {user.following.length ? (
                                    user.following.map((user, index) => (
                                        <ProfilesDiv key={index}>
                                            <ProfilePicture src={AccountSvg} />
                                            <div>
                                                <h1 style={{ marginLeft: '10px', cursor: 'pointer' }}>{user}</h1>
                                            </div>
                                        </ProfilesDiv>
                                    ))
                                ) : (
                                    <ProfileMessage>There is no following.</ProfileMessage>
                                )}
                            </div>
                        }
                        modalIsOpen={modals.followingModal}
                        setIsOpen={setModals}
                    />
                    <ProfileInfoDiv>
                        <div>
                            <ProfilePicture src={AccountSvg} />
                        </div>
                        <div>
                            <ProfileUsername>{user.username}</ProfileUsername>
                            <ProfileSpan>{user.role || "Member"}</ProfileSpan>
                            <ProfileStatsDiv>
                                <ProfileSpan onClick={() => setModals({ ...modals, postsModal: true })}>{user.posts.length} posts</ProfileSpan>
                                <ProfileSpan onClick={() => setModals({ ...modals, followersModal: true })}>{user.followers.length} followers</ProfileSpan>
                                <ProfileSpan onClick={() => setModals({ ...modals, followingModal: true })}>{user.following.length} following</ProfileSpan>
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