import React, { useState } from 'react';
import TodoForm from './components/TodoForm';
import TodoList from './components/TodoList';
import { ITodo } from './interfaces/AppInterfaces';
import './App.css';

const App: React.FC = () => {

  const [todoList, setTodoList] = useState<ITodo[]>([])

  const handleDeleteAllCompleted = () => {
    let newList = todoList.filter(todo => todo.completed !== true)
    setTodoList([
      ...newList
    ])
  }

  return (
    <div className="App">
      <div className='components-container'>
        <TodoForm todoList={todoList} setTodoList={setTodoList} />
        <TodoList todoList={todoList} setTodoList={setTodoList} />
        <div className="button-container">
          <button className='button-clear-completed' onClick={handleDeleteAllCompleted}>Clear Completed</button>
        </div>
      </div>
    </div>
  );
}

export default App;
