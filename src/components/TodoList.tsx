import React from 'react';
import Todo from './Todo';
import { ITodo, IAppProps } from '../interfaces/AppInterfaces';

const TodoList: React.FC<IAppProps> = ({ todoList, setTodoList }) => {
    return (
        <ul className='todo-list'>
        {todoList.map((todo: ITodo) => (
            <Todo todo={todo} todoList={todoList} setTodoList={setTodoList} />
        ))}
        </ul>
    )
}

export default TodoList
