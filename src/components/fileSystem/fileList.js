import React from 'react';
import PropTypes from 'prop-types';
import { ContextMenuTrigger } from 'react-contextmenu';
import { withStyles } from 'material-ui/styles';
import FileContextMenu from '../contextMenu/fileContextMenu';
import List, { ListItem, ListItemText } from 'material-ui/List';
import FolderIcon from 'material-ui-icons/Folder';
import InsertDriveFile from 'material-ui-icons/InsertDriveFile';

const styles = theme => ({
    primary: {},
    icon: {
        margin: '0px'
    },
    menuItem: {
        '&:focus': {
            backgroundColor: "#3b657d",
            '& $primary, & $icon': {
                color: "#fff",
            },
        },
    },
    fontSize: {
        fontSize: '16px'
    }
});

const FileList = (props) => {
    const { classes } = props;
    const tile = props.tile;


    if (tile) {
        return (
            <ContextMenuTrigger id="some_unique_identifier">
                <List>
                    {
                        tile.children.map((child, idx) => {
                            let isFolder = child.children.length ? true : false;
                            if (isFolder) {
                                return (
                                    <ListItem key={child.name + idx} button>
                                        <FolderIcon className="main-folder" />
                                        <ListItemText primary={child.name} secondary="Jan 9, 2016" />
                                    </ListItem>
                                );
                            }
                            else {
                                return (
                                    <ListItem key={child.name + idx}>
                                        <InsertDriveFile className="main-folder" />
                                        <span > {child.name}</span>
                                    </ListItem>
                                );
                            }
                        })
                    }
                </List>
                <FileContextMenu classes={classes}/>
            </ContextMenuTrigger>
        )
    }
    else {
        return <span className={classes.fontSize}>Select a folder</span>
    }
}

FileList.propTypes = {
    classes: PropTypes.object.isRequired,
};

export default withStyles(styles)(FileList);