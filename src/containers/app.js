import React from 'react';
import { observer } from 'mobx-react'
import { BrowserRouter, Switch, Route } from 'react-router-dom';
import CodeContainer from './code-container';

import Labs from './labs';
import Home from './home';
import Play from './play';

import Topbar from './topbar'
import '../styles/app.css'

class App extends React.Component {
  render() {
    return (
      <BrowserRouter>
        <section className="app">
          <Topbar/>
          <Switch>
            <Route path="/labs" component={Labs}/>
            <Route exact path="/" component={Home}/>
            <Route path="/code" component={CodeContainer} />            
            <Route path="/play" component={Play} />
          </Switch>
        </section>
      </BrowserRouter>
    );
  }
}

export default observer(App);
