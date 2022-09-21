import Task from './Task'
import { useState } from 'react'

const Tasks = ({tasks, onDelete, onToggle}) => {

    return (
        <>
            {tasks.map((task) => (
                <Task key={task.id} task={task} onDelete={onDelete} onToggle={onToggle}>
                    {task.text}
                </Task>
            ))}
        </>
    )
}

export default Tasks