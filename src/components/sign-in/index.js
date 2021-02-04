import React from 'react';
import API from '../../api/api';
// import jwt from 'jwt';
import { UserContext } from '../../context/userContext';
import {
    SignInDiv,
    FormDiv,
    Title,
    Span
} from './style';

const SignIn = () => {
    const { isLogging, setIsLogging } = React.useContext(UserContext);
    const [signin, setSignin] = React.useState({
        username: '',
        password: ''
    })

    const SignInRequest = () => {
        API.post(`/user/login`, signin)
            .then(res => {
                if (res.data.message === "Auth successful") {
                    window.location.href = '/';
                    setIsLogging(true);
                    localStorage.setItem('token', res.data.token);
                    localStorage.setItem('isLogging', true);
                }
            })
            .catch(err => err);
    };

    return (
        <SignInDiv>
            <Title>I already have an account</Title>
            <Span>Sign in with your email and password</Span>
            <FormDiv>
                <div>
                    <input
                        type='username'
                        placeholder='Username'
                        onChange={e => setSignin({ ...signin, username: e.target.value })}
                    />
                </div>
                <div>
                    <input
                        type='password'
                        placeholder='Password'
                        onChange={e => setSignin({ ...signin, password: e.target.value })}
                    />
                </div>
                <button onClick={SignInRequest}>Sign in</button>
            </FormDiv>
        </SignInDiv>
    )
};

export default SignIn;