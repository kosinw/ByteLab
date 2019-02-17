import React from 'react';
import { observer, inject } from 'mobx-react';

import createAPI from '../utils/canvas.api';

const CANVAS_SIZE = 256;
const FPS = 60;
const TIME_PER_FRAME = 1000 / FPS;

const getFramesPerTime = time => FPS * time;

class Canvas extends React.Component {
    
    constructor(props) {
        super(props);
        this.canvasRef = React.createRef();

        this.shadows = new Set(['document'])
        this.blacklist = new Set(['eval', 'alert'])        
    }

    createGlobals() {
        let globals;

        globals = {
            ...createAPI({
                ctx: this.ctx,
                width: CANVAS_SIZE,
                height: CANVAS_SIZE
            }),
            CANVAS_SIZE,
            WIDTH: CANVAS_SIZE,
            HEIGHT: CANVAS_SIZE,
            draw: null,
            init: null,
            update: null,
            BG: 3
        };

        Object.keys(globals).forEach(key => {
            window[key] = globals[key]
        });
    }

    evalCode() {
        const { currentLab } = this.props.labs;

        const { shadows } = this;

        const shadowString = `var ${[...shadows].join(',')}`
        
        this.createGlobals();

        const skeleton = `
            draw = () => {};
            update = () => {};
            init = () => {};
        `;
        
        // eslint-disable-next-line no-eval
        eval(`
            ${shadowString}

            eval(skeleton)

            eval(currentLab.code)

            window.draw = draw;
            window.update = update;
            window.init = init;
        `);        

        this.draw = window.draw;
        this.update = window.update;
        this.init = window.init;
    }

    setupGameLoop() {        
        this.gameLoop = window.requestAnimationFrame(this.onFrame);
    }

    cancelGameLoop() {
        window.cancelAnimationFrame(this.gameLoop);
    }

    onFrame = (timestamp) => {
        this.update();
        this.draw();
        this.gameLoop = window.requestAnimationFrame(this.onFrame);
    }

    componentWillUnmount = () => {
        this.cancelGameLoop();
    }

    componentDidMount = () => {        
        this.ctx = this.canvasRef.current.getContext('2d');
        this.evalCode();
        this.init();
        this.setupGameLoop();
    }

    render() {
        return <canvas className="canvas" width="256" height="256" ref={this.canvasRef} />;
    }
}

export default inject(stores => ({ labs: stores.labs }))(observer(Canvas));