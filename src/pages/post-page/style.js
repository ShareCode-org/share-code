import styled from 'styled-components';
import ReCAPTCHA from "react-google-recaptcha";

export const ContactPageDivContainer = styled.div`
    position: relative;
    top: 80px;
    text-align: center;
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
