import React from 'react';
import { CodeCardDiv, CodeCardTitle, CodeCardDescription } from './style';

const CodeCard = ({ title, description, id }) => (
    <CodeCardDiv onClick={() => window.location.href= `/post/${id}`}>
        <CodeCardTitle>{title}</CodeCardTitle>
        <CodeCardDescription>{description}</CodeCardDescription>
    </CodeCardDiv>
);

export default CodeCard;