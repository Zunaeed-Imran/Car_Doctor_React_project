import Navbar from "../components/Navbar"
import Footer from "../layout/Footer"
import serviceDetails from '../assets/pageImage/RectangleShadow.png';
import UniqueCarEngineService from "../components/card/smallComponent/UniqueCarEngineService";
import SimpleStpe from "../components/card/smallComponent/SimpleStpe";

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
        </div>
        <div className="col-span-2">
          <SimpleStpe/>
        </div>
      </div>
      <div className="pt-20">
        <Footer />
      </div>
    </div>
  );
}

export default ServiceDetails
