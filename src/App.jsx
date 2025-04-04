function App() { // Essa função vai ser global (para quem importar) no momento da exportação e não aceita arrow function nem o primeira letra minúscula!


  return ( 
    // Aqui é onde fica o HTML, e ele aceita apenas 1 elemento, isso explica o uso da div.

    <div className='w-screen h-screen bg-slate-500 flex justify-center p-6'>
      <div className='w-[500px]'>
        <h1 className='text-3xl text-slate-100 font-bold text-center'>Gerenciador de Tarefas</h1>
        <AddTask/>
        <Tasks/> 
      </div>
    </div>
  )
}

export default App // Torna a função App global, no caso era será importada em main.jsx

import {useState} from 'react';
import Tasks from './components/Tasks.jsx'
import AddTask from './components/AddTask.jsx'