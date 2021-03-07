import styled from 'styled-components';

export const ProfileDiv = styled.div`
    display: flex;
    flex-direction: column;
    align-items: center;
    position: relative;
    top: 60px;
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
  color: grey;
  margin: 10px;
`;

export const ProfileDescription = styled.p`
  margin: 10px;
`;

export const ProfileFollow = styled.button`
  margin: 5px 10px;
`;