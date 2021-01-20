import React from 'react'

interface IAppProps {
    todo: {id: string; task: string; completed: boolean;};
    todoList: {id: string; task: string; completed: boolean;}[];
    setTodoList: ([]) => void;
}

interface ITodo {
    id: string;
    task: string;
    completed: boolean;
  }

const Todo: React.FC<IAppProps> = ({ todo, todoList, setTodoList }) => {
    
    const handleDelete = (todoId: string) => {
        let newList = todoList.filter(todo => todo.id !== todoId)
        setTodoList([
            ...newList
        ])
    };

    const toggleCompleted = (todoId: string) => {
        const newList = todoList.map(todo => {
            if(todo.id === todoId) {
                console.log(todoId)
                console.log(todo.id)
                return {
                    ...todo,
                    completed: !todo.completed
                }
            }
            return todo
        })
        setTodoList([
            ...newList
        ])
    };

    return (
        <div className='task-container' key={todo.id} >
            <p className={todo.completed ? 'task-completed' : 'task'}
            onClick={() => {toggleCompleted(todo.id)}}
            >
                {todo.task}
            </p>
            <i className='delete-icon' onClick={() => {handleDelete(todo.id)}}>X</i>
        </div>
    )
};

export default Todo
