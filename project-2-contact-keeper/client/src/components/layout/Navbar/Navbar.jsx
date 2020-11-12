import React from 'react';
import PropTypes from 'prop-types';
import { AiTwotoneIdcard } from 'react-icons/ai';
import { Link } from 'react-router-dom';
const Navbar = ({ title }) => {
  return (
    <>
      <div className="navbar bg-primary">
        <Link to="/" style={{ color: '#fff', textDecoration: 'none' }}>
          <AiTwotoneIdcard style={{ fontSize: '70px' }} />
        </Link>
        <Link to="/" style={{ color: '#fff', textDecoration: 'none' }}>
          <h1>{title}</h1>
        </Link>
        <ul>
          <li>
            <Link to="/">Home</Link>
          </li>
          <li>
            <Link to="/about">About</Link>
          </li>
        </ul>
      </div>
    </>
  );
};

Navbar.defaultProps = {
  title: 'Contact Keeper',
};

Navbar.propTypes = {
  title: PropTypes.string.isRequired,
};

export default Navbar;
