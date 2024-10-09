import Navbar from "../components/Navbar"
import Footer from "../layout/Footer"
import heroimg from "../assets/pageImage/Rectangle1548Shadow2.png";
import CartCard from "../components/card/smallComponent/CartCard";

function CarDetails() {
  return (
    <div>
      <div className="pb-10">
        <Navbar />
      </div>
      <div
        className="pt-20 bg-cover bg-center h-[300px] flex items-start justify-start rounded-md"
        style={{ backgroundImage: `url(${heroimg})` }}
      >
        <h1 className="text-3xl font-bold text-white pl-10 pt-16">
          Cart Details
        </h1>
      </div>
      <div>
        <CartCard/>
      </div>
      <div className="pt-20">
        <Footer />
      </div>
    </div>
  );
}

export default CarDetails
