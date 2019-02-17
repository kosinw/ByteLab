import React from 'react';

import Canvas from '../components/canvas'
import '../styles/play.css';

class Play extends React.Component {
    render() {
        return (
            <section className="play">
                <Canvas />
            </section>
        );
    }
}

export default Play;