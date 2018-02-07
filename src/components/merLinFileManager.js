import React from 'react';
import PropTypes from 'prop-types';
import classNames from 'classnames';

// icons
import ViewList from 'material-ui-icons/ViewList';
import ViewModule from 'material-ui-icons/ViewModule';
import KeyboardArrowRight from 'material-ui-icons/KeyboardArrowRight';
import CreateNewFolder from 'material-ui-icons/CreateNewFolder';
import FileUpload from 'material-ui-icons/FileUpload';
import CloudUpload from 'material-ui-icons/CloudUpload';
import InfoIcon from 'material-ui-icons/Info';

// elems
import {withStyles} from 'material-ui/styles';
import IconButton from 'material-ui/IconButton';
import Card from 'material-ui/Card';
import Grid from 'material-ui/Grid';
import AppBar from 'material-ui/AppBar';
import Toolbar from 'material-ui/Toolbar';
import Button from 'material-ui/Button';
import Menu, {MenuItem, MenuList} from 'material-ui/Menu';
import {ListItemIcon, ListItemText} from 'material-ui/List';
import Drawer from 'material-ui/Drawer';
import List from 'material-ui/List';
//components
import Tree from './fileSystem/fileTreeView';
import FileList from './fileSystem/fileList';
import FileGrid from './fileSystem/fileGrid';

import logo from '../assets/img/logo.png'
const drawerWidth = 200;

const styles = theme => ({
    root: {
        flexGrow: 1,
        width: '100%'
    },
    toolBar: {
        backgroundColor: "#3b657d",
    },
    toolBar2: {
        backgroundColor: "#15959c",
        minHeight: '52px'
    },
    tool: {
        minHeight: '38px !important'
    },
    heading: {
        fontSize: '18px',
        flex: 1,
    },
    avatar: {
        color: '#3b657d',
        marginRight: "8px",
    },
    flex: {
        flex: 1,
    },
    iconButton: {
        color: '#ffffff',
        fontSize: '22px',
        height: '38px'
    },
    button: {
        margin: '4px',
        fontSize: '18px',
    },
    menuItem: {
        '&:focus': {
            backgroundColor: "#3b657d",
            '& $primary, & $icon': {
                color: "#fff",
            },
        },
    },
    breads: {
        minWidth: '32px',
        color: '#fff'
    },
    primary: {},
    icon: {
        margin: '0px'
    },
    content: {
        width: '100%',
        flexGrow: 1,
        backgroundColor: theme.palette.background.default,
        transition: theme.transitions.create('margin', {
            easing: theme.transitions.easing.sharp,
            duration: theme.transitions.duration.leavingScreen,
        }),
        height: 'calc(100% - 56px)'
    },
    'content-right': {
        marginRight: -drawerWidth,
    },
    contentShift: {
        transition: theme.transitions.create('margin', {
            easing: theme.transitions.easing.easeOut,
            duration: theme.transitions.duration.enteringScreen,
        }),
    },
    'contentShift-right': {
        marginRight: 0,
    },
    hide: {
        display: 'none',
    },
    drawerPaper: {
        position: 'relative',
        height: '100%',
    },
    drawerHeader: {
        display: 'flex',
        alignItems: 'center',
        justifyContent: 'flex-end',
        padding: '0 8px',
    },

});
class MFM extends React.Component {
    constructor(props) {
        super(props);
        this.properties = props;
        this.item = [];
        this.tileObj;
        this.state = {
            breadCrumbs: [],
            showList: false,
            anchorEl: null,
            open: false,
        };
    }

    handleDrawer = () => {
        this.setState({open: !this.state.open});
    };

    updateBreadcrumbs(newObj) {
        this.item.push(newObj);
        this.tileObj = newObj;
        this.setState({breadCrumbs: this.item});
    }

    changeView() {
        this.setState({
            showList: !this.state.showList
        })
    }

    handleClick = event => {
        this.setState({anchorEl: event.currentTarget});
    };

    handleClose = () => {
        this.setState({anchorEl: null});
    };

