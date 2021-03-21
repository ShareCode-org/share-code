import styled from 'styled-components';

export const ProfileDiv = styled.div`
    display: flex;
    flex-direction: column;
    align-items: center;
    position: relative;
    top: 60px;
`;

export const ProfilesDiv = styled.div`
    display: flex;
    align-items: center;
    margin: 10px 0px 10px 0px; 
`;

export const ProfileInfoDiv = styled.div`
    display: flex;
    flex-direction: column;
    justify-content: center;
    text-align: center;
    background: #f5f5f5;
    border-radius: 8px;
    box-shadow: rgb(0 0 0 / 10%) 0px 4px 6px -1px, rgb(0 0 0 / 6%) 0px 2px 4px -1px;
    min-height: 250px;
    padding: 20px;
`;

export const ProfilePicture = styled.img`
    border-radius: 50%;
    cursor: pointer;
    width: 100px; 
    height: 100px;
`;

export const ProfileUsername = styled.h1`
  margin: 10px;
`;

export const ProfileStatsDiv = styled.div`
  margin-top: 10px;
`;

export const ProfileSpan = styled.span`
  cursor: pointer;
  color: grey;
  margin: 10px;
`;

export const ProfileBio = styled.p`
  margin: 10px 0px;
  max-width: 350px;
  line-height: 20px;
`;

export const ProfileBioInput = styled.textarea`
  width: 100%;
  height: 80px;
  margin: 20px 0px 0px 0px;
`;

export const ProfileButton = styled.button`
  margin: 5px 10px;
`;

export const SaveButton = styled(ProfileButton)`
    margin: 10px;
    color: rgba(0, 0, 0, 0.87);
    background-color: #e0e0e0;
    :hover {
        background: lightgrey;
    }
`;

export const ProfileMessage = styled.h1`
  text-align: center;
  position: relative;
  top: 200px;
`;