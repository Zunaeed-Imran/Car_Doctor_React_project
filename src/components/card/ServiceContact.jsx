import { FaLocationDot } from 'react-icons/fa6';
import { MdAddIcCall } from 'react-icons/md';
import { SlCalender } from 'react-icons/sl';

function ServiceContact() {
  return (
    <div className="bg-black text-white p-20 rounded-md">
      <div className="flex flex-row gap-11 justify-between">
        <div className=''>
          <div>
            <SlCalender size={'2rem'}/>
          </div>
          <div>
            <p className='text-xl'>We are open monday-friday</p>
            <p className='text-2xl font-bold'>7:00 am - 9:00 pm</p>
          </div>
        </div>
        <div>
          <div>
            <MdAddIcCall size={'2rem'}/>
          </div>
          <p className='text-xl'>Have a question?</p>
          <p className='text-2xl font-bold'>+2546 251 2658</p>
        </div>
        <div>
          <div>
            <FaLocationDot size={'2rem'}/>
          </div>
          <p className='text-xl'>Need a repair? our address</p>
          <p className='text-2xl font-bold'>Liza Street, New York</p>
        </div>
      </div>
    </div>
  );
}

export default ServiceContact;

