import React from 'react';

export default function TodoList({ todos }) {
  console.log(this);
  return (
    <div>
      <ul>
        {todos.map((todo) => {
          return (
            <li key={todo.id}>
              <p>{todo.text}</p>
              <input type="checkbox" defaultChecked={todo.isComplete} />
            </li>
          );
        })}
      </ul>
    </div>
  );
}
