import { FaArrowRight } from "react-icons/fa";


function Services() {
  return (
    <div>
      <div className="p-7 flex flex-col gap-4 bg-slate-100 mt-7 rounded-md">
        <div>
          <h1 className="text-2xl font-bold">Services</h1>
        </div>
        <div className="flex justify-between items-center px-5 bg-white hover:bg-[#ff3811] rounded-md p-3">
          <p className="font-bold text-xl">Full Car Repair</p>
          <FaArrowRight />
        </div>
        <div className="flex justify-between items-center px-5 bg-white hover:bg-[#ff3811] rounded-md p-3">
          <p className="font-bold text-xl">Engine Repair</p>
          <FaArrowRight />
        </div>
        <div className="flex justify-between items-center px-5 bg-white hover:bg-[#ff3811] rounded-md p-3">
          <p className="font-bold text-xl">Automatic Services</p>
          <FaArrowRight />
        </div>
        <div className="flex justify-between items-center px-5 bg-white hover:bg-[#ff3811] rounded-md p-3">
          <p className="font-bold text-xl">Engine Oil Change</p>
          <FaArrowRight />
        </div>
        <div className="flex justify-between items-center px-5 bg-white hover:bg-[#ff3811] rounded-md p-3">
          <p className="font-bold text-xl">Battery Charge</p>
          <FaArrowRight />
        </div>
      </div>
    </div>
  );
}

export default Services
