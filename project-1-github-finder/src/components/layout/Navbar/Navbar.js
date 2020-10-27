import React from "react";
import { FaGithub } from "react-icons/fa";
import PropTypes from "prop-types";
export class Navbar extends React.Component {
  static defaultProps = {
    title: "Github Finder",
  };

  static propTypes = {
    title: PropTypes.string.isRequired,
  };

  render() {
    return (
      <nav className="navbar bg-primary">
        <h1>
          <FaGithub style={{ marginRight: "20px" }} />
          {this.props.title}
        </h1>
      </nav>
    );
  }
}

export default Navbar;
