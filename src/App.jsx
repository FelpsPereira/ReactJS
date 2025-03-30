function App() { // Essa função vai ser global no momento da exportação e não aceita arrow function nem o primeira letra minúscula!


  return ( 
    // Aqui é onde fica o HTML, e ele aceita apenas 1 elemento, isso explica o uso da div.

    <div>
      <h1>Gerenciador de Tarefas</h1>
      <Tasks /> 
    </div>
  )
}

export default App // Torna a função App global, no caso era será importada em main.jsx

import {useState} from 'react';
import Tasks from './components/Tasks.jsx'