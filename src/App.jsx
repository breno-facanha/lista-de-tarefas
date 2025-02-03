import { useState } from 'react'
import AddTask from './components/AddTask'
import Tasks from './components/Tasks'

function App() {

  const [tasks, setTask] = useState([
    {
      id: 1,
      title: "Estudar Programação",
      description: "Estudar: React com TaulwindCss",
      isCompleted: false,
    },
    {
      id: 2,
      title: "Estudar Linux",
      description: "Estudar: Container e permissões",
      isCompleted: false,
    },
    {
      id: 3,
      title: "Estudar Aws",
      description: "Estudar: Criar Maquina Virtual",
      isCompleted: false,
    }
  ])

  function onTaskClick(taskId){
    const newTask = tasks.map( task => {
      if(task.id === taskId){
        return {...task, isCompleted: !task.isCompleted}
      }
      return task;
    })
    setTask(newTask)
  }
 
  return (
   <div className='bg-slate-500 w-full h-screen flex  flex-col items-center border gap-2 p-6'>
    <div className='w-[500px '>
      <h1 className='text-3xl text-slate-100 font-bold text-center'>Gerenciador de Tarefas</h1>
      <AddTask />
      <Tasks tasks={tasks} onTaskClick={onTaskClick}/>
    </div>
   </div>
  )
}

export default App
