import { useState } from 'react'
import Header from "../components/Header"
import Tasks from "../components/Tasks"
import AddTask from "../components/AddTask"

const About = () => {
  const [showAddTask, setShowAddTask] = useState(false)
  const [tasks, setTasks] = useState([
    {
      id: 1,
      text: 'Doctor',
      day: 'Feb 25th',
      reminder: true,
    },
    {
      id: 2,
      text: 'Pizza',
      day: 'Feb 25th',
      reminder: false,
    },
    {
      id: 3,
      text: 'Dancing',
      day: 'Feb 25th',
      reminder: true,
    },
  ])

  // Add Task
  const addTask = (task) => {
    const id = Math.floor(Math.random() * 10000) + 1
    const newTask = {id, ...task }
    setTasks([...tasks, newTask])
  }

  // Delete task
  const deleteTask = (id) => {
    setTasks(tasks.filter((task) => task.id !== id))
  }

  // Toggle Reminder
  const toggleReminder = (id) => {
    setTasks(tasks.map((task) => task.id === id ? { ...task, reminder: !task.reminder } : task))
    console.log(tasks.map((task) => task.reminder))
  }

  return (
    <>
      <Header onAdd={() => setShowAddTask(!showAddTask)} showAdd={showAddTask}></Header>
      {showAddTask && <AddTask onAdd={addTask}></AddTask>}
      {tasks.length > 0 ? (
        <Tasks tasks={tasks} onDelete={deleteTask}
          onToggle={toggleReminder}></Tasks>
      )
        : ('No tasks avaliable')
      }
    </>
  )
}

export default About