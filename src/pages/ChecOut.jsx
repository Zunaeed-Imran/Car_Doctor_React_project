import Navbar from "../components/Navbar"
import checkOut from "../assets/pageImage/Rectangle 1539.png";
import Footer from "../layout/Footer";


function ChecOut() {
  return (
    <div>
      <div>
        <Navbar />
      </div>
      {/* <div className="pt-20">
        <img src={checkOut} alt="checkout image" />
        <h1 className="text-5xl font-bold">Check Out</h1>
      </div> */}
      <div
        className="pt-20 bg-cover bg-center h-[300px] flex items-center justify-center"
        style={{ backgroundImage: `url(${checkOut})` }}
      >
        <h1 className="text-5xl font-bold text-white">Check Out</h1>
      </div>
      <div>
        <Footer/>
      </div>
    </div>
  );
}

export default ChecOut
