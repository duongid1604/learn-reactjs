import React from "react";
import PropTypes from "prop-types";
import TodoList from "./components/TodoList";

// TodoFeatures.propTypes = {
//   TodoFeatures: PropTypes.array,
// };

function TodoFeatures(props) {
  const todoList = [
    {
      id: 1,
      title: "Eat",
    },
    {
      id: 2,
      title: "Drink",
    },
    {
      id: 3,
      title: "Study",
    },
  ]

  return (
    <div>
      <h3>Todo List</h3>
      <TodoList todoList={todoList} />
    </div>
  )
}

export default TodoFeatures;
