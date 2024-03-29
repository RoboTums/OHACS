import React, { Component } from 'react';
import Navbar from './components/navbar'
import { Route, BrowserRouter, Switch } from 'react-router-dom'
import Home from './components/home'
import Post from './components/post'

class App extends Component {
  render() {
    return (
      <BrowserRouter>
        <div className="App">
          <Navbar />
          <Switch>
            <Route exact path='/' component={Home}/>
            
            <Route path='/:post_id' component={Post} />
          </Switch>
        </div>
      </BrowserRouter>
    );
  }
}

export default App;