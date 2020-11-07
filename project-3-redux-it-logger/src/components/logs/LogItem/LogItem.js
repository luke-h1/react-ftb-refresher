import React from 'react';
import PropTypes from 'prop-types';

const LogItem = ({ log }) => {
  return (
    <>
      <li className="collection-item">
        <div>
          <a href="#nothing">{log.message}</a>
        </div>
      </li>
    </>
  );
};

LogItem.propTypes = {
  log: PropTypes.object.isRequired,
};

export default LogItem;
