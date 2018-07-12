import React from "react";
import ReactDOM from "react-dom";
import "./index.css";
import TodoList from "./TodoList";

var destination = document.getElementById("container");

ReactDOM.render(
    <div>
        <h2>Todo App</h2>
        <TodoList/>
    </div>,
    destination
);