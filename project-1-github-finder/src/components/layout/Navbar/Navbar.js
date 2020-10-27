import React from "react";
import { FaGithub } from "react-icons/fa";
import PropTypes from "prop-types";
const Navbar = ({ title }) => {
  return (
    <nav className="navbar bg-primary">
      <h1>
        <FaGithub style={{ marginRight: "20px" }} />
        {title}
      </h1>
    </nav>
  );
};

Navbar.defaultProps = {
  title: "Github Finder",
};

Navbar.propTypes = {
  title: PropTypes.string.isRequired,
};

export default Navbar;
