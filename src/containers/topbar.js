import React from 'react';

import { Link, withRouter } from 'react-router-dom';
import '../styles/topbar.css';

class Topbar extends React.Component {
    onAccountClicked() {
      //dropdown this bitch
    }
    <script src="https://apis.google.com/js/platform.js" async defer></script>

    render() {
        return (
            <nav className="topbar">
                <ul className="topbar__list">
                    <li><Link to="/" className={this.props.location.pathname === '/' ? 'selected' : ''}>ByteLab</Link></li>
                    <li><Link to="/labs" className={this.props.location.pathname === '/labs' ? 'selected' : ''}>Labs</Link></li>
                    <li><Link to="/code" className={this.props.location.pathname === '/code' ? 'selected' : ''}>Code</Link></li>
                    <li><Link to="/sprites" clas1sName={this.props.location.pathname === '/sprites' ? 'selected' : ''}>Sprites</Link></li>
                    <li><Link to="/maps" className={this.props.location.pathname === '/maps' ? 'selected' : ''}>Maps</Link></li>
                    <li><Link to="/play" className={this.props.location.pathname === '/play' ? 'selected' : ''}>Play</Link></li>
                    <li onClick={this.onAccountClicked}>Sign In</li>
                </ul>
            </nav>
        );
    }
}

export default withRouter(Topbar);
