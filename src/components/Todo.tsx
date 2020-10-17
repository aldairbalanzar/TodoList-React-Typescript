import React from 'react'

interface IAppProps {
    todo: {
        id: string;
        task: string;
        completed: boolean;
    }
}

const Todo: React.FC<IAppProps> = ({ id, completed, task }) => {
    return (
        <div key={id} className={completed ? 'completed' : ''}>
            <p>{task}</p>
        </div>
    )
}

export default Todo
