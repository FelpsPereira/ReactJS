function Tasks(props){ //props seria o valor recibido do app
    return (
        <ul className="space-y-4 p-6 bg-slate-200 shadow rounded-md">
            {props.tasks.map(task => 
                <li key={task.id} className="flex gap-2">

                    <button onClick={() => props.onTaskClick(task.id)} className="bg-slate-400 text-white p-2 rounded-md w-full text-left">
                        {task.title}
                    </button>

                    <button className="bg-slate-400 rounded-md text-white p-2">
                        <ChevronRightIcon/> {/*ícone*/}
                    </button>

                </li>)}
        </ul>  
    )
}

export default Tasks;

import {ChevronRightIcon} from "lucide-react"; // ícones react