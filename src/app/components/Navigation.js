import React from 'react';
import { NavLink } from 'react-router-dom';

const Navigation = (props) => {
  const { username } = props;

  return (
    <nav>
      <div>
        <NavLink exact to='/'>Welcome, {username}</NavLink>
        <NavLink to='/top-tracks'>Top Tracks</NavLink>
        <NavLink to='/top-artists'>Top Artists</NavLink>
      </div>
      <div className='log-out'>
        <a href='/log-out'>Log Out</a>
      </div>
    </nav>
  )
};

export default Navigation;
