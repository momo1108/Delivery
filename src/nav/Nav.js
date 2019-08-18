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
                    <img src="logo.png" width="130px" height="40.44px"/>
                </div>
                <div className = "Navmenu">
                    <div className = "Menubtn">메뉴&nbsp;&nbsp;<i class="fas fa-chevron-right"></i></div>
                    <div className = "Menubtn">이벤트&nbsp;&nbsp;<i class="fas fa-chevron-right"></i></div>
                    <div className = "Signup">회원가입</div>
                    <div className = "Login">로그인</div>{/* 핑크 상자안에 넣어놓음 */}
                </div>
                <div className = "Navsmallmenu">
                    <i className="fas fa-bars"></i>
                </div>
            </div>
        )
    }
}

export default Nav;