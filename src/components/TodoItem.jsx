import React, { PureComponent } from 'react';
import PropTypes from 'prop-types';

class TodoItem extends PureComponent {
  getStyle = () => {
    return {
      backgroundColor: '#f4f4f4',
      padding: '10px',
      borderBottom: '1px #ccc dotted',
      textDecoration: this.props.todo.completed ? 'line-through' : 'none',
    };
  };

  handleCompleted = () => {
    this.props.onCompleted(this.props.todo);
  };

  // handleDelete = () => {
  //   this.props.onDelete(this.props.todo);
  // };

  render() {
    console.log('TodoItem');
    const { title } = this.props.todo;
    return (
      <div style={this.getStyle()}>
        <p>
          <input type="checkbox" onChange={this.handleCompleted} /> {title}
          <button
            style={btnStyle}
            onClick={this.props.onDelete.bind(this, this.props.todo)}
          >
            x
          </button>
        </p>
      </div>
    );
  }
}

TodoItem.propTypes = {
  todo: PropTypes.object.isRequired,
};

const btnStyle = {
  background: '#ff0000',
  color: '#fff',
  padding: '5px 10px',
  border: 'none',
  borderRadius: '50%',
  cursor: 'pointer',
  float: 'right',
};

export default TodoItem;
