import React, { useState } from 'react';
import './App.css';
import TodoListComponent from './TodoListComponent';

function App() {
  const [todos, setTodos] = useState([]);
  return (
    <>
      <TodoListComponent></TodoListComponent>
      <input type="text"></input>
      <button>Add To Do</button>
      <button>Clear Complete</button>
      <div>
        <h4 class="status-p" id="status-word">Status:</h4>
        <p class="status-p">0 left to do</p>
      </div>
      
    </>
  );
}

export default App;
