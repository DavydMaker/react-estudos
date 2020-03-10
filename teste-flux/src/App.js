import React from 'react';
import { Provider } from 'react-redux'

import store from './store'

import TodoList from './TodoList'
import Counter from './counter'

function App() {
  return (
    <Provider store={store}>
      <TodoList/>
      <Counter/>
    </Provider>
  );
}

export default App;
