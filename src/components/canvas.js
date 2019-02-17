import React from 'react';
import { observer, inject } from 'mobx-react';

import SandboxWorker from '../utils/sandbox'
import WebWorker from '../utils/worker'

class Canvas extends React.Component {
    componentDidMount = () => {
        this.worker = new WebWorker(SandboxWorker);
        this.worker.postMessage({ ctx: null, code: this.props.labs.currentLab.code });
    }

    render() {
        return <canvas />;
    }
}

export default inject(stores => ({ labs: stores.labs }))(observer(Canvas));