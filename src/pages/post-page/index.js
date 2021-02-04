import React from 'react';
import API from '../../api/api';
import { ContactPageDivContainer, PostCaptcha, PostSpan, PostSentAlert } from './style';

const PostPage = () => {
    const [title, setTitle] = React.useState('');
    const [description, setDescription] = React.useState('');
    const [code, setCode] = React.useState('');
    const [errorMessage, setErrorMessage] = React.useState('');
    const [postSented, setPostSented] = React.useState(false);
    const [Value, setValue] = React.useState('');

    const onChange = (value) => {
        setValue(value);
    };

    const postData = {
        title: title,
        description: description,
        code: code
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
                        setPostSented(true);
                        window.location.href = '/';
                    })
            } else {
                setErrorMessage('Captcha required');
            }
        }
    };

    return (
        <ContactPageDivContainer>
            {postSented === true ? (
                <PostSentAlert>✅ Posted</PostSentAlert>
            ) : (
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
                )}
        </ContactPageDivContainer>
    )
};

export default PostPage;