import React from 'react';
import Todo from './todo';

const TodoList = ({ todos, removeTodo }) => {
    return (
      <div>
        {todos.map((todo, index) => (
          <Todo key={index} todo={todo} removeTodo={() => removeTodo(index)} />
        ))}
      </div>
    );
  };
  
  export default TodoList;