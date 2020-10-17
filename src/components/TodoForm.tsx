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
   };


    return (
        <div>
            <form>
                <label htmlFor="todo">
                    <input 
                    type="text"
                    onChange={handleChanges}
                    name='task'
                    value={newTodo.task}
                    placeholder='Add new todo'
                    />
                    <button type='submit' onClick={handleSubmit}>Add</button>
                </label>
            </form>
        </div>
    )
}

export default TodoForm
