import Navbar from "../components/Navbar"
import Footer from "../layout/Footer"


function AddNewService() {
  return (
    <div>
      <div className="pb-20">
        <Navbar/>
      </div>
      <div className="pt-20">
        <h1 className="text-5xl">Add new service page.</h1>
      </div>
      <div className="pt-20">
        <Footer/>
      </div>
    </div>
  )
}

export default AddNewService
