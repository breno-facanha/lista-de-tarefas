import './App.css'
import Tasks from './components/Tasks'

function App() {
 
  return (
   <div className='bg-red-400 w-full h-screen flex justify-center flex-col items-center border gap-2'>
    <h1>Gerenciador de Tarefas</h1>
    <Tasks />
   </div>
  )
}

export default App
