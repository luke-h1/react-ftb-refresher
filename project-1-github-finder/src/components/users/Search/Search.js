import React from "react";
import PropTypes from "prop-types";
export class Search extends React.Component {
  state = {
    text: "",
  };

  static propTypes = {
    searchUsers: PropTypes.func.isRequired,
    clearUsers: PropTypes.func.isRequired,
    showClear: PropTypes.bool.isRequired,
    setAlert: PropTypes.func.isRequired,
  };

  onChange = (e) => this.setState({ [e.target.name]: e.target.value });

  onSubmit = (e) => {
    e.preventDefault();
    if(this.state.text === ''){
      this.props.setAlert('Enter a valid value', 'light')
    }
    this.props.searchUsers(this.state.text);
    this.setState({ text: "" });
  };

  //<form className="form" onSubmit={this.onSubmit.bind(this) }>
  // if onsubmit was not an arrow function

  render() {
    const { clearUsers, showClear } = this.props;
    return (
      <div>
        <form className="form" onSubmit={this.onSubmit}>
          <input
            type="text"
            name="text"
            placeholder="Search Users"
            value={this.state.text}
            onChange={this.onChange}
          />
          <input
            type="submit"
            value="Search"
            className="btn btn-dark btn-block"
          />
        </form>
        {showClear && (
          <button className="btn btn-light btn-block" onClick={clearUsers}>
            Clear
          </button>
        )}
      </div>
    );
  }
}
export default Search;