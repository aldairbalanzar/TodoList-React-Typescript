import React, { useState } from 'react';
import TodoForm from './components/TodoForm'
import Todo from './components/Todo'
import './App.css';

interface ITodo {
  id: string;
  task: string;
  completed: boolean;
}

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
        <TodoForm todoList={todoList} setTodoList={setTodoList}/>
        <ul className='todo-list'>
          {todoList.map((todo: ITodo) => (
            <Todo todo={todo} todoList={todoList} setTodoList={setTodoList} />
          ))}
        </ul>
        <button className='button-clear-completed' onClick={handleDeleteAllCompleted}>Clear Completed</button>
      </div>
    </div>
  );
}

export default App;
