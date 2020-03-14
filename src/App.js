import React from 'react';
import PropTypes from 'prop-types';

class App extends React.Component {
  state = {
    count: 0,
  };
  add = () => {
    console.log("add");
  };

  minus = () => {
    console.log("minus");
  };

  render() {
    console.log(this.state);
    return <div>
      <h1>count : {this.state.count}</h1>
      <button onClick={this.add}>Add</button>
      <button onClick={this.minus}>Minus</button>
    </div>
  }
}

export default App;