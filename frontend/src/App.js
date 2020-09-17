import React, { Component } from "react";
import axios from "axios";
import "./App.css";

class App extends Component {
  state = {
    todos: [],
  };

  async componentDidMount() {
    const apiUrl = "http://127.0.0.1:8000/api/";
    axios.get(apiUrl).then((res) => {
      this.setState({ todos: res.data });
    });
  }

  render() {
    return (
      <div>
        {this.state.todos.map((todo) => (
          <div key={todo.id}>
            <h1>{todo.title}</h1>
            <span>{todo.description}</span>
          </div>
        ))}
      </div>
    );
  }
}

export default App
