import React from 'react';
import './App.css';
import { BrowserRouter as Router, Route } from 'react-router-dom';
import Navbar from './navbar';
import Login from './login';
import Home from './home';
import Signup from './signup';
import { api } from './services/api' 
import NavbarUser from './navbarUser';
import Account from './account';

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

  componentDidMount() {
    if (localStorage.getItem("token") != null)
    api.auth.getCurrentUser().then((data) => {
      if (!data.error) {
        this.setState({
          user: data
        })
      } else {
        this.setState({
          user: null
        })
      }
    })
  }

  // getUser = () => {
  //   //fetch to the cuurrent_user route
  // }

  render(){
    return (
      <Router>
    { this.state.user && localStorage.getItem("token") ? 
      <>
        <NavbarUser handleLogout={this.handleLogout}/>
        <Route exact path='/' component={Home} />
        <Route exact path='/account' component={Account} />
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
