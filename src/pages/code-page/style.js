import styled from 'styled-components';
import { Prism as SyntaxHighlighter } from 'react-syntax-highlighter';

export const CodePageDiv = styled.div`
    position: absolute;
    top: 25%;
    left: 25%;
    @media (max-width: 768px) {
        margin-left: 10px;
    }
`;

export const CodePageDetails = styled.div`
    text-align: left;
    font-size: 22px;
    margin-bottom: 10px;
`;

export const CodePageBottom = styled.div`
    display: flex;
    justify-content: space-between;
    align-items: center;
`;

export const CodePageTitle = styled.h1`
    color: darkblue;
    margin-bottom: 10px;
    @media (max-width: 768px) {
        font-size: 35px;
    }
`;

export const CodePageDescription = styled.p`
    color: grey;
    margin-bottom: 10px;
`;

export const CodePageCode = styled(SyntaxHighlighter)`
    width: 900px;
    height: auto;
    margin-bottom: 15px;
    @media (max-width: 768px) {
        width: auto;
    } 
`;

export const CodeSpan = styled.span`
    color: darkgrey;
`;

export const CodeDeleteButton = styled.button`
    background-color: red;
    margin: 0px;
    :hover {
        background-color: #d10000;
    }
`;