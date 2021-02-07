import React from 'react';
import API from '../../api/api';
import { decodeToken } from "react-jwt";
import { toast } from 'react-toastify';
import { ContactPageDivContainer, PostCaptcha, PostSpan, PostSentAlert } from './style';

const PostPage = () => {
    const [title, setTitle] = React.useState('');
    const [description, setDescription] = React.useState('');
    const [code, setCode] = React.useState('');
    const tokenData = decodeToken(localStorage.getItem('token'));
    const [errorMessage, setErrorMessage] = React.useState('');
    const [Value, setValue] = React.useState('');

    const onChange = (value) => {
        setValue(value);
    };

    const postData = {
        title: title,
        description: description,
        code: code,
        createdBy: tokenData.username,
        token: localStorage.getItem('token')
    };

    const handleSubmit = () => {
        if (title === "" && description === "" && code === "") {
            setErrorMessage('The form is empty');
        }
        else if (title === "") {
            setErrorMessage('Title is empty');
        }
        else if (description === "") {
            setErrorMessage('Description is empty');
        }
        else if (code === "") {
            setErrorMessage('Code is empty');
        }
        else {
            if (Value) {
                setErrorMessage('');
                API.post(`/post`, postData)
                    .then(res => {
                        setTitle('');
                        setDescription('');
                        setCode('');
                        toast.success('Posted Successfully!');
                        window.location.href = '/';
                    })
            } else {
                setErrorMessage('Captcha required');
            }
        }
    };

    return (
        <ContactPageDivContainer>
            <>
                <div>
                    <input
                        placeholder="Title"
                        value={title}
                        onChange={e => setTitle(e.target.value)}
                        min="6" 
                        max="10"
                    />
                </div>
                <div>
                    <input
                        placeholder="Description"
                        value={description}
                        onChange={e => setDescription(e.target.value)}
                        min="10" 
                        max="16"
                    />
                </div>
                <div>
                    <textarea
                        placeholder="Code"
                        value={code}
                        onChange={e => setCode(e.target.value)}
                        min="50"
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