import { FaTools } from "react-icons/fa";
import { FcCustomerSupport } from "react-icons/fc";
import { IoTimer } from "react-icons/io5";
import { RiTeamFill } from "react-icons/ri";
import { SiAdguard } from "react-icons/si";
import { TbTruckDelivery } from "react-icons/tb";


function CoreFeatures() {
  return (
    <div>
      <div className="flex flex-col gap-3 py-10">
        <p className="text-xl font-bold text-[#ff3811] py-2">Core Features</p>
        <h1 className="text-5xl font-bold py-2">Why Choose Us</h1>
        <p className="py-4">
          the majority have suffered alteration in some form, by injected
          humour, or randomised <br /> words which dont look even slightly
          believable.
        </p>
      </div>
      <div className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-6 ">
        <div className="flex flex-col items-center justify-center hover:bg-[#ff3811] p-3 rounded-md m-3 border border-[#E8E8E8]">
          <RiTeamFill size={'5rem'} className="pb-3" />
          <p className="text-xl font-bold text-center">Expart Team</p>
        </div>
        <div className="flex flex-col items-center justify-center hover:bg-[#ff3811] p-3 rounded-md m-3 border border-[#E8E8E8]">
          <IoTimer size={'5rem'} className="pb-3" />
          <p className="text-xl font-bold text-center">Timely Delivery</p>
        </div>
        <div className="flex flex-col items-center justify-center hover:bg-[#ff3811] p-3 rounded-md m-3 border border-[#E8E8E8]">
          <FcCustomerSupport size={'5rem'} className="pb-3" />
          <p className="text-xl font-bold text-center">24/7 Support</p>
        </div>
        <div className="flex flex-col items-center justify-center hover:bg-[#ff3811] p-3 rounded-md m-3 border border-[#E8E8E8]">
          <FaTools size={'5rem'} className="pb-3" />
          <p className="text-xl font-bold text-center">Best Equipment</p>
        </div>
        <div className="flex flex-col items-center justify-center hover:bg-[#ff3811] p-3 rounded-md m-3 border border-[#E8E8E8]">
          <SiAdguard size={'5rem'} className="pb-3" />
          <p className="text-xl font-bold text-center">100% Guranty</p>
        </div>
        <div className="flex flex-col items-center justify-center hover:bg-[#ff3811] p-3 rounded-md m-3 border border-[#E8E8E8]">
          <TbTruckDelivery size={'5rem'} className="pb-3" />
          <p className="text-xl font-bold text-center">Timely Delivery</p>
        </div>
      </div>
    </div>
  );
}

export default CoreFeatures
