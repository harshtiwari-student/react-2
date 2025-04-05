import {  StrictMode } from 'react'
import { createRoot } from 'react-dom/client'

import App from './App.jsx'
import {createBrowserRouter,RouterProvider} from 'react-router-dom'
import Contact from './components/Contact.jsx'
import About from './components/About.jsx'
import Home from './components/Home.jsx'

import '../node_modules/bootstrap/dist/css/bootstrap.min.css'
import '../node_modules/bootstrap/dist/js/bootstrap.min.js'

let routes=createBrowserRouter([
  {
    path:'/',
    element:<App/>,
    children:
    [
      {
        path:'',
        element:<Home/>,
      },
    {
    path:'/contact',
    element:<Contact/>,
    },
    {
      path:'/about',
      element:<About/>,
      },
    ]
  }
])

createRoot(document.getElementById('root')).render(
  <StrictMode>
    <RouterProvider router={routes}>
    <App />
    </RouterProvider>
  </StrictMode>
)
