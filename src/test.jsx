import React, { Component } from 'react';

class Test extends Component {
  state = {
    count: 0,
  };

  render() {
    return (
      <>
        <span>{this.state.count}</span>
        <button
          onClick={() => {
            this.setState((state) => ({
              count: state.count + 1,
            }));
          }}
        >
          Click
        </button>
      </>
    );
  }
}

export default Test;
