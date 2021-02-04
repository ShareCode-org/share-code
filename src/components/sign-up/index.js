import React from 'react';
import API from '../../api/api';
import {
    SignUpDiv,
    FormDiv,
    Title,
    Span
} from './style';

const SignUp = () => {
    const [signup, setSignup] = React.useState({
        username: '',
        email: '',
        password: ''
    })

    const SignUpRequest = () => {
        API.post(`/user/signup`, signup)
            .then(res => {
                console.log(res.data);
            })
    };


    return (
        <SignUpDiv>
            <Title>I do not have a account</Title>
            <Span>Sign up with your email and password</Span>
            <FormDiv>
                <div>
                    <input
                        type='text'
                        placeholder='Username'
                        value={signup.username}
                        onChange={e => setSignup({ ...signup, username: e.target.value })}
                    />
                </div>
                <div>
                    <input
                        type='email'
                        placeholder='Email'
                        onChange={e => setSignup({ ...signup, email: e.target.value })}
                    />
                </div>
                <div>
                    <input
                        type='password'
                        placeholder='Password'
                        onChange={e => setSignup({ ...signup, password: e.target.value })}
                    />
                </div>
                <button onClick={SignUpRequest}>Sign up</button>
            </FormDiv>
        </SignUpDiv>


    )
};

export default SignUp;