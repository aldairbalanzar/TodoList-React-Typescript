import React, { useState } from 'react'

interface IAppProps {
    todoList: {id: string; task: string; completed: boolean;}[];
    setTodoList: ([]) => void;
}

const TodoForm: React.FC<IAppProps> = ({ todoList, setTodoList }) => {
   const [newTodo, setNewTodo] = useState({
       id: '',
       task: '',
       completed: false
   });

   const handleChanges = (e: React.FormEvent<HTMLInputElement>) => {
       e.preventDefault()
       setNewTodo({
           ...newTodo,
           [e.currentTarget.name]: e.currentTarget.value
       })
   };

   const handleSubmit = (e: React.FormEvent<HTMLButtonElement>) => {
       e.preventDefault()
       setTodoList([
           ...todoList,
           newTodo
       ])
       setNewTodo({
            id: '',
            task: '',
            completed: false
       })
   };


    return (
        <form className='form-todo'>
            <label className='label-task' htmlFor="task">
                <input 
                className='input-task'
                type="text"
                onChange={handleChanges}
                name='task'
                value={newTodo.task}
                placeholder='New Task'
                />
            </label>
            <button className='button-submit' type='submit' onClick={handleSubmit}>Add</button>
        </form>
    )
}

export default TodoForm
