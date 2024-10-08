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
      <div className="py-20">
        <form action="" className="form-control">
          <div className="grid grid-cols-2 justify-center items-center gap-7 pl-16">
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
          <div>
            <input
              type="textarea"
              placeholder="Your Message"
              className="block text-sm font-medium leading-6 text-gray-900"
            />
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
