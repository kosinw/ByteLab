import React, { Component } from 'react';
import { observer } from 'mobx-react';

class CodeEditor extends Component {
    constructor(props) {
        super(props);
        this.ce = React.createRef();
    }

    componentDidMount() {
        
    }

    render() {
        return (
            <input className="code-editor"
                ref={this.ce}
             />
        );
    }
}

export default observer(CodeEditor);