import React from 'react';
import { Link } from 'react-router-dom';

const navConfig = [
  { path: '/', link: 'Home' },
  { path: '/users', link: 'Users' },
  { path: '/posts', link: 'Posts' },
  { path: '/todos', link: 'ToDos' },
];

const Navbar = () => {
  return (
    <nav className='navbar'>
      <ul className='navbar-list'>
        {navConfig.map((i, idx) => {
          return (
            <Link
              key={idx}
              to={i.path}
              children={i.link}
              className='navbar-link'
            />
          );
        })}
      </ul>
    </nav>
  );
};

export default Navbar;
