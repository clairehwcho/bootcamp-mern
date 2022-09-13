// We are importing React, which is one big object, and then destructuring the useState key from the react object. So the react has key-value paires.
import React, { useState } from "react";
import './App.css';
import Todo from "./components/Todo";

function App () {
  /*
  Below array destructure syntax is equivalent to:
  const newTodoStateArr = useState("");
  const newTodo = newTodoStateArr[0];
  const setNewTodo = newTodoStateArr[1];
  */
  const [newTodo, setNewTodo] = useState("");
  const [todos, setTodos] = useState([]);

  const handleNewTodoSubmit = (e) => {
    // This prevents refreshing the page.
    e.preventDefault();

    // This prevents adding an empty element when nothing is put in the input box.
    if (newTodo.length === 0) {
      return;
    }

    // This changes the data structure of todo item from a string to an object or a dictionary of key-value pairs.
    const todoItem = {
      text: newTodo,
      complete: false
    }

    // setTodos and pass in a brand new array containing all current todos plus 1 more.
    setTodos([...todos, todoItem])
    setNewTodo("")
  };

  const handleTodoDelete = (deleteIdx) => {
    const filteredTodos = todos.filter((_todo, i) => {
      return i !== deleteIdx;
    });

    setTodos(filteredTodos);
  }

  const handleToggleComplete = (idx) => {
    const updatedTodos = todos.map((todo, i) => {
      if (idx === i) {
        todo.complete = !todo.complete;

        // To avoid mutating the todo directly, do this:
        // if (idx == i) {
        //   const updatedTodo = { ...todo, complete: !todo.complete };
        //   return updatedTodo;
      }
      return todo;
    });

    setTodos(updatedTodos);
  }



  return (
    <div stlye={{ textAlign: "center" }}>
      <form onSubmit={(e) => {
        handleNewTodoSubmit(e);
      }}>
        <input onChange={(e) => {
          setNewTodo(e.target.value);
        }} type="text" value={newTodo} />
        <div>
          <button>Add</button>
        </div>
      </form>
      <hr />
      {/*
      The map() method calls a callback function on every element of an array and returns a new array that contains the result.
      The first argument, required, gives us the current element of the array that is iterated over,
      The second argument, optional, gives the index of the current element.
      */}
      {todos.map((todo, i) => {
        return (
          <Todo
            key={i}
            i={i}
            todo={todo}
            handleToggleComplete={handleToggleComplete}
            handleTodoDelete={handleTodoDelete} />
        )
      })}

    </div>
  );
}

export default App;
