import {FaTimes} from "react-icons/fa"

function Task({task, onDelete, onToggle}) {

    // if the task reminder is true, add a new class from CSS
    const taskClasses = `task ${task.reminder ? "reminder" : ""}`
    return (
        <div className={taskClasses} onClick={()=> onToggle(task.id)}>
            <h3>{task.text} <FaTimes onClick={()=>onDelete(task.id)} style={{cursor:"pointer"}}/></h3>
            <p>{task.day}</p>
        </div>
    )
}

export default Task
