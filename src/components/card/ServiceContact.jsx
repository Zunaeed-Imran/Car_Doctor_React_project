import { FaLocationDot } from 'react-icons/fa6';
import { MdAddIcCall } from 'react-icons/md';
import { SlCalender } from 'react-icons/sl';

function ServiceContact() {
  return (
    <div id="contact" className="bg-black text-white p-20 rounded-md">
      <div className="grid grid-cols-1 gap-6 md:grid-cols-3">
        <div className="text-left">
          <p className="text-xl flex items-center gap-3">
            <SlCalender size={"2rem"} /> We are open monday-friday
          </p>
          <p className="text-2xl font-bold">7:00 am - 9:00 pm</p>
        </div>
        <div className="text-left">
          <p className="text-xl flex items-center gap-3">
            <MdAddIcCall size={"2rem"} />
            Have a question?
          </p>
          <p className="text-2xl font-bold">+2546 251 2658</p>
        </div>
        <div className="text-left">
          <p className="text-xl flex items-center gap-3">
            <FaLocationDot size={"2rem"} />
            Need a repair? our address
          </p>
          <p className="text-2xl font-bold">Liza Street, New York</p>
        </div>
      </div>
    </div>
  );
}

export default ServiceContact;

