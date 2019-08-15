import React, {Component} from 'react';
import './Nav.css';

class Nav extends Component {
    constructor(props){
        super(props);
        this.state = {
            menuclick: false
        }
    }

    render(){
        return(
            <div className = "Navbar">
                <div className = "Navlogo">
                    <img src="logo.png" width="100px"/>
                </div>
                <div className = "Navmenu">
                    b
                </div>
            </div>
        )
    }
}

export default Nav;