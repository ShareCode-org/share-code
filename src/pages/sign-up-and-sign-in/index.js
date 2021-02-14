import React from 'react';
import SignUp from '../../components/sign-up/index';
import SignIn from '../../components/sign-in/index';
import { SignInDivContainer } from './style';

const SignUpAndSignIn = () => (
    <SignInDivContainer>
        <SignUp />
        <SignIn />
    </SignInDivContainer>
);

export default SignUpAndSignIn;