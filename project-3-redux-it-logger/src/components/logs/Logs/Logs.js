import React, { useState, useEffect } from 'react';
import LogItem from '../LogItem/LogItem';
const Logs = () => {
  const [logs, setLogs] = useState([]);
  const [loading, setLoading] = useState(false);
  useEffect(() => {
    getLogs();
    // eslint-disable-next-line
  }, []);
  logs.map((log) => <LogItem log={log} key={log.id} />);

  const getLogs = async () => {
    setLoading(true);
    const res = await fetch('http://localhost:5000/logs');
    const data = await res.json();
    console.log(data);
    setLogs(data);
    setLoading(false);
  };
  if (loading) {
    return <h3>Loading</h3>;
  }

  return (
    <>
      <ul className="collection with-header">
        <li className="collection-header">
          <h4 className="center">System Logs</h4>
        </li>
        {!loading && logs.length === 0 ? (
          <p className="center">No Logs To Report...</p>
        ) : (
          logs && logs.map((log) => <LogItem log={log} key={log.id} />)
        )}
      </ul>
    </>
  );
};
export default Logs;
