import React from 'react';

import TodoForm from './components/TodoForm';
import TodoList from './components/TodoList';
import FilterSection from './components/FilterSection';
import './App.css';

export const App = ({ todos }) => {
  return (
    <div className="App">
      <h1>TODO APP</h1>
      <TodoForm />
      <TodoList todos={todos} />
      <FilterSection />
    </div>
  );
};

export default App;
