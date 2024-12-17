import { StrictMode } from 'react'
import { createRoot } from 'react-dom/client'
import './styles/tailwind.css'
import { createBrowserRouter,RouterProvider } from 'react-router-dom'
//@ts-ignore
import routes from '~react-pages'

const router = createBrowserRouter(routes)

//@ts-ignore

createRoot(document.getElementById('root')).render(
  <StrictMode>
    <RouterProvider router={router}/>
  </StrictMode>,
)
