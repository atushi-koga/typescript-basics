import React from 'react';

const NewTask: React.FC = () => {
    return (
        <>
            <div>New Task</div>
            <div>
                <div>
                    <label id="title">Title</label>
                    <input type="text" name="title"/>
                </div>
                <div>
                    <label id="title">Content</label>
                    <textarea></textarea>
                </div>
                <button type="button">登録</button>
            </div>
        </>
    );
}

export default NewTask;