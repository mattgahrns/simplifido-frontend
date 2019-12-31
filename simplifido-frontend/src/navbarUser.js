import React from 'react';
import { NavLink } from 'react-router-dom';

const link = {
    width: '100px',
    padding: '12px',
    margin: '0 6px 6px',
    background: 'blue',
    textDecoration: 'none',
    color: 'white',
}

const NavbarUser = (props) => {
  return(
  <div>
    <NavLink
      to="/"
      exact
      style={link}
      activeStyle={{
        background: 'darkblue'
      }}
    >Home</NavLink>
    <NavLink
      to="/account"
      exact
      style={link}
      activeStyle={{
        background: 'darkblue'
      }}
    >Account</NavLink>
    <NavLink
      to='/'
      onClick={() => {localStorage.clear();
      props.handleLogout();}}
      style={link}
      activeStyle={{
        background: 'blue'
      }}
    >Logout</NavLink>
  </div>);
}

export default NavbarUser;