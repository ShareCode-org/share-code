import styled from 'styled-components';

export const EditPageDiv = styled.div`
    text-align: center;
`;

export const EditPageBottom = styled.div`
    margin: 10px;
`;

export const EditInput = styled.input`
    width: 40%;
`;

export const EditTextArea = styled.textarea`
    width: 40%;
    height: 500px;
    overflow-y: scroll;
`;

export const EditButton = styled.button`
    margin: 10px;
`;

export const SaveButton = styled(EditButton)`
    margin: 10px;
    color: rgba(0, 0, 0, 0.87);
    background-color: #e0e0e0;
    :hover {
        background: lightgrey;
    }
`;

