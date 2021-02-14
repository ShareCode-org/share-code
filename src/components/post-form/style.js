import styled from 'styled-components';
import ReCAPTCHA from "react-google-recaptcha";

export const PostPageDiv = styled.div`
    text-align: center;
    margin: 20px;
`;

export const PostCaptcha = styled(ReCAPTCHA)`
    display: flex;
    justify-content: center;
    margin: 10px;
`;

export const ErrorSpan = styled.span`
    margin: 10px;
    color: red;
`;

