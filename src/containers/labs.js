import React from 'react';

import "../styles/labs.css";

export default class Labs extends React.Component {

  render () {
        const placeholder = ["proj1", "proj2"];

        return (
          <div>
            {placeholder.map(x => <div id = "labbs">{x}</div>)}
          </div>
        );
  }
}
