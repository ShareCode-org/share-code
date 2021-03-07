import React from 'react';
import { useParams, Prompt } from 'react-router';
import getPost from '../../actions/getPost';
import editPost from '../../actions/editPost';
import { EditPageDiv, EditPageBottom, EditInput, EditTextArea, EditButton, SaveButton } from './style';

const EditPage = () => {
    const { id } = useParams();
    const [post, setPost] = React.useState({});

    React.useEffect(() => {
        var load = false;
        getPost({
            id,
            setPost,
            load
        });
    }, []);

    return (
        <EditPageDiv>
            <Prompt
                message={() => {
                    ""
                    document.title = 'ShareCode'
                }}
            />
            <div>
                <EditInput
                    placeholder='Title'
                    value={post.title}
                    onChange={(e) => setPost({ ...post, title: e.target.value })}
                />
            </div>
            <div>
                <EditInput
                    placeholder='Description'
                    value={post.description}
                    onChange={(e) => setPost({ ...post, description: e.target.value })}
                />
            </div>
            <div>
                <EditTextArea
                    placeholder='Code'
                    value={post.code}
                    onChange={(e) => setPost({ ...post, code: e.target.value })}
                />
            </div>
            <EditPageBottom>
                <EditButton onClick={() => window.location.href = `/post/${id}`}>Cancel</EditButton>
                <SaveButton onClick={() => editPost({ post })}>Save</SaveButton>
            </EditPageBottom>
        </EditPageDiv>
    )
};

export default EditPage;