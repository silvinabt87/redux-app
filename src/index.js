import React from 'react';
import ReactDOM from 'react-dom';
import './index.css';
import App from './App';
import store from './app/store';
import { Provider } from 'react-redux';
import * as serviceWorker from './serviceWorker';

export const State = {
  todos: [
    { id: 0, text: 'Change curtains', isComplete: true },
    { id: 1, text: 'Buy food', isComplete: true },
    { id: 2, text: 'Hire health insurance', isComplete: false },
  ],
};

ReactDOM.render(
  <React.StrictMode>
    <Provider store={store}>
      <App todos={State.todos} />
    </Provider>
  </React.StrictMode>,
  document.getElementById('root')
);

// If you want your app to work offline and load faster, you can change
// unregister() to register() below. Note this comes with some pitfalls.
// Learn more about service workers: https://bit.ly/CRA-PWA
serviceWorker.unregister();
