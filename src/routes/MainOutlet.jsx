import { Outlet } from "react-router"
import Navbar from "../components/Navbar"


function MainOutlet() {
  return (
    <div>
      <Navbar />
      <Outlet/>
    </div>
  )
}

export default MainOutlet
