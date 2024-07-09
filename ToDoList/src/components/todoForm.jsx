import React, { useState } from 'react';

const TodoForm = ({ addTodo }) => {
    const [todo, setTodo] = useState('');
  
    const handleSubmit = (e) => {
      e.preventDefault();
      if (!todo.trim()) return;
      addTodo(todo);
      setTodo('');
    };
  
    return (
      <form onSubmit={handleSubmit} className="todo-form">
        <input
          type="text"
          value={todo}
          onChange={(e) => setTodo(e.target.value)}
          placeholder="Agregar nueva tarea..."
        />
        <button type="submit">Agregar</button>
      </form>
    );
  };
  
  export default TodoForm;