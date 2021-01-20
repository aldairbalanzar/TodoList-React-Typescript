export interface ITodo {
    id: string;
    task: string;
    completed: boolean;
};

export interface IAppProps {
    todoList: ITodo[];
    setTodoList: ([]: ITodo[]) => void;
}