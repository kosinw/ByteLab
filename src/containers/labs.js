import React from 'react';

import "../styles/labs.css";

export default class Labs extends React.Component {

  render () {
        const placeholder = ["proj1", "proj2"];

        return (
          <div className = "labs">
            {placeholder.map(x => <div>{x}</div>)}
          </div>
        );
  }
}
