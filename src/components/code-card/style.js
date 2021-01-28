import styled from 'styled-components';

export const CodeCardDiv = styled.div`
    box-shadow: 0px 2px 20px 0px rgba(94, 91, 91, 0.13);
    transition: transform 0.5s;
    border-radius: 10px;
    cursor: pointer;
    width: 450px;
    height: 250px;
    margin: 2%;
    padding: 20px;
    font-size: 18px;
    &:hover {
        box-shadow: 0px 11px 16px 0px rgba(5, 5, 5, 0.23);
        transform: scale(1.01);
    }
    @media (max-width: 768px) {
        width: 100%;
    } 
`;

export const CodeCardTitle = styled.h1`
    margin-bottom: 20px;
`;

export const CodeCardDescription = styled.p``;

