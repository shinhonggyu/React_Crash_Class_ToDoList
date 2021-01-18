import React, { Component } from 'react';

class AddToDo extends Component {
  inputRef = React.createRef();
  formRef = React.createRef();

  onSubmit = (event) => {
    event.preventDefault();
    const title = this.inputRef.current.value;
    title && this.props.onAdd(title);
    this.formRef.current.reset();
  };

  render() {
    return (
      <form
        ref={this.formRef}
        style={{ display: 'flex' }}
        onSubmit={this.onSubmit}
      >
        <input
          ref={this.inputRef}
          type="text"
          name="title"
          placeholder="Add Todo..."
          style={{ flex: '10', padding: '5px' }}
        />
        <input
          type="submit"
          value="Submit"
          className="btn"
          style={{ flex: '1' }}
        />
      </form>
    );
  }
}

export default AddToDo;
