import React from 'react';
import PropTypes from 'prop-types';
import { AiTwotoneIdcard } from 'react-icons/ai';
const Navbar = ({ title }) => {
  return (
    <>
      <div className="navbar bg-primary">
        <AiTwotoneIdcard style={{ fontSize: '70px' }} />
        <h1>{title}</h1>
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
