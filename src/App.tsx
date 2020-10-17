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
  return (
    <div className="App">
      <ul>
        {todoList.map((todo: ITodo) => (
          <Todo todo={todo}/>
        ))}
      </ul>
      <TodoForm todoList={todoList} setTodoList={setTodoList}/>
    </div>
  );
}

export default App;
