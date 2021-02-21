import styled from 'styled-components';
import SyntaxHighlighter from 'react-syntax-highlighter';

export const CodePageDiv = styled.div`
    position: absolute;
    top: 25%;
    left: 25%;
`;

export const CodePageDetails = styled.div`
    text-align: left;
    font-size: 22px;
    margin-bottom: 10px;
`;

export const CodePageTop = styled.div`
    display: flex;
    justify-content: space-between;
    align-items: center;
`;

export const CodePageTitle = styled.h1`
    color: darkblue;
    margin-bottom: 10px;
`;

export const CodePageDescription = styled.p`
    color: grey;
    margin-bottom: 10px;
`;

export const CodePageCode = styled(SyntaxHighlighter)`
    width: 900px;
    height: auto;
    margin-bottom: 15px;
`;

export const CodeSpan = styled.span`
    color: darkgrey;
`;
