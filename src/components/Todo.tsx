import React from 'react'

interface IAppProps {
    todo: {id: string; task: string; completed: boolean;};
}

const Todo: React.FC<IAppProps> = ({ todo }) => {
    return (
        <div key={todo.id} className={todo.completed ? 'completed' : ''}>
            <p>{todo.task}</p>
        </div>
    )
}

export default Todo
