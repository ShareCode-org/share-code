import React, { useState, useContext } from 'react';
import UserContext from '../../context/userContext';
import { withStyles } from '@material-ui/core/styles';
import { toast } from 'react-toastify';
import IconButton from '@material-ui/core/IconButton';
import Menu from '@material-ui/core/Menu';
import MenuItem from '@material-ui/core/MenuItem';
import ListItemIcon from '@material-ui/core/ListItemIcon';
import ListItemText from '@material-ui/core/ListItemText';
import AccountCircleIcon from '@material-ui/icons/AccountCircle';
import SupervisorAccountIcon from '@material-ui/icons/SupervisorAccount';
import ExitToAppIcon from '@material-ui/icons/ExitToApp';
import VpnKeyIcon from '@material-ui/icons/VpnKey';

const StyledMenu = withStyles({
    paper: {
        border: '1px solid #d3d4d5',
    }
})((props) => (
    <Menu
        elevation={0}
        getContentAnchorEl={null}
        anchorOrigin={{
            vertical: 'bottom',
            horizontal: 'center',
        }}
        transformOrigin={{
            vertical: 'top',
            horizontal: 'center',
        }}
        {...props}
    />
));

const StyledMenuItem = withStyles(() => ({
    root: {
        '&:focus': {
            backgroundColor: 'lightblue',
            '&.MuiListItemText-primary': {
                color: 'black',
            },
        },
    },
}))(MenuItem);

const NavbarAccount = ({ isLogging, setIsLogging }) => {
    const { user } = useContext(UserContext);
    const [anchorEl, setAnchorEl] = useState(null);

    const Logout = () => {
        setIsLogging(false);
        localStorage.setItem('token', '');
        localStorage.setItem('isLogging', false);
        toast.success('Logout Successful!');
        setAnchorEl(null);
    };

    const handleClick = (event) => {
        setAnchorEl(event.currentTarget);
    };

    const handleClose = () => {
        setAnchorEl(null);
    };

    return (
        <div>
            <IconButton
                aria-label="more"
                aria-controls="long-menu"
                aria-haspopup="true"
                onClick={handleClick}
            >
                <AccountCircleIcon />
            </IconButton>
            <StyledMenu
                id="customized-menu"
                anchorEl={anchorEl}
                keepMounted
                open={Boolean(anchorEl)}
                onClose={handleClose}
            >
                {
                    isLogging ? (
                        <div>
                            <StyledMenuItem onClick={() => window.location.href = `/profile/${user.username}`}>
                                <ListItemIcon>
                                    <SupervisorAccountIcon fontSize="small" />
                                </ListItemIcon>
                                <ListItemText primary="Profile" />
                            </StyledMenuItem>
                            <StyledMenuItem onClick={() => Logout()}>
                                <ListItemIcon>
                                    <ExitToAppIcon fontSize="small" />
                                </ListItemIcon>
                                <ListItemText primary="Logout" />
                            </StyledMenuItem>
                        </div>
                    ) : (
                        <StyledMenuItem onClick={() => window.location.href = '/sign-up-and-sign-in'}>
                            <ListItemIcon>
                                <VpnKeyIcon fontSize="small" />
                            </ListItemIcon>
                            <ListItemText primary="Sign in" />
                        </StyledMenuItem>
                    )
                }
            </StyledMenu>
        </div>
    );
}

export default NavbarAccount;