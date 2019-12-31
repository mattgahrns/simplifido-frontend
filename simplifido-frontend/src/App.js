import React from 'react';
import './App.css';
import { BrowserRouter as Router, Route } from 'react-router-dom';
import Navbar from './navbar';
import Login from './login';
import Home from './home';
import Signup from './signup';
import NavbarUser from './navbarUser';

class App extends React.Component {

  constructor() {
    super()
    this.state = {
      user: null
    }
  }

  handleLogin = () => {
    this.setState({
      user: true
    });
  }

  handleLogout = () => {
    this.setState({
      user: false
    });
  }

  getUser = () => {
    
  }

  render(){
    return (
      <Router>
    { localStorage.token? 
      <>
        <NavbarUser handleLogout={this.handleLogout}/>
        <Route exact path='/' component={Home} />
      </>
      :
      <>
        <Navbar />
        <Route exact path='/' component={Home} />
        <Route exact path='/signup' render={(props) => <Signup {...props} handleLogin={this.handleLogin} />} />
        <Route exact path='/login' render={(props) => <Login {...props} handleLogin={this.handleLogin} />} />
      </>
    }
    
        
      </Router>
    );
  }
}

export default App;
