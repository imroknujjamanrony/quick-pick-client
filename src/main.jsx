import { StrictMode } from 'react'
import { createRoot } from 'react-dom/client'
import { RouterProvider, } from "react-router-dom";
import { router } from './Routes/Router';
import './index.css'

createRoot(document.getElementById('root')).render(
  <StrictMode>
    <div className='w-[1920px] mx-auto'>
     <RouterProvider router={router} />
    </div>
  </StrictMode>,
)
