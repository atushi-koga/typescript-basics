import React from "react";

interface TodoListProps {
    items: { id: string; text: string; }[];
    onRemoveTodo: (id: string) => void;
}

const TodoList: React.FC<TodoListProps> = props => {
    const renderedItems = props.items.map(
        item => {
            return (
                <li key={item.id}>
                    {item.text}
                    <button
                        type="button"
                        onClick={props.onRemoveTodo.bind(null, item.id)}
                        // これは onClick={() => props.onRemoveTodo(item.id)} と同じ
                    >
                        remove
                    </button>
                </li>
            )
        }
    );

    return (
        <ul>
            {renderedItems}
        </ul>
    );
}

export default TodoList;