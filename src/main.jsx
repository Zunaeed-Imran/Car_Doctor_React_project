import { StrictMode } from 'react'
import { createRoot } from 'react-dom/client'
import './index.css'
import { createBrowserRouter, RouterProvider } from 'react-router-dom'
import App from './App'
import MainOutlet from './routes/MainOutlet'
import ErrorNotFound from './pages/ErrorNotFound'
import Navbar from './components/Navbar'

const router = createBrowserRouter([{
  path: "/",
  element: <MainOutlet />,
  children: [
    {
      path: "/",
      element: <App />,
      errorElement: <ErrorNotFound />
    },
    {
      path: "/navbar",
      element: <Navbar/>
    }
  ],
},
]);



createRoot(document.getElementById('root')).render(
  <StrictMode>
    <RouterProvider router={router}/>
  </StrictMode>,
)
