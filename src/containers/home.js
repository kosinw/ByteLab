import React from "react";

import BeegBeegYoshi from '../assets/heroimage.png';
import '../styles/home.css';

class Home extends React.Component {
    render() {
        return (
            <div className="home">
              <h3 className ="home__title">ByteLab</h3>
                <p className = "text__block">Welcome to ByteLab! This is a Javascript-based
                toolset designed to help beginner coders get
                hands-on game making experience. Sign up or log in to start working!</p>
                <img src={BeegBeegYoshi}/>
            </div>
        );
    }
}

export default Home;
