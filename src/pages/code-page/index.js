import React from 'react';
import { dark } from 'react-syntax-highlighter/dist/esm/styles/hljs';
import { useParams } from 'react-router-dom';
import API from '../../api/api';
import {
    CodePageDiv,
    CodePageDetails,
    CodePageTitle,
    CodePageDescription,
    CodePageCode
} from './style';

const CodePage = () => {
    let { id } = useParams();

    const [post, setPost] = React.useState({});
    const codeString = `${post.code}`;

    React.useEffect(() => {
        API.get('post/' + id)
            .then(res => setPost(res.data))
    }, []);

    return (
        <CodePageDiv>
            <CodePageDetails>
                <CodePageTitle>{post.title}</CodePageTitle>
                <CodePageDescription>{post.description}</CodePageDescription>
            </CodePageDetails>
            <CodePageCode style={dark}>
                {codeString}
            </CodePageCode>
        </CodePageDiv>
    )
};

export default CodePage;