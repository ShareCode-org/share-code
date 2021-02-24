import React from 'react';
import { withStyles } from '@material-ui/core/styles';
import { CopyToClipboard } from 'react-copy-to-clipboard';
import { toast } from 'react-toastify';
import IconButton from '@material-ui/core/IconButton';
import MoreVertIcon from '@material-ui/icons/MoreVert';
import Menu from '@material-ui/core/Menu';
import MenuItem from '@material-ui/core/MenuItem';
import ListItemIcon from '@material-ui/core/ListItemIcon';
import ListItemText from '@material-ui/core/ListItemText';
import EditIcon from '@material-ui/icons/Edit';
import DeleteIcon from '@material-ui/icons/Delete';
import LinkIcon from '@material-ui/icons/Link';

const StyledMenu = withStyles({
  paper: {
    border: '1px solid #d3d4d5',
  },
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

const PostMenu = ({ tokenData, post, deleteFunc }) => {
  const [anchorEl, setAnchorEl] = React.useState(null);

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
        <MoreVertIcon />
      </IconButton>
      <StyledMenu
        id="customized-menu"
        anchorEl={anchorEl}
        keepMounted
        open={Boolean(anchorEl)}
        onClose={handleClose}
      >
        {
          tokenData === null ?
            '' : (
              tokenData.username === post.createdBy || tokenData.username === 'admin' ? (
                <div>
                  <StyledMenuItem>
                    <ListItemIcon>
                      <EditIcon fontSize="small" />
                    </ListItemIcon>
                    <ListItemText primary="Edit" />
                  </StyledMenuItem>
                  <StyledMenuItem onClick={deleteFunc}>
                    <ListItemIcon>
                      <DeleteIcon fontSize="small" />
                    </ListItemIcon>
                    <ListItemText primary="Delete" />
                  </StyledMenuItem>
                </div>
              ) : ''
            )
        }
        <CopyToClipboard
          text={window.location.href}
          onCopy={() => toast.success('Copied Successfully!')}
        >
          <StyledMenuItem>
            <ListItemIcon>
              <LinkIcon fontSize="small" />
            </ListItemIcon>
            <ListItemText primary="Share" />
          </StyledMenuItem>
        </CopyToClipboard>
      </StyledMenu>
    </div>
  );
}

export default PostMenu;