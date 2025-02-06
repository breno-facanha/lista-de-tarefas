import { useSearchParams } from "react-router-dom"

export default function(){
    const [searchParams] = useSearchParams()
    const title = searchParams.get("title")
    const description = searchParams.get("description")
    return (
       <div className="h-screen w-screen bg-slate-500 p-6">
        <h1>{title}</h1>
        <p>{description}</p>
       </div>
    )
}