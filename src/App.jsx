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
    this.setState((state) => ({
      todos: state.todos.map((item) => {
        if (item.id === todo.id) {
          return { ...todo, completed: !todo.completed };
        }
        return item;
      }),
    }));
  };

  handleDelete = (todo) => {
    this.setState((state) => ({
      todos: state.todos.filter((item) => item.id !== todo.id),
    }));
  };

  render() {
    return (
      <div className="App">
        <Todos
          todos={this.state.todos}
          onCompleted={this.handleCompleted}
          onDelete={this.handleDelete}
        />
      </div>
    );
  }
}

export default App;
