import React, {Component} from 'react';

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
                <div className = "Navlogo"></div>
                <div className = "Navmenu">
                    
                </div>
            </div>
        )
    }
}

export default Nav;