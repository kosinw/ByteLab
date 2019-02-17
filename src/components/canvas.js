import React from 'react';
import { observer, inject } from 'mobx-react';

import createAPI from '../utils/canvas.api';

const CANVAS_SIZE = 256;

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
            draw: null,
            init: null,
            update: null
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
            let draw = () => {};
            let update = () => {};
            let init = () => {};
        `;
        
        eval(`
            ${shadowString}

            eval(skeleton)

            eval(currentLab.code)

            window.draw = draw;
            window.update = update;
            window.init = init;
        `);        
    }

    componentDidMount = () => {        
        this.ctx = this.canvasRef.current.getContext('2d');
        this.evalCode();
    }

    render() {
        return <canvas className="canvas" width="256" height="256" ref={this.canvasRef} />;
    }
}

export default inject(stores => ({ labs: stores.labs }))(observer(Canvas));