import React from 'react';

import "../styles/labs.css";

class Labs extends React.Component {
  render () {
        const placeholder = ["proj1", "proj2"];

        return (
          <div>
            {placeholder.map(x => <div>{x}</div>)}
          </div>
        );
  }
}
