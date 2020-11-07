import React, { useState, useContext } from "react";

import GithubContext from "../../../context/github/githubContext";
import AlertContext from "../../../context/alert/alertContext";
const Search = () => {
  const githubContext = useContext(GithubContext);
  const alertContext = useContext(AlertContext);

  const { setAlert } = alertContext;
  const [text, setText] = useState("");

  const onChange = (e) => setText(e.target.value);

  const onSubmit = (e) => {
    e.preventDefault();
    if (text === "") {
      setAlert("Enter a valid value", "light");
    } else {
      githubContext.searchUsers(text);
      setText("");
    }
  };

  //<form className="form" onSubmit={this.onSubmit.bind(this) }>   // if onsubmit was not an arrow function
  return (
    <div>
      <form className="form" onSubmit={onSubmit}>
        <input
          type="text"
          name="text"
          placeholder="Search Users"
          value={text}
          onChange={onChange}
        />
        <input
          type="submit"
          value="Search"
          className="btn btn-dark btn-block"
        />
      </form>
      {githubContext.users.length > 0 && (
        <button
          className="btn btn-light btn-block"
          onClick={githubContext.clearUsers}
        >
          Clear
        </button>
      )}
    </div>
  );
};
export default Search;
