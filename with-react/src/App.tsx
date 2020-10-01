import React from 'react';
import TodoList from "./components/TodoList";

// React.FC: functional componentの型
// React.ClassicComponent: class componentの型
const App: React.FC = () => {
    const todos = [{id: '1', text: 'Finish the course'}];
    return (
        <div className="App">
            <TodoList items={todos}/>
        </div>
    );
}

export default App;
