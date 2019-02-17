import React from 'react';
import { observer, inject } from 'mobx-react';

class Account extends React.Component {
    constructor(props) {
        super(props);
    }

    onAccountClicked = () => {
        this.props.login.signInWithGoogle();
    }

    signInButton = () => (
        <li onClick={this.onAccountClicked}><a href="#">Sign In</a></li>
    );

    loggedIn = username => (
        <li className="logged-in">Signed in as {username}</li>
    );

    render() {
        const { currentUser } = this.props.login;

        if (!!currentUser) {
            return this.loggedIn(currentUser.email);
        } 
        
        return this.signInButton();
    }
}

export default inject(stores => ({ login: stores.login }))(observer(Account));