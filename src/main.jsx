import { StrictMode } from 'react'
import { createRoot } from 'react-dom/client'
import './index.css'
import { createBrowserRouter, RouterProvider } from 'react-router-dom'
import App from './App'
import MainOutlet from './routes/MainOutlet'
import ErrorNotFound from './pages/ErrorNotFound'
import Navbar from './components/Navbar'
import Login from './pages/Login'
import SignUp from './pages/SignUp'

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
    },
    {
      path: "/login",
      element: <Login/>
    },
    {
      path: "/signup",
      element: <SignUp/>
    },
  ],
},
]);



createRoot(document.getElementById('root')).render(
  <StrictMode>
    <RouterProvider router={router}/>
  </StrictMode>,
)
