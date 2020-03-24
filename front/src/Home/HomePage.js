import React from 'react';
import './Home.css';
import { Login } from './Login.js';
import { Register } from './Register.js';
import axios from 'axios';

export class HomePage extends React.Component {
    constructor() {
        super();
        this.state = {
            showRegister: false
        };
    }
    tryLogin(form) {
        //send to backend
        axios.get('http://localhost:8080/user')
        console.log(form);
    }
    gotoRegister() {
        this.setState({ showRegister: true });
    }
    gotoLogin() {
        this.setState({ showRegister: false });
    }
    renderLogin() {
        return <Login onLogin={(form) => this.tryLogin(form)} onRegister={() => this.gotoRegister()} />;
    }
    renderRegister() {
        return <Register />
    }
    render() {
        return (
            <div className="home-page">
                {this.state.showRegister ? this.renderRegister() : this.renderLogin()}
            </div>
        );
    }
}