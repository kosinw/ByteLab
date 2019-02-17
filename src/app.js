import React, { Component } from 'react';
import Navbar from './components/navbar';

import { Switch, Route } from 'react-router';
import Home from './containers/home';
import Code from './containers/code';

class App extends Component {
    render() {
        return (
            <section className="app">
                <Navbar />
                <Switch>
                    <Route exact path="/" component={Home}/>
                    <Route path="/code" component={Code} />
                </Switch>
            </section>
        );
    }    
}

export default App;