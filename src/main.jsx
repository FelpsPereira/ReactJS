import { StrictMode } from 'react'
import { createRoot } from 'react-dom/client'
import App from './App.jsx' // função App de App.jsx
import './index.css'
import { createBrowserRouter, RouterProvider } from 'react-router-dom'
import TaskPage from './pages/TaskPage.jsx'


const router = createBrowserRouter([
  {
    path: "/",
    element: <App/>,
  },
  {
    path: '/task',
    element: <TaskPage/>
  }
])

createRoot(document.getElementById('root')).render(
  <StrictMode>
    <RouterProvider router={router}/>  
  </StrictMode>,
) // aqui foi criado a 'raiz' HTML dentro de 'root' que está em index.html
