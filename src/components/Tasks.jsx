import { ChevronRightIcon, Trash2  } from "lucide-react"

export default function Tasks({tasks, onTaskClick, onDeleteTaskClick }) {
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