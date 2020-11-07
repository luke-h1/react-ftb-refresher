import React from 'react';
import PropTypes from 'prop-types';
const LogItem = ({ log }) => {
  return (
    <>
      <li className="collection-item">
        <div>
          <a
            href="#edit-log-modal"
            className={`modal-trigger ${
              log.attention ? 'red-text' : 'blue-text'
            }`}
          >
            {log.message}
          </a>
          <br />
          <span className="gray-text">
            <span className="black-text">ID: {log.id} Last Updated By </span>
            <span className="black-text">{log.tech}</span> on {log.date}
          </span>
          <a href="hello" className="secondary-content">
            <i className="material-icons gray-text">delete</i>
          </a>
        </div>
      </li>
    </>
  );
};

LogItem.propTypes = {
  log: PropTypes.object.isRequired,
};

export default LogItem;
