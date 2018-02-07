import React from 'react';
import { ContextMenu } from 'react-contextmenu';
import { MenuItem } from 'material-ui/Menu';
import { ListItemText } from 'material-ui/List';

import ContentCopy from 'material-ui-icons/ContentCopy';
import MoveToInbox from 'material-ui-icons/MoveToInbox';
import ModeEdit from 'material-ui-icons/ModeEdit';
import Delete from 'material-ui-icons/Delete';
import Share from 'material-ui-icons/Share';
import FileDownload from 'material-ui-icons/FileDownload';

const FileContextMenu = (props) => {
    const { classes } = props;
    return (
        <ContextMenu id="some_unique_identifier">
            <MenuItem className={classes.menuItem}>
                <span className={classes.icon}>
                    <ContentCopy />
                </span>
                <ListItemText classes={{ primary: classes.primary }} inset primary="Copy" />
            </MenuItem>
            <MenuItem className={classes.menuItem}>
                <span className={classes.icon}>
                    <MoveToInbox />
                </span>
                <ListItemText classes={{ primary: classes.primary }} inset primary="Move" />
            </MenuItem>
            <MenuItem className={classes.menuItem}>
                <span className={classes.icon}>
                    <ModeEdit />
                </span>
                <ListItemText classes={{ primary: classes.primary }} inset primary="Rename" />
            </MenuItem>
            <MenuItem className={classes.menuItem}>
                <span className={classes.icon}>
                    <Delete />
                </span>
                <ListItemText classes={{ primary: classes.primary }} inset primary="Remove" />
            </MenuItem>
            <MenuItem className={classes.menuItem}>
                <span className={classes.icon}>
                    <Share />
                </span>
                <ListItemText classes={{ primary: classes.primary }} inset primary="Share" />
            </MenuItem>
            <MenuItem className={classes.menuItem}>
                <span className={classes.icon}>
                    <FileDownload />
                </span>
                <ListItemText classes={{ primary: classes.primary }} inset primary="Download" />
            </MenuItem>
        </ContextMenu>
    );
}

export default FileContextMenu;