import React, { useState, useEffect } from "react";

export const TodoContext = React.createContext({});

export const TodoProvider = (props) => {
  const [todos, setTodos] = useState([]);
  const [todoIndex, setTodoIndex] = useState(-1);


  function addTodo(todo) {
    if (!todo.topic) return alert("Topic field missing");
    if (!todo.description) return alert("Description field missing");
    setTodos([...todos, todo]);
    localStorage.setItem('todos', JSON.stringify([...todos, todo]))
  }
  function removeTodo(i) {
    const newTodos = todos.filter((x, index) => index !== i)
    // eslint-disable-next-line no-restricted-globals
    confirm(
      `Do you really want to remove this ${todos[i].topic} task from your list?`
    ) && setTodos(newTodos);
  
    localStorage.setItem('todos', JSON.stringify(newTodos))
  }
  function editTodo(todo, i) {
    if (!todo.topic) return alert("Topic field missing");
    if (!todo.description) return alert("Description field missing");
    const _todos = todos;
    _todos[i] = todo;
    setTodos(_todos);
    localStorage.setItem('todos', JSON.stringify(_todos))
  }

  useEffect(()=>{
      const todoStorage = localStorage.getItem('todos')
      if(todoStorage && todoStorage !== "[]"){
          setTodos(JSON.parse(todoStorage))
      }else{
          setTodos([])
      }
  },[])

  return (
    <TodoContext.Provider
      value={{ todos, todoIndex, setTodos, setTodoIndex, addTodo, removeTodo, editTodo }}
    >
      {props.children}
    </TodoContext.Provider>
  );
};
