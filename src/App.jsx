import { useEffect, useState } from 'react'
import AddTask from './components/AddTask'
import Tasks from './components/Tasks'
import { v4 as uuidv4 } from 'uuid';

function App() {

  const [tasks, setTask] = useState( JSON.parse(localStorage.getItem("tasks")) || [])

  useEffect(() => {
    localStorage.setItem("tasks", JSON.stringify(tasks))
  }, [tasks])

  function onTaskClick(taskId){
    const newTask = tasks.map( task => {
      if(task.id === taskId){
        return {...task, isCompleted: !task.isCompleted}
      }
      return task;
    })
    setTask(newTask)
  }

  function onDeleteTaskClick(taskId){
    const newTask = tasks.filter(task => task.id !== taskId)
    setTask(newTask)
  }

  function onAddTaskSubmit(title, description){
    const newTask = {
      id: uuidv4(),
      title: title,
      description:description,
      isCompleted: false,
    }
    setTask([...tasks, newTask])
  }
 
  return (
   <div className='bg-slate-500 w-full h-screen flex  flex-col items-center border gap-2 p-6'>
    <div className='w-[400px] space-y-4'>
      <h1 className='text-3xl text-slate-100 font-bold text-center'>Gerenciador de Tarefas</h1>
      <AddTask onAddTaskSubmit={onAddTaskSubmit} />
      <Tasks 
        tasks={tasks} 
        onTaskClick={onTaskClick} 
        onDeleteTaskClick={onDeleteTaskClick}
      />
    </div>
   </div>
  )
}

export default App
