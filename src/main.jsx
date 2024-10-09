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
import ChecOut from './pages/ChecOut'
import AddNewService from './pages/AddNewService'
import ServiceDetails from './pages/ServiceDetails'
import CarDetails from './pages/CarDetails'
import ManageOrder from './pages/ManageOrder'

const router = createBrowserRouter([
  {
    path: '/',
    element: <MainOutlet />,
    errorElement: <ErrorNotFound />,
    children: [
      {
        path: '/',
        element: <App />,
      },
      {
        path: '/navbar',
        element: <Navbar />,
      },
      {
        path: '/login',
        element: <Login />,
      },
      {
        path: '/signup',
        element: <SignUp />,
      },
      {
        path: '/checkout',
        element: <ChecOut />,
      },
      {
        path: '/addnewservice',
        element: <AddNewService />,
      },
      {
        path: '/servicedetails',
        element: <ServiceDetails/>,
      },
      {
        path: '/cardetails',
        element: <CarDetails/>,
      },
      {
        path: '/manageorder',
        element: <ManageOrder/>,
      },
    ],
  },
]);



createRoot(document.getElementById('root')).render(
  <StrictMode>
    <RouterProvider router={router}/>
  </StrictMode>,
)
