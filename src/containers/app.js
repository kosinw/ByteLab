import React, { Component } from 'react';
import { BrowserRouter, Switch, Route } from 'react-router-dom';
import { Provider, observer } from 'mobx-react';
import stores from '../lib/root.store';

import Landing from './landing';
import Navbar from '../components/Navbar';


class App extends Component {
  render() {
    return (
      <Provider {...stores}>
        <BrowserRouter>
          <section className="app">
            <Navbar />
            <Switch>
              <Route exact path="/" component={Landing} />
            </Switch>
          </section>
        </BrowserRouter>
      </Provider>
    );
  }
}

export default observer(App);
