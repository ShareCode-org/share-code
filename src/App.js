import React, { useState, useEffect, useMemo } from 'react';
import { Switch, Route, Redirect } from 'react-router-dom';
import { isExpired, decodeToken } from 'react-jwt';
import isLoggingContext from './context/isLoggingContext';
import UserContext from './context/UserContext';
import Navbar from './components/navbar/index';
import { ToastContainer } from 'react-toastify';
import HomePage from './pages/home-page/index';
import LeaderboardPage from './pages/leaderboard-page/index';
import PostPage from './pages/post-page/index';
import CodePage from './pages/code-page/index';
import EditPage from './pages/edit-page/index';
import ProfilePage from './pages/profile-page/index';
import SignUpAndSignIn from './pages/sign-up-and-sign-in/index';
import NotFound from './pages/404-page/index';
import 'react-toastify/dist/ReactToastify.css';
import './App.css';

const App = () => {
    const [user, setUser] = useState(decodeToken(localStorage.getItem('token')));
    const [isLogging, setIsLogging] = useState(false);
    const UserProvider = useMemo(() => ({ user, setUser }), [user, setUser]);
    const isLoggingProvider = useMemo(() => ({ isLogging, setIsLogging }), [isLogging, setIsLogging]);
    const isTokenExpired = isExpired(localStorage.getItem('token'));

    useEffect(() => {
        if (isTokenExpired) {
            localStorage.setItem('token', '');
            localStorage.setItem('isLogging', false);
            setIsLogging(false);
        };

        console.log(user)

        const data = localStorage.getItem('isLogging');
        setIsLogging(JSON.parse(data));

        document.title = 'ShareCode';
    }, []);

    return (
        <div>
            <div className="App">
                <UserContext.Provider value={UserProvider}>
                    <isLoggingContext.Provider value={isLoggingProvider}>
                        <Navbar />
                        <ToastContainer
                            position="bottom-right"
                            autoClose={1500}
                        />
                        <Switch>
                            <Route exact path="/" component={HomePage} />
                            <Route exact path="/leaderboard" component={LeaderboardPage} />
                            <Route exact path="/post" component={PostPage} />
                            <Route exact path={`/post/:id`} component={CodePage} />
                            <Route exact path={`/post/:id/edit`} component={EditPage} />
                            <Route exact path={`/profile/:id`} component={ProfilePage} />
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
                    </isLoggingContext.Provider>
                </UserContext.Provider>
            </div>
            <h1 className="app-not-working">
                Website don't work in mobile.
            </h1>
        </div>
    )
};

export default App;