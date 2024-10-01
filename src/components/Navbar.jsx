// import { TiShoppingCart } from "react-icons/ti";
import logoimage from "../assets/logo/Logo.png";
import { FaBars } from "react-icons/fa";
import { Link } from "react-router-dom";



function Navbar() {
  return (
    <div className="flex justify-between items-center fixed w-full bg-orange-50	 p-3 px-4 md:px-10 lg:px-20 z-50">
      <div className="flex items-center">
        <button className="md:hidden">
          {' '}
          {/* Hamburger menu visible on mobile */}
          <FaBars />
        </button>
          <div className="hidden md:flex gap-3">
            {' '}
            {/* Hidden on mobile */}
            <div className="w-14">
              <img alt="Tailwind CSS Navbar component" src={logoimage} />
            </div>
            <div className="pl-20 flex gap-5">
              <Link
                to="/"
                className="btn glass flex border-white border rounded-lg px-4 py-2 items-center gap-2 bg-orange-100	 hover:bg-orange-300"
              >
                Home
              </Link>
              <Link
                to="/DoctorP"
                className="btn glass flex border-white border rounded-lg px-4 py-2 items-center gap-2 bg-orange-100	 hover:bg-orange-300"
              >
                About
              </Link>
              <Link
                to="/appointment"
                className="btn glass flex border-white border rounded-lg px-4 py-2 items-center gap-2 bg-orange-100 hover:bg-orange-300"
              >
                Services
              </Link>
              <Link
                to="/patientDash"
                className="btn glass flex border-white border rounded-lg px-4 py-2 items-center gap-2 bg-orange-100 hover:bg-orange-300"
              >
                Blog
              </Link>
              <Link
                to="/patientDash"
                className="btn glass flex border-white border rounded-lg px-4 py-2 items-center gap-2 bg-orange-100 hover:bg-orange-300"
              >
                Contact
              </Link>
            </div>
          </div>
      </div>
    </div>
  );
}

export default Navbar