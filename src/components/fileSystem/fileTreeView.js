import React from 'react';
import FolderIcon from 'material-ui-icons/Folder';
import Work from 'material-ui-icons/Work';
import FolderShared from 'material-ui-icons/FolderShared';
import data from '../../common/json/fileList'

export default class Tree extends React.Component {
    constructor(props) {
        super(props);

        this.state = {
            treeData: [],
            isLoading: false,
            fileList: []
        };

    }

    componentWillMount() {
        //this.setState({isLoading: true});
        this.setState({treeData: data.treeData, isLoading: false})

    }

    //called when file list lis clicked
    onClickHandler = (data, e) => {
        e.stopPropagation();
        let parent = e.target.parentElement;
        let classList = parent.classList;
        if (classList.contains("open")) {
            classList.remove('open');
            let opensubs = parent.querySelectorAll(':scope .open');
            for (let i = 0; i < opensubs.length; i++) {
                opensubs[i].classList.remove('open');
            }
        } else {
            classList.add('open');
        }
        this.setState({fileList: data.children});
        this.props.callbackParent(data);
    }


    createTree = (key) => {
        if (key.children.length) {
            return (
                <ul className="u-padding-left-12">
                    {
                        (key.children).map((child, index) => {
                            let isFolder = child.children.length ? true : false;
                            if (isFolder) {
                                return <li key={index} onClick={(e) => {
                                    this.onClickHandler(child, e)
                                }}>
                                    <FolderIcon className="icon-class"></FolderIcon>
                                    <a href="#">{child.name}</a>
                                    {this.createTree(child)}
                                </li>
                            }
                        })
                    }
                </ul>
            )
        }

    }

    render() {
        const {treeData, isLoading} = this.state;

        if (isLoading) {
            return <p>Loading ...</p>;
        }
        console.log(treeData,32)
        return (
            <div style={{height: 400}}>
                <ul className="tree">
                    {
                        (treeData).map((key, index) => {

                                return <li key={index}
                                           onClick={(e) => {
                                               this.onClickHandler(key, e)
                                           }}>
                                    {key.name == 'Standard' && <FolderIcon className="main-folder"></FolderIcon>}
                                    {key.name == 'Shared Content' && <FolderShared className="main-folder"></FolderShared>}
                                    {key.name == 'Project Content' && <Work className="main-folder"></Work>}
                                    {key.name == 'Naehas Creative Templates' && <FolderIcon className="main-folder"></FolderIcon>}
                                    <a href="#">{key.name}</a>
                                    {this.createTree(key)}
                                </li>
                            
                        })
                    }
                </ul>
            </div>
        );
    }
}

