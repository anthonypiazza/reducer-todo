import React, { useReducer } from 'react';

import {
  reducer,
  initialState,
  ADD_TASK,
  TOGGLE_ITEM,
  CLEAR_COMPLETED
} from './reducers/index';

import Tasks from './components/Tasks';
import AddForm from './components/AddForm';
import './App.css';

function App() {

  const [{ tasks }, dispatch] = useReducer(reducer, initialState)

  const addItem = (e, item) =>{
    e.preventDefault();
    dispatch({ type: ADD_TASK, payload: item });
  }

  const toggleItem = itemId => {
    dispatch({ type: TOGGLE_ITEM, payload: itemId });
  };

  const clearCompleted = e => {
    e.preventDefault();
    dispatch({ type: CLEAR_COMPLETED});
  };
  console.log({tasks})
  return (
    <div className="App">
      <header className="App-header">
        <Tasks toggleItem={toggleItem} tasks={tasks} />
        <AddForm addItem={addItem} clearCompleted={clearCompleted} />
      </header>
    </div>
  );
}

export default App;
