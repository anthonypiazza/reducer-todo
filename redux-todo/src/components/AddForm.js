import React, { useState } from 'react';

import '../App.css';

function AddForm(props){
    
    const [{item}, setItem] = useState('null')

    const handleChanges = e => {
        setItem({ [e.target.name]: e.target.value });
    };

    
    const submitItem = e => {
        e.preventDefault();
        props.addItem(e, item);
        setItem({ item: ''})
    };

    return(
        <div>
            <form onSubmit={submitItem}>
                <label>Add task here...
                    <input
                        type="text"
                        name="item"
                        value={item}
                        onChange={handleChanges}
                    />
                </label>
            </form>
            <button onClick={submitItem}>Add Task</button> 
            <button onClick={props.clearCompleted}>Clear Completed</button>
        </div>
    )
}

export default AddForm;
