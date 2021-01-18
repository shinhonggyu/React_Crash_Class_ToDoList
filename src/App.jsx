import React, { Component } from 'react';
import Todos from './components/Todos';
import './App.css';
import Header from './components/layout/Header';
import AddToDo from './components/AddToDo';

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
        completed: false,
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

  handleAdd = (title) => {
    this.setState((state) => ({
      todos: [...state.todos, { id: Date.now(), title, completed: false }],
    }));
  };

  render() {
    return (
      <div className="App">
        <div className="container">
          <Header />
          <AddToDo onAdd={this.handleAdd} />
          <Todos
            todos={this.state.todos}
            onCompleted={this.handleCompleted}
            onDelete={this.handleDelete}
          />
        </div>
      </div>
    );
  }
}

export default App;
