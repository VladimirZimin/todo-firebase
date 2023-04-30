import React from "react";
import BasicCard from "../ui/BasicCard/BasicCard";

const Todos = ({ todos, deleteTask }) => {
  return (
    <ul
      style={{
        display: "flex",
        flexWrap: "wrap",
        gap: "15px",
        marginTop: "25px",
      }}
    >
      {todos.map((todo) => (
        <li key={todo.id}>
          <BasicCard deleteTask={deleteTask} {...todo} />
        </li>
      ))}
    </ul>
  );
};

export default Todos;
