import React from "react";

import '../styles/home.css';

class Home extends React.Component {
    render() {
        return (
            <div className="home">
              <h3 className ="home__title">ByteLab</h3>
              <p id = "textBlock">Welcome to ByteLab! This is a Python-based toolset designed to help beginner coders get
                hands-on game making experience. Sign up or log in to start working!</p>
            </div>
        );
    }
}

export default Home;
