import { FaLocationDot } from 'react-icons/fa6';
import { MdAddIcCall } from 'react-icons/md';
import { SlCalender } from 'react-icons/sl';

function ServiceContact() {
  return (
    <div>
      <div className="bg-black text-white">
        <div>
          <div>
            <SlCalender />
          </div>
          <p>We are open monday-friday</p>
          <p>7:00 am - 9:00 pm</p>
        </div>
        <div>
          <div>
            <MdAddIcCall />
          </div>
          <p>Have a question?</p>
          <p>+2546 251 2658</p>
        </div>
        <div>
          <div>
            <FaLocationDot />
          </div>
          <p>Need a repair? our address</p>
          <p>Liza Street, New York</p>
        </div>
      </div>
    </div>
  );
}

export default ServiceContact;

