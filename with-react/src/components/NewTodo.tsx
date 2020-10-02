import React, {useRef} from "react";

const NewTodo: React.FC = () => {
    const inputTextRef = useRef<HTMLInputElement>(null);

    const submitHandler = (e: React.FormEvent) => {
        e.preventDefault(); // fromが送信アクションを起こさないようにする。
        const text = inputTextRef.current!.value;
        console.log(text);
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