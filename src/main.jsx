import { createContext, StrictMode } from 'react'
import { createRoot } from 'react-dom/client'
import './index.css'
import { RouterProvider } from 'react-router-dom'
import router from './components/Router'
import { Toaster } from 'react-hot-toast';
import UserContextProvider from './context/UserContextProvider'

//create  context
export const MyContext = createContext();

createRoot(document.getElementById('root')).render(
  <StrictMode>
    <UserContextProvider>
      <Toaster />
      <RouterProvider router={router} />
    </UserContextProvider>

  </StrictMode>,
)
