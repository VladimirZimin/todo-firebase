import React, { Component } from "react";
import Box from "@mui/material/Box";
import TextField from "@mui/material/TextField";
import BasicButton from "../BasicButton/BasicButton";
import { sendNewTask, receivingData } from "../../Services/Services";

export default class BasicTextField extends Component {
  state = { task: "" };

  handleSubmit = async (evt) => {
    evt.preventDefault();

    console.log(this.state);
    if (this.state.task !== "") {
      await sendNewTask({
        ...this.state,
        timeStamp: new Date().toDateString(),
      });
      const allTodos = await receivingData();
      this.props.updateTodos(allTodos);
    }
    this.setState({ task: "" });
  };

  // handleSubmit = async (evt) => {
  //   evt.preventDefault();

  //   if (this.state.task.trim()) {
  //     const response = await sendNewTask({
  //       ...this.state,
  //       timeStamp: new Date().toDateString(),
  //     });
  //     console.log("response:", response);

  //     if (response.statusText === "OK") {
  //       const id = response.data.name;
  //       this.props.updateTodos({
  //         ...this.state,
  //         timeStamp: new Date().toDateString(),
  //         id,
  //       });
  //     }
  //   }
  //   this.setState({ task: "" });
  // };

  handleChange = ({ target: { name, value } }) => {
    this.setState({ [name]: value });
  };

  render() {
    const { task } = this.state;

    return (
      <Box
        component="form"
        sx={{ display: "flex", "& > :not(style)": { m: 0, width: "400px" } }}
        noValidate
        autoComplete="off"
        onSubmit={this.handleSubmit}
      >
        <TextField
          id="outlined-basic"
          label="Task"
          variant="outlined"
          onChange={this.handleChange}
          name="task"
          value={task}
        />
        <BasicButton type="submit" title="send" color="error" />
      </Box>
    );
  }
}
