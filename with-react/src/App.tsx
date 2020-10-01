import React from 'react';
import TodoList from "./components/TodoList";

// React.FC: functional componentの型
// React.ClassicComponent: class componentの型
const App: React.FC = () => {
    return (
        <div className="App">
            <TodoList/>
        </div>
    );
}

export default App;
