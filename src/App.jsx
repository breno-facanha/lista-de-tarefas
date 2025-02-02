import { useState } from 'react'
import './App.css'

function App() {

  let [ msg, setMsg ] = useState('Olá mundo !')

  let mensagem = ' Olá, mundo ! Sou Breno Façanha, Dev Júnior !'
 
  return (
   <div className='bg-red-400 w-full h-screen flex justify-center flex-col items-center border gap-2'>
     {msg}
    <button 
      className='border-2 border-amber-500 rounded-md w-12 bg-amber-500 text-amber-100 cursor-pointer w-auto px-2'
      onClick={() => setMsg(mensagem)}  
    >Mudar Mensagem</button>
   </div>
  )
}

export default App
