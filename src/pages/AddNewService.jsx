import Navbar from "../components/Navbar"
import Footer from "../layout/Footer"
import checkOut from "../assets/pageImage/RectangleShadow.png";
import { Link } from "react-router-dom";


function AddNewService() {
  return (
    <div>
      <div className="pb-20">
        <Navbar />
      </div>
      <div
        className="pt-20 bg-cover bg-center h-[300px] flex items-start justify-start rounded-md"
        style={{ backgroundImage: `url(${checkOut})` }}
      >
        <h1 className="text-3xl font-bold text-white pl-10 pt-16">
          Add New Service
        </h1>
      </div>
        <div className="py-20">
          <form action="" className="form-control">
            <div className="grid grid-cols-2 justify-center items-center gap-7 pl-16">
              <input
                type="text"
                placeholder="Service Name"
                className="input input-bordered w-full max-w-xs"
              />
              <input
                type="number"
                placeholder="Service Price"
                className="input input-bordered w-full max-w-xs"
              />
              <input
                type="text"
                placeholder="Text here"
                className="input input-bordered w-full max-w-xs"
              />
              <input
                type="text"
                placeholder="Service Type"
                className="input input-bordered w-full max-w-xs"
              />
            </div>
            <div className="p-5 justify-center items-center">
              <textarea
                type="textarea"
                placeholder="Product Description"
                className="textarea textarea-bordered w-9/12 h-48 mr-44"
              />
            </div>
            <div className="pr-32">
              <Link className="btn w-52 bg-orange-600 text-white" to="/test5">
                Submit
              </Link>
            </div>
          </form>
        </div>
      <div className="pt-20">
        <Footer />
      </div>
    </div>
  );
}

export default AddNewService
