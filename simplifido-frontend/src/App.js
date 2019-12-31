import React from 'react';
import './App.css';
import { BrowserRouter as Router, Route } from 'react-router-dom';
import Navbar from './navbar';
import Login from './login';
import Home from './home'

class App extends React.Component {






  render(){
    return (
      <Router>
        <Route path='/' component={Navbar} />
        <Route exact path='/' component={Home} />
        <Route exact path='/login' component={Login} />
      </Router>
    );
  }
}

export default App;
