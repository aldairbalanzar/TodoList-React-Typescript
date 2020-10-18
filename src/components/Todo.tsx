import React from 'react'

interface IAppProps {
    todo: {id: string; task: string; completed: boolean;};
    todoList: {id: string; task: string; completed: boolean;}[];
}

const Todo: React.FC<IAppProps> = ({ todo }) => {
    return (
        <div className='task-container' key={todo.id} >
            <p className={todo.completed ? 'task-completed' : 'task'}>
                {todo.task}
            </p>
            <i className='delete-icon'>X</i>
        </div>
    )
}

export default Todo
