import styled from 'styled-components';
import ReCAPTCHA from "react-google-recaptcha";
import { Form, Field } from 'formik';

export const PostFormDiv = styled.div`
    text-align: center;
    margin: 20px;
`;

export const PostFORM = styled(Form)`
    padding: 25px;
`;

export const PostInput = styled(Field)`
  width: 100%;
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

