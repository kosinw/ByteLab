import React from 'react';

import "../styles/labs.css";

class Labs extends React.Component {
  onLabClicked() {
    //change which lab to look at
  }

  render () {
        //const placeholder = ["proj1", "proj2", "proj3", "proj1", "proj2", "proj3", "proj1", "proj2", "proj3", "proj1", "proj2", "proj3",];

        return (
          <div>
            <h3 className = "labs__title">Labs</h3>
            <button className="labs__new_lab">New Lab</button>
            <button className="labs__save_lab">Save Lab</button>
            <div className = "labs">
              {/* {placeholder.map(x => <button className = "projects" onClick={this.onLabClicked} >{x}</button>)} */}
            </div>
          </div>
        );
  }
}

export default Labs;