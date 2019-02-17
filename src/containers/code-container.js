import React from 'react';
import { observer, inject } from 'mobx-react';

import { highlight, languages } from 'prismjs/components/prism-core';
import 'prismjs/components/prism-python';
import Editor from 'react-simple-code-editor';

class CodeContainer extends React.Component {
    state = {code: ''}

    onTextUpdate = text => {
        this.props.labs.currentLab.code = text;
    }

    render() {
        return (
            <section className="code-container">
            <Editor
                className="code-container__editor"
                value={this.props.labs.currentLab.code}
                highlight={code => highlight(code, languages.python)}
                padding={10}
                onValueChange={this.onTextUpdate}
                style={{
                    fontSize: 12,
                }}
            />
            </section>
        );
    }
}

export default inject(stores => ({ labs: stores.labs }))(observer(CodeContainer));