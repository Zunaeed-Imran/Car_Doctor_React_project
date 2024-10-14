// import { TiShoppingCart } from "react-icons/ti";
import { CiSearch, CiShoppingBasket } from "react-icons/ci";
import logoimage from "../assets/logo/Logo.png";
import { FaBars } from "react-icons/fa";
// import { Link } from "react-router-dom";
// import { Link } from "react-scroll";
import { Link as RouterLink } from "react-router-dom";
import { Link as ScrollLink } from "react-scroll";
import AppointmentButton from "./card/button/AppointmentButton";



function Navbar() {
  return (
    <div className="flex top-0 justify-between items-center fixed w-full bg-slate-50	 p-3 px-4 md:px-10 lg:px-20 z-50">
      <div className="flex items-center">
        <button className="md:hidden">
          {" "}
          {/* Hamburger menu visible on mobile */}
          <FaBars />
        </button>
        <div className="hidden md:flex gap-3">
          {" "}
          {/* Hidden on mobile */}
          <div className="w-14">
            <img alt="Tailwind CSS Navbar component" src={logoimage} />
          </div>
          <div className="pl-20 flex gap-5">
            <RouterLink
              to="/"
              smooth={true}
              duration={500}
              className="btn glass flex border-white border rounded-lg px-4 py-2 items-center gap-2 bg-slate-100	 "
            >
              Home
            </RouterLink>
            <ScrollLink
              to="aboutus"
              smooth={true}
              duration={500}
              className="btn glass flex border-white border rounded-lg px-4 py-2 items-center gap-2 bg-slate-100	 "
            >
              About
            </ScrollLink>
            <ScrollLink
              to="service"
              smooth={true}
              duration={500}
              className="btn glass flex border-white border rounded-lg px-4 py-2 items-center gap-2 bg-slate-100 "
            >
              Services
            </ScrollLink>
            <ScrollLink
              to="popularproduct"
              smooth={true}
              duration={500}
              className="btn glass flex border-white border rounded-lg px-4 py-2 items-center gap-2 bg-slate-100 "
            >
              Blog
            </ScrollLink>
            <ScrollLink
              to="contact"
              smooth={true}
              duration={500}
              className="btn glass flex border-white border rounded-lg px-4 py-2 items-center gap-2 bg-slate-100 "
            >
              Contact
            </ScrollLink>
            <RouterLink
              to="/login"
              className="btn glass flex border-white border rounded-lg px-4 py-2 items-center gap-2 bg-slate-100 "
            >
              Login
            </RouterLink>
          </div>
          <div className="flex pl-20">
            <RouterLink
              to="/cardetails"
              className="btn glass flex border-white border rounded-lg px-4 py-2 items-center gap-2"
            >
              <CiShoppingBasket size={"1.5rem"} />
            </RouterLink>
            <RouterLink
              to="/manageorder"
              className="btn glass flex border-white border rounded-lg px-4 py-2 items-center gap-2"
            >
              <CiSearch size={"1.5rem"} />
            </RouterLink>
            <RouterLink to="/checkout">
              <AppointmentButton />
            </RouterLink>
          </div>
        </div>
      </div>
    </div>
  );
}

export default Navbar
