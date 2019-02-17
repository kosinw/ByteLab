import React from 'react';
import { observer, inject } from 'mobx-react';

class Canvas extends React.Component {
    render() {
        return (
            <canvas
                
             />
        );
    }
}

export default inject(stores => ({ labs: stores.labs }))(observer(Canvas));