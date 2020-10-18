import React, {useEffect} from 'react';
import {AppState} from "../reducer";
import {connect} from "react-redux";
import {fetchTasks, FetchTasksAction, Task} from "../action";

interface TaskListProps {
    items: Task[];
    fetchTasks: () => FetchTasksAction;
}

const TaskList: React.FC<TaskListProps> = props => {
    useEffect(() => {
        props.fetchTasks();
    }, [props.items.length]);

    const rendered = props.items.map(item => {
        return (
            <div key={item.title}>
                <span>{item.title}</span><span>{item.content}</span>
            </div>
        )
    });

    return (
        <>
            <div>Task List</div>
            {rendered}
        </>
    );
}

const mapStateToProps = (state: AppState) => {
    return {items: state.tasks}
}

export default connect(mapStateToProps, {fetchTasks})(TaskList);