import React from 'react';
import { Formik, Field } from "formik";
import * as Yup from 'yup';
import API from '../../api/api';
import { toast } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';
import {
    SignUpDiv,
    FormDiv,
    Title,
    Span,
    ErrorSpan
} from './style';


const SignupSchema = Yup.object().shape({
    username: Yup.string()
        .min(4, 'Too Short!')
        .max(8, 'Too Long!')
        .required('Required'),

    email: Yup.string().email('Invalid email').required('Required'),
    password: Yup.string()
        .min(8, 'Too Short!')
        .max(16, 'Too Long!')
        .required('Required'),
});

const SignUp = () => (
    <SignUpDiv>
        <Title>I do not have a account</Title>
        <Span>Sign up with your email and password</Span>

        <Formik
            initialValues={{
                username: '',
                email: '',
                password: ''
            }}
            validationSchema={SignupSchema}
            onSubmit={(values, { resetForm }) => {
                API.post(`/user/signup`, values)
                    .then(res => {
                        resetForm();
                        toast.success('Account created!');
                    })
                    .catch(() => toast.error('Account already exist!'))
            }}
        >
            {({ errors, touched }) => (
                <FormDiv>
                    <div>
                        <Field
                            name='username'
                            type='text'
                            placeholder='Username'
                        />
                    </div>
                    {errors.username && touched.username ? (
                        <ErrorSpan>{errors.username}</ErrorSpan>
                    ) : null}
                    <div>
                        <Field
                            name='email'
                            type='email'
                            placeholder='Email'
                        />
                    </div>
                    {errors.email && touched.email ? (
                        <ErrorSpan>{errors.email}</ErrorSpan>
                    ) : null}
                    <div>
                        <Field
                            name='password'
                            type='password'
                            placeholder='Password'
                        />
                    </div>
                    {errors.password && touched.password ? (
                        <ErrorSpan>{errors.password}</ErrorSpan>
                    ) : null}
                    <div>
                        <button type="submit">Sign up</button>
                    </div>
                </FormDiv>
            )}
        </Formik>
    </SignUpDiv>
);

export default SignUp;