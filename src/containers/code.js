import React, { Component } from 'react';
import { observer } from 'mobx-react';

class Code extends Component {
    constructor(props) {
        super(props);
        this.codeEditorRef = React.createRef();
    }

    componentDidMount() {
    }

    render() {
        return (
            <section className="code">
                <input className="code-editor" 
                    ref={this.codeEditorRef} />
            </section>
        );
    }
}

export default observer(Code);