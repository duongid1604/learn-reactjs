import React, { useState } from "react";
import PropTypes from "prop-types";
import TodoList from "./components/TodoList";
import TodoForm from "./components/TodoForm";

TodoFeatures.propTypes = {
  // TodoFeatures: PropTypes.array,
};

function TodoFeatures(props) {
  const initTodoList = [
    {
      id: 1,
      title: "Eat",
      status: "new",
    },
    {
      id: 2,
      title: "Drink",
      status: "completed",
    },
    {
      id: 3,
      title: "Study",
      status: "new",
    },
  ];

  const [todoList, setTodoList] = useState(initTodoList);
  const [filterStatus, setFilterStatus] = useState("all");

  const handleTodoClick = (todo, index) => {
    //clone current array to the new one
    const newTodoList = [...todoList];
    // console.log(todo, index);

    //toggle state
    newTodoList[index] = {
      ...newTodoList[index],
      status: newTodoList[index].status === "new" ? "completed" : "new",
    };
    // newTodoList[index] = newTodo;

    //update todo list
    setTodoList(newTodoList);
  };

  const handleShowAllClick = () => {
    setFilterStatus("all");
  };
  const handleShowCompletedClick = () => {
    setFilterStatus("completed");
  };
  const handleShowNewClick = () => {
    setFilterStatus("new");
  };

  const renderTodoList = todoList.filter(
    (todo) => filterStatus === "all" || filterStatus === todo.status
  );

  const handleTodoFormSubmit = (values) => {
    const newTodo = {
      id: todoList.length + 1,
      title: values.title,
      status: "new",
    };

    const newTodoList = [...todoList, newTodo]
    setTodoList(newTodoList )
  };
  return (
    <div>
      <h3>What to do ?</h3>
      <TodoForm onSubmit={handleTodoFormSubmit} />
      <h3>Todo List</h3>
      <TodoList todoList={renderTodoList} onTodoClick={handleTodoClick} />

      <div>
        <button onClick={handleShowAllClick}>Show All</button>
        <button onClick={handleShowCompletedClick}>Show Completed</button>
        <button onClick={handleShowNewClick}>Show New</button>
      </div>
    </div>
  );
}

export default TodoFeatures;
