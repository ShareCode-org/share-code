const signOut = ({ setIsLogging, setAnchorEl, toast }) => {
    setIsLogging(false);
    window.localStorage.setItem('token', '');
    window.localStorage.setItem('isLogging', false);
    toast.success('Sign out Successful!');
    setAnchorEl(null);
    setTimeout(() => {
        window.location.href = '/';
    }, 1500);
};

export default signOut;