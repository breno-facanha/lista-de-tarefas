import { ChevronRightIcon, Trash2  } from "lucide-react"
import { useNavigate } from "react-router-dom"

export default function Tasks({tasks, onTaskClick, onDeleteTaskClick }) {
    const navigate = useNavigate();

    function onSeeDetailsClick(task){
        const query = new URLSearchParams()
        query.set("title", task.title)
        query.set("description", task.description)
        navigate(`/task?${query}`)
    }
    return (
        <ul className="space-y-4 p-6 bg-slate-200 rounded-md shadow">
            {tasks.map( (task) => 
            <li 
                key={task.id} 
                className="flex gap-2">
                <button 
                    onClick={() => onTaskClick(task.id)}
                    className={`bg-slate-400 text-white p-2 rounded-md w-full text-left ${task.isCompleted && 'line-through'} cursor-pointer`}>
                    {task.title}
                </button>

                <button 
                    onClick={ () => onSeeDetailsClick(task)}
                    className="bg-slate-400 text-white p-2 rounded-md cursor-pointer">  
                    <ChevronRightIcon /> 
                </button>

                <button
                    onClick={() => onDeleteTaskClick(task.id)} 
                    className="bg-slate-400 text-red-800 p-2 rounded-md cursor-pointer">  
                    <Trash2  /> 
                </button>
            </li>
            )}
        
        </ul>
    )
}