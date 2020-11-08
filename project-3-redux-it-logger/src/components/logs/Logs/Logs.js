import React, { useEffect } from 'react';
import { connect } from 'react-redux';
import LogItem from '../LogItem/LogItem';
import Preloader from '../../layout/PreLoader/PreLoader';
import PropTypes from 'prop-types';
import { getLogs } from '../../../actions/logActions';
const Logs = ({ log: { logs, loading }, getLogs }) => {
  useEffect(() => {
    getLogs();
    // eslint-disable-next-line
  }, []);
  // not filling logs state....
  if (loading || logs === null) {
    return <Preloader />;
  }

  return (
    <>
      <ul className="collection with-header">
        <li className="collection-header">
          <h4 className="center">System Logs</h4>
        </li>
        {!loading || logs.length === 0 ? (
          <p className="center">No Logs To Report...</p>
        ) : (
          logs.map((log) => <LogItem log={log} key={log.id} />)
        )}
      </ul>
    </>
  );
};

Logs.propTypes = {
  log: PropTypes.object.isRequired,
  getLogs: PropTypes.func.isRequired,
};

const mapStateToProps = (state) => ({
  log: state.log,
});

export default connect(mapStateToProps, { getLogs })(Logs);
