import React, { useState } from 'react';
import 'bulma/css/bulma.css';

export const InputToDo = (props) => {

    //make state
    const [text, setText] = useState('');

    //Input in text
    const handleChange = e => setText(e.target.value);

    const handleEnter = e => {
        if (e.key === 'Enter') {
            if (!text.match(/\S/g)) return;
            // ToDoAppクラスのhandleAdd関数実行
            props.onAdd(text);
            setText('');
        }
    };

    return (
        <div className="panel-block">
            <input class="input"
                type="text"
                placeholder="Enter to add"
                value={text}
                onChange={handleChange}
                onKeyPress={handleEnter}
            />
        </div>
    );
}

export default InputToDo;