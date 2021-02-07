import React from 'react';
import signIn from '../../actions/signIn';
import { Formik, Field } from "formik";
import * as Yup from 'yup';
import { UserContext } from '../../context/userContext';
import {
    SignInDiv,
    FormDiv,
    Title,
    Span,
    ErrorSpan
} from './style';

const SigninSchema = Yup.object().shape({
    username: Yup.string()
        .min(4, 'Too Short!')
        .max(8, 'Too Long!')
        .required('Required'),
    password: Yup.string()
        .min(8, 'Too Short!')
        .max(20, 'Too Long!')
        .required('Required')
});

const SignIn = () => {
    const { setIsLogging } = React.useContext(UserContext);

    return (
        <SignInDiv>
            <Title>I already have an account</Title>
            <Span>Sign in with your email and password</Span>
            <Formik
                initialValues={{
                    username: '',
                    password: ''
                }}
                validationSchema={SigninSchema}
                onSubmit={(values, { resetForm }) => {
                    signIn({
                        values,
                        setIsLogging,
                        resetForm
                    });
                }}
            >
                {({ errors, touched }) => (

                    <FormDiv>
                        <div>
                            <Field
                                name='username'
                                type='username'
                                placeholder='Username'
                            />
                        </div>
                        {errors.username && touched.username ? (
                            <ErrorSpan>{errors.username}</ErrorSpan>
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
                            <button type='submit'>Sign in</button>
                        </div>
                    </FormDiv>
                )}
            </Formik>
        </SignInDiv>
    )
};

export default SignIn;