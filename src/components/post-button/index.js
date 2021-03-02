import React from 'react';
import { makeStyles } from '@material-ui/core/styles';
import AddIcon from '@material-ui/icons/Add';
import Fab from '@material-ui/core/Fab';
import Tooltip from '@material-ui/core/Tooltip';

const useStyles = makeStyles(() => ({
    fixed: {
        position: 'fixed',
        bottom: '25px',
        right: '25px'
    }
}));

const PostButton = ({ onClick }) => {
    const classes = useStyles();
    
    return (
        <Tooltip
            title="Add post"
            aria-label="add"
            onClick={onClick}
        >
            <Fab color="primary" className={classes.fixed}>
                <AddIcon />
            </Fab>
        </Tooltip>
    )
};

export default PostButton;