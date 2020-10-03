import React, {useRef} from "react";

type NewTodoProps = {
    onAddTodo: (todoText: string) => void;
};

const NewTodo: React.FC<NewTodoProps> = props => {
    const inputTextRef = useRef<HTMLInputElement>(null);

    const submitHandler = (e: React.FormEvent) => {
        e.preventDefault(); // fromが送信アクションを起こさないようにする。
        props.onAddTodo(inputTextRef.current!.value)
    };

    return (
        <form onSubmit={submitHandler}>
            <div>
                <label htmlFor="text">Todo Text</label>
                <input id="text" type="text" ref={inputTextRef}/>
            </div>
            <button type="submit">Add ToDo</button>
        </form>
    );
}

export default NewTodo;