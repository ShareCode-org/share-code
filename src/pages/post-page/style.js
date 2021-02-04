import styled from 'styled-components';
import ReCAPTCHA from "react-google-recaptcha";

export const ContactPageDivContainer = styled.div`
    position: relative;
    top: 80px;
    text-align: center;
    @media (max-width: 768px) {
      top: 180px;
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
