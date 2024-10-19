import Navbar from "../components/Navbar"
import checkOut from "../assets/pageImage/RectangleShadow.png";
import Footer from "../layout/Footer";
import { Link } from "react-router-dom";


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
        className="pt-36 bg-cover bg-center h-[300px] flex items-start justify-start rounded-md"
        style={{ backgroundImage: `url(${checkOut})` }}
      >
        <h1 className="text-5xl font-bold text-white pl-10">Check Out</h1>
      </div>
      <div className="my-20 p-20 rounded-md bg-[#F3F3F3]">
        <form action="" className="form-control">
          <div className="grid md:grid-cols-1 lg:grid-cols-2 justify-center items-center gap-7 lg:pl-16">
            <input
              type="text"
              placeholder="First Name"
              className="input input-bordered w-full max-w-xs"
            />
            <input
              type="text"
              placeholder="Last Name"
              className="input input-bordered w-full max-w-xs"
            />
            <input
              type="number"
              placeholder="Your Phone"
              className="input input-bordered w-full max-w-xs"
            />
            <input
              type="email"
              placeholder="Your Email"
              className="input input-bordered w-full max-w-xs"
            />
          </div>
          <div className="py-3 sm:pl-20 lg:p-5 justify-center items-center">
            <textarea
              type="textarea"
              placeholder="Your Message"
              className="textarea textarea-bordered lg:w-9/12 h-48 lg:mr-44"
            />
          </div>
          <div className="lg:pr-32 justify-center items-center">
            <Link className="btn w-52 bg-[#ff3811] text-white" to="/test4">
              Order Confirm
            </Link>
          </div>
        </form>
      </div>
      <div>
        <Footer />
      </div>
    </div>
  );
}

export default ChecOut
