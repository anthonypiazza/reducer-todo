import React from 'react';
import '../App.css';

function Task(props) {
    return (
        <h2 
            onClick={() => props.toggleItem(props.task.id)}
            className={`${props.task.completed ? 'completed' : 'not-completed'}`}
        >
            {props.task.item}
        </h2>
    )
}

export default Task;