import React from 'react';
import NewTask from "./components/NewTask";
import TaskList from "./components/TaskList";

const App: React.FC = () => {
    return (
        <div>
            <NewTask/>
            <TaskList/>
        </div>
    );
}

export default App;