import {useState} from "react"

function AddTask({onAddTask}) {
    const [title, setTitle] = useState("")
    const [description, setDescription] = useState("")

    return (
        <div className="space-y-4 p-6 bg-slate-200 shadow rounded-md flex flex-col">
            <input 
            type="text" 
            placeholder="Coloque o título de sua tarefa." className="border border-slate-300 outline-slate-400 px-4 py-2 rounded-md"
            value={title}
            onChange={(event) => setTitle(event.target.value)}
            />


            <input 
            type="text" 
            placeholder="Coloque a descrição de sua tarefa." className="border border-slate-300 outline-slate-400 px-4 py-2 rounded-md"
            value={description}
            onChange={(event) => setDescription(event.target.value)}
            />


            <button 
            className="bg-slate-500 text-white px-4 py-2 rounded-md font-medium" 
            onClick={() => onAddTask(title,description)}>
                Adicionar
            </button>
        </div>
    )
}

export default AddTask