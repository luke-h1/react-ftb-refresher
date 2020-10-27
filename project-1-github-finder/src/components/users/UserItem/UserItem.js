import React from "react";
import PropTypes from 'prop-types';
const UserItem = ({user: {html_url, avatar_url, login}}) => {
  return (
    <div className="card text-center">
      <img
        src={avatar_url}
        alt="Github Profile"
        className="round-img"
        style={{ width: "60px" }}
      />
      <h3>{login}</h3>
      <div>
        <a
          href={html_url}
          className="btn btn-dark btn-sm my-1"
          target="_blank"
          rel="noopener noreferrer"
        >
          Github Profile
        </a>
      </div>
    </div>
  );
};

UserItem.propTypes = { 
  user: PropTypes.object.isRequired,

}


export default UserItem;
