import React, {Component} from 'react';
import './Signin.css';

class Signin extends Component {
    constructor(props){
        super(props);
    }

    render(){
        return(
            <div className = "Signin">
                <div className = "Signinbox">
                    <span>환영합니다!</span>
                    <form>
                        ID
                        <input type="text" placeholder="abc123@google.com" />
                        Password
                        <input type="password" placeholder="10자리 이상" />
                        <input type="button" />
                    </form>
                </div>
            </div>
        )
    }
}

export default Signin;