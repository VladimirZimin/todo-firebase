import React, { Component } from "react";
import { RotatingLines } from "react-loader-spinner";
import { GlobalStyle } from "./GlobalStyle";
import Section from "./components/Section";
import BasicTextField from "./ui/BasicTextField/BasicTextField";
import { receivingData, deleteTask } from "./Services/Services";
import Todos from "./components/Todos";

class App extends Component {
  state = {
    todos: [],
    loading: true,
  };

  componentDidMount() {
    this.fetchedTodos();
  }

  updateTodos = (todos) => {
    this.setState({ todos: todos });
  };

  // updateTodos = (todo) => {
  //   this.setState((prevState) => ({ todos: [...prevState.todos, todo] }));
  // };

  componentDidUpdate(prevProps, prevState) {}

  fetchedTodos = async () => {
    try {
      const todos = await receivingData();
      this.setState({ todos: todos });
    } catch (error) {
      console.log(error);
    } finally {
      this.setState({ loading: false });
    }
  };

  deleteTask = async (id) => {
    await deleteTask(id);
    this.setState((prevState) => ({
      todos: prevState.todos.filter((task) => task.id !== id),
    }));
  };

  render() {
    const { loading, todos } = this.state;

    return (
      <Section>
        <GlobalStyle />
        <BasicTextField updateTodos={this.updateTodos} />

        {loading ? (
          <RotatingLines
            strokeColor="grey"
            strokeWidth="5"
            animationDuration="0.75"
            width="96"
            visible={true}
          />
        ) : (
          <Todos todos={todos} deleteTask={this.deleteTask} />
        )}
      </Section>
    );
  }
}

export default App;
