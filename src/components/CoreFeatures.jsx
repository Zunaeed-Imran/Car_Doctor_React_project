import { FaTools } from "react-icons/fa";
import { FcCustomerSupport } from "react-icons/fc";
import { IoTimer } from "react-icons/io5";
import { RiTeamFill } from "react-icons/ri";
import { SiAdguard } from "react-icons/si";
import { TbTruckDelivery } from "react-icons/tb";


function CoreFeatures() {
  return (
    <div>
      <div className="py-4">
        <p className="text-xl font-bold text-orange-600 py-2">Core Features</p>
        <h1 className="text-3xl font-bold py-2">Why Choose Us</h1>
        <p className="py-4">
          the majority have suffered alteration in some form, by injected
          humour, or randomised <br /> words which dont look even slightly
          believable.
        </p>
      </div>
      <div>
        <RiTeamFill />
        <p>Expart Team</p>
        <IoTimer />
        <p>Timely Delivery</p>
        <FcCustomerSupport />
        <p>24/7 Support</p>
        <FaTools />
        <p>Best Equipment</p>
        <SiAdguard />
        <p>100% Guranty</p>
        <TbTruckDelivery />
        <p>Timely Delivery</p>
      </div>
    </div>
  );
}

export default CoreFeatures
