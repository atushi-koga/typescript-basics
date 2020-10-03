import React, {useState} from 'react';
import TodoList from "./components/TodoList";
import NewTodo from "./components/NewTodo";
import {Todo} from "./todo.model";

// React.FC: functional componentの型
// React.ClassicComponent: class componentの型
const App: React.FC = () => {
    const [todos, addTodo] = useState<Todo[]>([]);

    const addTodoHandler = (text: string) => {
        const added = {id: Math.random().toString(), text: text};
        addTodo(prevTodos => [...prevTodos, added]);
    }

    return (
        <div className="App">
            <NewTodo onAddTodo={addTodoHandler}/>
            <TodoList items={todos}/>
        </div>
    );
}

export default App;
