import React from 'react';
import PropTypes from 'prop-types';
import { connect } from 'react-redux';
import { deleteLog, setCurrent } from '../../../actions/logActions';
import M from 'materialize-css/dist/js/materialize.min.js';
const LogItem = ({ log, deleteLog, setCurrent }) => {
  const onDelete = () => {
    deleteLog(log.id);
    M.toast({ html: 'Log Deleted' });
  };
  return (
    <>
      <li className="collection-item">
        <div>
          <a
            href="#edit-log-modal"
            className={`modal-trigger ${
              log.attention ? 'red-text' : 'blue-text'
            }`}
            onClick={() => setCurrent(log)}
          >
            {log.message}
          </a>
          <br />
          <span className="gray-text">
            <span className="black-text">ID: {log.id} Last Updated By </span>
            <span className="black-text">{log.tech}</span> on {log.date}
          </span>
          <a href="#!" onClick={onDelete} className="secondary-content">
            {' '}
            <i className="material-icons gray-text">delete</i>
          </a>
        </div>
      </li>
    </>
  );
};

LogItem.propTypes = {
  log: PropTypes.object.isRequired,
  deleteLog: PropTypes.func.isRequired,
  setCurrent: PropTypes.func.isRequired,
};

export default connect(null, { deleteLog, setCurrent })(LogItem);
