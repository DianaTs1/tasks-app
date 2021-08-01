import { useState, useEffect } from "react"
import "./index.css"
import Header from "./Components/Header";
import Tasks from "./Components/Tasks";
import AddTask from "./Components/AddTask";


function App() {
  const [actionOnAddButton, setactionOnAddButton] = useState(false)

  const [tasks, setTasks] = useState([
    {
        id: 1,
        text: "Dentist Appointment",
        day: "Feb 5th at 2:30pm",
        reminder: true
    },
    {
        id: 3,
        text: "School Meet-up",
        day: "Feb 6th at 2:30pm",
        reminder: true
    }
])
const LOCAL_STORAGE_KEY = "tasks.app"

useEffect(() => {
  const storedTodos = JSON.parse(
    localStorage.getItem(LOCAL_STORAGE_KEY)
  );
  if (storedTodos) setTasks(storedTodos);
}, []);

useEffect(() => {
  localStorage.setItem(
    LOCAL_STORAGE_KEY,
    JSON.stringify(tasks)
  );
}, [tasks]);

const addNewTaskHandler = (task) => {
  const id =  Math.floor(Math.random() * 10000) + 1
  const newTask = {id, ...task}
  const newTasks = [...tasks, newTask]

  setTasks(newTasks)
}

const deleteTask = (id) => {
  const newTasks = [...tasks].filter((task)=> task.id !== id)
  setTasks(newTasks)
} 

const toggleReminder = (id) =>{
  setTasks(tasks.map((task)=> task.id === id ? {...task, reminder: !task.reminder} : task))
}

  return (
    <div className="container">
      <Header 
        onAdd={()=>setactionOnAddButton(!actionOnAddButton)} 
        showAddTask = {actionOnAddButton}/> 
      {actionOnAddButton && <AddTask onSubmit = {addNewTaskHandler}/>}
      {tasks.length > 0 ? (<Tasks onDelete={deleteTask} onToggle={toggleReminder} tasks={tasks}/>): "No Tasks Found"}
    </div>
  );
}

export default App;
