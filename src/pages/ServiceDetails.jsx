import Navbar from "../components/Navbar"
import Footer from "../layout/Footer"
import serviceDetails from '../assets/pageImage/RectangleShadow.png';
import UniqueCarEngineService from "../components/card/smallComponent/UniqueCarEngineService";
import SimpleStpe from "../components/card/smallComponent/SimpleStpe";
import Services from "../components/card/smallComponent/Services";
import DownloadService from "../components/card/smallComponent/DownloadService";
import DiscountService from "../components/card/smallComponent/DiscountService";
import { Link } from "react-router-dom";

function ServiceDetails() {
  return (
    <div>
      <div className="pb-20">
        <Navbar />
      </div>
      <div
        className="pt-20 bg-cover bg-center h-[300px] flex items-start justify-start rounded-md"
        style={{ backgroundImage: `url(${serviceDetails})` }}
      >
        <h1 className="text-3xl font-bold text-white pl-10 pt-16">
          Service Details
        </h1>
      </div>
      <div className="grid grid-cols-3 ">
        <div className="col-span-2">
          <UniqueCarEngineService />
          <SimpleStpe />
        </div>
        <div className="col-span-1 items-center">
          <Services />
          <DownloadService />
          <DiscountService />
          <h1 className="text-5xl font-bold p-3 py-10">Price $250.00</h1>
          <Link to="/error" className="btn bg-[#ff3811] hover:bg-red-600 text-white">
            Proceed Checkout
          </Link>
        </div>
      </div>
      <div className="pt-20">
        <Footer />
      </div>
    </div>
  );
}

export default ServiceDetails
