import React, { Component } from 'react';
import CodeEditor from '../components/code-editor'


class Code extends Component {
    render() {
        return (
            <section className="code">
                <CodeEditor />
            </section>
        );
    }
}

export default Code;