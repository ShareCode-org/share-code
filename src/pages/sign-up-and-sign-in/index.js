import React,{ useEffect } from 'react';
import SignUp from '../../components/sign-up/index';
import SignIn from '../../components/sign-in/index';
import { SignInDivContainer } from './style';

const SignUpAndSignIn = () => {
    useEffect(() => document.title = 'ShareCode | Sign in & up');

    return (
        <SignInDivContainer>
            <SignUp />
            <SignIn />
        </SignInDivContainer>
    );
};

export default SignUpAndSignIn;