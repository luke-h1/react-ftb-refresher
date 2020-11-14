import React, { useContext } from 'react';
import PropTypes from 'prop-types';
import { AiTwotoneIdcard } from 'react-icons/ai';
import { Link } from 'react-router-dom';
import AuthContext from '../../context/auth/authContext';
import ContactContext from '../../context/Contact/contactContext';
import { FcLeave } from 'react-icons/fc';
const Navbar = ({ title }) => {
  const contactContext = useContext(ContactContext);
  const authContext = useContext(AuthContext);
  const { isAuthenticated, logout, user } = authContext;
  const { clearContacts } = contactContext;
  const onLogout = () => {
    logout();
    clearContacts();
  };

  const authLinks = (
    <>
      <li>Hello {user && user.name}</li>
      <li>
        <a onClick={onLogout} href="#!">
          Logout
          <FcLeave /> <span className="hide-sm">Logout</span>
        </a>
      </li>
    </>
  );

  const guestLinks = (
    <>
      <li>
        <Link to="/register">Register</Link>
      </li>
      <li>
        <Link to="/login">Login</Link>
      </li>
    </>
  );
  return (
    <>
      <div className="navbar bg-primary">
        <Link to="/" style={{ color: '#fff', textDecoration: 'none' }}>
          <AiTwotoneIdcard style={{ fontSize: '70px' }} />
        </Link>
        <Link to="/" style={{ color: '#fff', textDecoration: 'none' }}>
          <h1>{title}</h1>
        </Link>
        <ul>{isAuthenticated ? authLinks : guestLinks}</ul>
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
