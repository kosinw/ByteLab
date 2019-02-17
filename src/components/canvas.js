import React from 'react';
import { observer, inject } from 'mobx-react';



class Canvas extends React.Component {
    
    constructor(props) {
        super(props);
        this.canvasRef = React.createRef();

        this.shadows = new Set(['document'])
        this.blacklist = new Set(['eval', 'alert'])        
    }

    evalCode() {
        const { currentLab } = this.props.labs;

        const { shadows } = this;

        const shadowString = `var ${[...shadows].join(',')}`

        const skeleton = `
            let draw = () => {};
            let update = () => {};
            let init = () => {};
        `

        eval(`
            ${shadowString}

            eval(skeleton)

            eval(currentLab.code)
        `)
    }

    componentDidMount = () => {
        this.evalCode();
        this.ctx = this.canvasRef.current.getContext('2d');
    }

    componentDidUpate = () => {
        this.evalCode();
    }

    render() {
        return <canvas className="canvas" width="256" height="256" ref={this.canvasRef} />;
    }
}

export default inject(stores => ({ labs: stores.labs }))(observer(Canvas));