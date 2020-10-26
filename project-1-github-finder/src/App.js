import React from 'react';
import './App.css';

class App extends React.Component {
  render() {
    const name = 'Luke';
    const loading = true;
    // if (loading) {
    //   return <h1>Loading</h1>;
    // }
    return (
      <div className='App'>
        {loading ? <h1>Loading</h1> : <h1>hello {name}</h1>}
      </div>
    );
  }
}

export default App;
// on component, state & props lession (very start)