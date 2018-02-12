import React from 'react';
import ReactDOM from 'react-dom';
import MuiThemeProvider from 'material-ui/styles/MuiThemeProvider';
import './assets/css/style.css'
import './assets/css/context-menu.css'
import './assets/css/font.css'

import MerlinFileManager from './components/merLinFileManager'
//import PersistentDrawer from './components/drawer'

// const express = require('express');
// // debugger
// console.log(express,234)
// const path = require('path');
// const app = express();
//
// app.use(express.static(path.join(__dirname, 'build')));
//
// app.get('/', function (req, res) {
//     res.sendFile(path.join(__dirname, 'build', 'index.html'));
// });


export default class App extends React.Component {
    render() {
        return (
            <MuiThemeProvider>
                {/*<PersistentDrawer />*/}
                <MerlinFileManager/>
            </MuiThemeProvider>
        )
    }
}

ReactDOM.render(<App/>, document.getElementById('treeView'));