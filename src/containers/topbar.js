import React from 'react';

import { Link } from 'react-router-dom';
import '../styles/topbar.css';

class Topbar extends React.Component {
    render() {
        return (
            <nav className="topbar">
                <ul className="topbar__list">
                    <li><Link to="/">ByteLab</Link></li>
                    <li><Link to="/labs">Labs</Link></li>
                    <li><Link to="/code">Code</Link></li>
                    <li><Link to="/sprites">Sprites</Link></li>
                    <li><Link to="/maps">Maps</Link></li>
                    <li><Link to="/play">Play</Link></li>
                </ul>
            </nav>
        );
    }
}

export default Topbar;
