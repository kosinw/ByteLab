import React from 'react';

import "../styles/labs.css";

export default class Labs extends React.Component {
  onLabClicked() {
    //change which lab to look at
  }

  render () {
        const placeholder = ["proj1", "proj2", "proj3", "proj1", "proj2", "proj3", "proj1", "proj2", "proj3", "proj1", "proj2", "proj3",];

        return (
          <div>
            <h3 className = "labs__title">Labs</h3>
            <div className = "labs">
              {placeholder.map(x => <button className = "projects" onClick={this.onLabClicked} >{x}</button>)}
            </div>
          </div>
        );
  }
}
