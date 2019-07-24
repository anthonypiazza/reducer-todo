import React from 'react';

import Task from './Task';

function Tasks(props) {
    return (
        <div>
            <div>Tasks:
                {props.tasks.map(task => (
                    <Task task={task} key={task.id} toggleItem={props.toggleItem} />
                ))}
            </div>
        </div>
    )
  }

  export default Tasks;