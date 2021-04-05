import React, { useState, useEffect, useContext } from 'react';
import { useParams, Prompt } from 'react-router';
import UserContext from '../../context/UserContext';
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

    const [modals, setModals] = useState({
        postsModal: false,
        followersModal: false,
        followingModal: false
    });
    const [loading, setLoading] = useState(true);
    const { user } = useContext(UserContext);
    const [isFollowing, setIsFollowing] = useState();
    const [isEditing, setIsEditing] = useState(false);
    const [profile, setProfile] = useState({});

    useEffect(() => {
        let load = true;
        getUser({ id, setProfile, load, setLoading })
    }, []);

    useEffect(() => {
        let followers = user.followers || [];
        followers.forEach(element => {
            if (element._id === user.userId, element.username === user.username)
                setIsFollowing(true);
            else
                setIsFollowing(false);
        });
    }, [profile]);

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
                                {profile.posts.length ? (
                                    profile.posts.map((post, index) => (
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
                                {profile.followers.length ? (
                                    profile.followers.map((user, index) => (
                                        <ProfilesDiv key={index}>
                                            <ProfilePicture src={AccountSvg} />
                                            <div>
                                                <h1
                                                    style={{ marginLeft: '10px', cursor: 'pointer' }}
                                                    onClick={() => window.location.href = `/profile/${user.username}`}
                                                >
                                                    {user.username}
                                                </h1>
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
                                {profile.following.length ? (
                                    profile.following.map((user, index) => (
                                        <ProfilesDiv key={index}>
                                            <ProfilePicture src={AccountSvg} />
                                            <div>
                                                <h1
                                                    style={{ marginLeft: '10px', cursor: 'pointer' }}
                                                    onClick={() => window.location.href = `/profile/${user.username}`}
                                                >
                                                    {user.username}
                                                </h1>
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
                            <ProfileUsername>{profile.username}</ProfileUsername>
                            <ProfileSpan>{profile.role || "Member"}</ProfileSpan>
                            <ProfileStatsDiv>
                                <ProfileSpan onClick={() => setModals({ ...modals, postsModal: true })}>{profile.posts.length || 0} posts</ProfileSpan>
                                <ProfileSpan onClick={() => setModals({ ...modals, followersModal: true })}>{profile.followers.length || 0} followers</ProfileSpan>
                                <ProfileSpan onClick={() => setModals({ ...modals, followingModal: true })}>{profile.following.length || 0} following</ProfileSpan>
                            </ProfileStatsDiv>
                            {isEditing ? ''
                                : (
                                    <ProfileBio>
                                        {profile.bio || "The bio is empty."}
                                    </ProfileBio>
                                )
                            }
                            {
                                user === null ?
                                    '' : (
                                        user.username === profile.username ? (
                                            isEditing ? (
                                                <div>
                                                    <ProfileBioInput
                                                        placeholder='The bio is empty.'
                                                        maxlength='32'
                                                        value={profile.bio}
                                                        onChange={(e) => setProfile({ ...profile, bio: e.target.value })}
                                                    />
                                                    <div>
                                                        <ProfileButton onClick={() => window.location.href = window.location.href}>Cancel</ProfileButton>
                                                        <SaveButton onClick={() => editBio({ id, profile })}>Save</SaveButton>
                                                    </div>
                                                </div>
                                            ) : (
                                                <ProfileButton onClick={() => setIsEditing(true)}>Edit</ProfileButton>
                                            )
                                        ) : (
                                            <div>
                                                {isFollowing ? (
                                                    <ProfileButton
                                                        onClick={() => unFollowUser({ id, profile, user, setProfile, setIsFollowing, getUser })}
                                                    >
                                                        Unfollow
                                                    </ProfileButton>
                                                ) : (
                                                    <ProfileButton
                                                        onClick={() => followUser({ id, profile, user, setProfile, setIsFollowing, getUser })}
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
