import { StrictMode } from 'react'
import { createRoot } from 'react-dom/client'
import { RouterProvider, } from "react-router-dom";
import { router } from './Routes/Router';
import './index.css'

createRoot(document.getElementById('root')).render(
  <StrictMode>
    <div className='max-w-screen mx-auto overflow-x-hidden'>
     <RouterProvider router={router} />
    </div>
  </StrictMode>,
)
