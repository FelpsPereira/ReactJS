import {useState} from 'react';
import Tasks from './components/Tasks.jsx'
import AddTask from './components/AddTask.jsx'
import {v4} from 'uuid'

function App() { // Essa função vai ser global (para quem importar) no momento da exportação e não aceita arrow function nem o primeira letra minúscula!
  const [tasks, setTasks] = useState([{
      id: 1,
      title: "Estudar Inglês",
      description: "Estudar inglês para ficar fluente e fugir do Brasil",
      isCompleted: false,
    },
    {
      id: 2,
      title: "Estudar Programação",
      description: "Estudar programação para ficar ser um programador um dia",
      isCompleted: false,
    },
    {
      id: 3,
      title: "Estudar Matemática",
      description: "Saber os número",
      isCompleted: false,
    }
  ])

  function onTaskClick(taskId){
    const newTasks = tasks.map(task => {
      if (task.id == taskId){
        return {...task, isCompleted: !task.isCompleted} // "...task", apenas retorna todo o objeto, porém modificando apenas o isCompleted.
      }
    
      return task
    })
    setTasks(newTasks)
  }

  function onTaskClickDelete(taskId){
    setTasks(tasks.filter(task => task.id !== taskId))
  }

  function onAddTask (title,description) {
    const newTask = {
      id: v4(),
      title: title,
      description: description,
      isCompleted: false
    }
    
    setTasks([...tasks, newTask])
  }

  return ( 
    // Aqui é onde fica o HTML, e ele aceita apenas 1 elemento, isso explica o uso da div.

    <div className='w-screen h-screen bg-slate-500 flex justify-center p-6'>
      <div className='w-[500px] space-y-4'>
        <h1 className='text-3xl text-slate-100 font-bold text-center'>Gerenciador de Tarefas</h1>
        <AddTask
        
        onAddTask={onAddTask}
        />

        <Tasks

        tasks={tasks}
        onTaskClick={onTaskClick} 
        onTaskClickDelete={onTaskClickDelete}

        />{/*esse valor (tasks) vai ser enviado para o props, tudo que etiver ai, vai ir para o props*/}

      </div>
    </div>
  )
}

export default App // Torna a função App global, no caso era será importada em main.jsx