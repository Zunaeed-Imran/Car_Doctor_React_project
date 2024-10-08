import Navbar from "../components/Navbar"
import Footer from "../layout/Footer"
import checkOut from '../assets/pageImage/Rectangle 1539.png';


function AddNewService() {
  return (
    <div>
      <div className="pb-20">
        <Navbar />
      </div>
      <div className="pt-20 bg-cover bg-center h-[300px] flex items-center justify-center rounded-md" style={{ backgroundImage: `url(${checkOut})` }}>
        <h1 className="text-3xl font-bold text-white">Add New Service</h1>
      </div>
      <div className="pt-20">
        <Footer />
      </div>
    </div>
  );
}

export default AddNewService