    renderCrumbs() {
        if (this.state.breadCrumbs) {
            return (
                this.state.breadCrumbs.map((item, idx) => {
                    return <span key={item.name + idx}>
                        <Button className={this.properties.classes.breads}>{item.name}</Button>
                        <KeyboardArrowRight style={{verticalAlign: 'middle', color: '#fff'}}/>
                    </span>
                })
            )
        }
    }

    render() {
        const {classes} = this.properties;
        const drawer = (
            <Drawer style={{flexGrow: 1}}
                    type="persistent"
                    classes={{
                        paper: classes.drawerPaper,
                    }}
                    anchor='right'
                    open={this.state.open}>
                <div >
                    <List className={classes.list}> Activity area</List>
                </div>
            </Drawer>
        );

        return (
            <section className={classes.root}>
                <AppBar position="static" className={classes.toolBar}>
                    <Toolbar className={classes.tool}>
                        <img src={logo} alt=""/>
                    </Toolbar>
                    <Toolbar className={classes.toolBar2}>
                        <Grid container>
                            <Grid item sm={2}>
                                <Button className="naehas_button"
                                        onClick={this.handleClick}>
                                    NEW
                                </Button>
                            </Grid>

                            <Grid item sm={8}>
                                {this.renderCrumbs()}
                            </Grid>

                            <Grid item sm={2} style={{textAlign: 'right'}}>
                                <IconButton style={{height: '36px'}} onClick={this.handleDrawer}>
                                    <InfoIcon style={{color: 'white', fontSize: '30px'}}/>
                                </IconButton>
                                <IconButton style={{height: '36px'}} aria-label="view" color="primary"
                                            onClick={() => this.changeView()}>
                                    {this.state.showList ? <ViewList style={{color: 'white', fontSize: '30px'}}/> :
                                        <ViewModule style={{color: 'white', fontSize: '30px'}}/>}

                                </IconButton>
                            </Grid>
                        </Grid>
                    </Toolbar>
                </AppBar>

                <section className="main-container">
                    <Grid container spacing={0} style={{height: '100%', overflowY: 'auto', overflowX: 'hidden'}}
                          className={classNames(classes.content, classes['content-right'], {
                              [classes.contentShift]: this.state.open,
                              [classes['contentShift-right']]: this.state.open,
                          })}>
                        <Grid item sm={3}>
                            <Card className="u-padding-16 left-container">
                                <Tree callbackParent={(newObj) => this.updateBreadcrumbs(newObj)}/>
                            </Card>
                        </Grid>
                        <Grid item sm={6}>
                            <div className="u-padding-16 ">
                                {this.state.showList ? <FileList tile={this.tileObj}/> :
                                    <FileGrid tile={this.tileObj}/>}

                            </div>
                        </Grid>
                        {drawer}
                    </Grid>
                </section>
                <Menu style={{top: '68px'}}
                      id="simple-menu"
                      anchorEl={this.state.anchorEl}
                      open={Boolean(this.state.anchorEl)}
                      onClose={this.handleClose}>
                    <MenuList style={{outline: 0}}>
                        <MenuItem className={classes.menuItem}>
                            <ListItemIcon className={classes.icon}>
                                <CreateNewFolder />
                            </ListItemIcon>
                            <ListItemText classes={{primary: classes.primary}} inset primary="Create New Folder"/>
                        </MenuItem>
                        <MenuItem className={classes.menuItem}>
                            <ListItemIcon className={classes.icon}>
                                <FileUpload />
                            </ListItemIcon>
                            <ListItemText classes={{primary: classes.primary}} inset primary="File Upload"/>
                        </MenuItem>
                        <MenuItem className={classes.menuItem}>
                            <ListItemIcon className={classes.icon}>
                                <CloudUpload />
                            </ListItemIcon>
                            <ListItemText classes={{primary: classes.primary}} inset primary="Folder Upload"/>
                        </MenuItem>
                    </MenuList>
                </Menu>
            </section>
        );
    }

}

MFM.propTypes = {
    classes: PropTypes.object.isRequired,
};

export default withStyles(styles)(MFM);