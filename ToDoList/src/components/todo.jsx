import React from 'react';

const Todo = ({ todo, removeTodo }) => {
    return (
      <div className="todo-item">
        <span>{todo}</span>
        <button onClick={removeTodo}>Eliminar</button>
      </div>
    );
  };
  
  export default Todo;