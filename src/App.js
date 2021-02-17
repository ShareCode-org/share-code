import React, { useState, useEffect, useMemo } from 'react';
import { Switch, Route, Redirect } from 'react-router-dom';
import { isExpired } from 'react-jwt';
import { UserContext } from './context/userContext';
import Navbar from './components/navbar/index';
import { ToastContainer } from 'react-toastify';
import HomePage from './pages/home-page/index';
import PostPage from './pages/post-page/index';
import CodePage from './pages/code-page/index';
import SignUpAndSignIn from './pages/sign-up-and-sign-in/index';
import NotFound from './pages/404-page/index';
import './App.css';

const App = () => {
    const [isLogging, setIsLogging] = useState(false);
    const isLoggingProvider = useMemo(() => ({ isLogging, setIsLogging }), [isLogging, setIsLogging]);
    const isTokenExpired = isExpired(localStorage.getItem('token'));


    useEffect(() => {
        if (isTokenExpired) {
            localStorage.setItem('token', '');
            localStorage.setItem('isLogging', false);
            setIsLogging(false);
        };

        const data = localStorage.getItem('isLogging');
        setIsLogging(JSON.parse(data));
    }, [])

    return (
        <div>
            <div className="App">
                <UserContext.Provider value={isLoggingProvider}>
                    <Navbar />
                    <ToastContainer
                        position="bottom-right"
                        autoClose={1500}
                    />
                    <Switch>
                        <Route exact path="/" component={HomePage} />
                        <Route exact path="/post" component={PostPage} />
                        <Route exact path={`/post/:id`} component={CodePage} />
                        <Route exact path="/sign-up-and-sign-in">
                            {
                                isLogging ? (
                                    <Redirect to="/" />
                                ) : (
                                        <SignUpAndSignIn />
                                    )
                            }
                        </Route>
                        <Route component={NotFound} />
                    </Switch>
                </UserContext.Provider>
            </div>
            <h1 className="app-not-working">
                Website don't work in mobile.
            </h1>
        </div>
    )
};



export default App;