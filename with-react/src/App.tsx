import React, {useState} from 'react';
import TodoList from "./components/TodoList";
import NewTodo from "./components/NewTodo";
import {Todo} from "./todo.model";

// React.FC: functional componentの型
// React.ClassicComponent: class componentの型
const App: React.FC = () => {
    const [todos, setTodo] = useState<Todo[]>([]);

    const addTodoHandler = (text: string) => {
        const added = {id: Math.random().toString(), text: text};
        setTodo(prevTodos => [...prevTodos, added]);
    }

    const removeTodoHandler = (id: string) => {
        setTodo(prevTodos => prevTodos.filter(todo => todo.id !== id));
    }

    return (
        <div className="App">
            <NewTodo onAddTodo={addTodoHandler}/>
            <TodoList items={todos} onRemoveTodo={removeTodoHandler}/>
        </div>
    );
}

export default App;
