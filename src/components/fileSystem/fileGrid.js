import React from 'react';
import Grid from 'material-ui/Grid';
import Typography from 'material-ui/Typography';
import Button from 'material-ui/Button';
import Paper from 'material-ui/Paper';

import PropTypes from 'prop-types';
import { ContextMenuTrigger } from 'react-contextmenu';
import { withStyles } from 'material-ui/styles';
import FileContextMenu from '../contextMenu/fileContextMenu';
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

const FileGrid = (props) => {
    const { classes } = props;
    const tile = props.tile;
    const styles = {
        height: 100,
        width: 100,
        margin: '20px',
        display: 'inline-flex',
        flexDirection: 'column',
        justifyContent: 'center',
        alignItems: 'center',
    };

    if (tile) {
        return (
            <ContextMenuTrigger id="some_unique_identifier">
                <Grid container spacing={0} style={{ flexDirection: 'column' }}>
                    <Grid style={{ flex: 1, flexDirection: 'row', flexWrap: 'wrap' }}>
                        <Typography> Folders </Typography>
                        {
                            tile.children.map((child, idx) => {
                                let isFolder = child.children.length ? true : false;
                                if (isFolder) {
                                    return (
                                        <Button
                                            key={child.name + idx}
                                            style={{ margin: '8px', backgroundColor: '#fff' }} raised="true" size="medium">
                                            <FolderIcon style={{ marginRight: '8px', color: '#3b657d' }} />
                                            {child.name}
                                        </Button>
                                    );
                                }
                            })
                        }
                    </Grid>
                    <Grid style={{ flex: 1, flexDirection: 'row', flexWrap: 'wrap' }}>
                        <Typography> Files </Typography> {
                            tile.children.map((child, idx) => {
                                let isFolder = child.children.length ? true : false;
                                if (!isFolder) {
                                    return (
                                        <Paper
                                            key={child.name + idx}
                                            style={styles}>
                                            <InsertDriveFile style={{ color: '#3b657d' }} />
                                            <span > {child.name}</span>
                                        </Paper>
                                    );
                                }
                            })
                        }
                    </Grid>
                </Grid>
                <FileContextMenu classes={classes} />
            </ContextMenuTrigger>
        )
    }
    else {
        return <span>Select a Grid</span>
    }
}

FileGrid.propTypes = {
    classes: PropTypes.object.isRequired,
};

export default withStyles(styles)(FileGrid);