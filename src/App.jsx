import React, { Component } from 'react';
import Todos from './components/Todos';
import './App.css';

class App extends Component {
  state = {
    todos: [
      {
        id: 1,
        title: 'Take out the trash',
        completed: false,
      },
      {
        id: 2,
        title: 'Dinner with wife',
        completed: true,
      },
      {
        id: 3,
        title: 'Meeting with boss',
        completed: false,
      },
    ],
  };

  handleCompleted = (todo) => {
    console.log(todo.id);
  };

  render() {
    return (
      <div className="App">
        <Todos todos={this.state.todos} onCompleted={this.handleCompleted} />
      </div>
    );
  }
}

export default App;
