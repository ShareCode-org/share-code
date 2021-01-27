import styled from 'styled-components';
import ReCAPTCHA from "react-google-recaptcha";

export const ContactPageDivContainer = styled.div`
    position: relative;
    top: 80px;
    text-align: center;
`;

export const PostInput = styled.input`
    font-size: 25px;
    border: solid blue 1px;
    color: #7a7aff;
    outline: none;
    padding-left: 4px;
    margin: 5px;
    ::placeholder {
        color: #7a7aff;
    }
`;

export const PostMessage = styled.textarea`
    font-size: 20px;
    border: solid blue 1px;
    color: #7a7aff;
    outline: none;
    width: 20%;
    height: 200px;
    padding-left: 4px;
    margin: 5px;
    overflow: hidden;
    ::placeholder {
        color: #7a7aff;
    }
    @media (max-width: 768px) {
        width: 90%;
    }
`;

export const PostCaptcha = styled(ReCAPTCHA)`
    display: flex;
    justify-content: center;
    margin: 10px;
`;

export const PostSpan = styled.span`
    margin: 10px;
    color: red;
`;

export const PostSentAlert = styled.h1`
    position: relative;
    top: 100px;
`;
