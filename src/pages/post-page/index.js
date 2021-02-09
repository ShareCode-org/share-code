import React from 'react';
import addPost from "../../actions/addPost";
import { decodeToken } from "react-jwt";
import { ContactPageDivContainer, PostCaptcha, PostSpan } from './style';

const PostPage = () => {
    const [title, setTitle] = React.useState('');
    const [description, setDescription] = React.useState('');
    const [code, setCode] = React.useState('');
    const tokenData = decodeToken(localStorage.getItem('token'));
    const [errorMessage, setErrorMessage] = React.useState('');
    const [Value, setValue] = React.useState('');

    const postData = {
        title: title,
        description: description,
        code: code,
        createdBy: tokenData.username,
        token: localStorage.getItem('token')
    };

    const handleSubmit = () => {
        addPost({
            postData,
            title,
            description,
            code,
            Value,
            setTitle,
            setDescription,
            setCode,
            setErrorMessage
        });
    };

    const onChange = (value) => {
        setValue(value);
    };

    return (
        <ContactPageDivContainer>
            <>
                <div>
                    <input
                        placeholder="Title"
                        value={title}
                        onChange={e => setTitle(e.target.value)}
                    />
                </div>
                <div>
                    <input
                        placeholder="Description"
                        value={description}
                        onChange={e => setDescription(e.target.value)}
                    />
                </div>
                <div>
                    <textarea
                        placeholder="Code"
                        value={code}
                        onChange={e => setCode(e.target.value)}
                    />
                </div>
                <PostSpan>{errorMessage}</PostSpan>
                <PostCaptcha
                    sitekey="6LdR6CYaAAAAAIA-PEqiHM8RqNEndngWJBKG0__u"
                    onChange={onChange}
                />
                <div>
                    <button onClick={handleSubmit}>Add</button>
                </div>
            </>

        </ContactPageDivContainer>
    )
};

export default PostPage;