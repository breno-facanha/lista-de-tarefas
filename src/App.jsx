import AddTask from './components/AddTask'
import Tasks from './components/Tasks'

function App() {
 
  return (
   <div className='bg-slate-500 w-full h-screen flex  flex-col items-center border gap-2 p-6'>
    <div className='w-[500px '>
      <h1 className='text-3xl text-slate-100 font-bold text-center'>Gerenciador de Tarefas</h1>
      <AddTask />
      <Tasks />
    </div>
   </div>
  )
}

export default App
