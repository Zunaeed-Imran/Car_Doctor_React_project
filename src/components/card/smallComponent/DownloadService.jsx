import { IoDocumentTextOutline } from "react-icons/io5";
import { PiArrowSquareRightFill } from "react-icons/pi";


function DownloadService() {
  return (
    <div>
      <div className="bg-black text-white rounded-md my-8">
        <div>
          <h1 className="text-3xl font-bold p-7 text-left">Download</h1>
        </div>
        <div className="flex flex-row justify-between items-center p-5">
          <div>
            <IoDocumentTextOutline size={'2.5rem'} />
          </div>
          <div>
            <h1 className="text-xl font-bold">Our Brochure</h1>
            <p className="text-left">Download</p>
          </div>
          <div className="text-white">
            <PiArrowSquareRightFill size={'3.5rem'} color="red" />
          </div>
        </div>
        <div className="flex flex-row justify-between items-center p-5">
          <div>
            <IoDocumentTextOutline size={'2.5rem'} />
          </div>
          <div className="">
            <h1 className="text-xl font-bold">Our Brochure</h1>
            <p className="text-left">Download</p>
          </div>
          <div className="text-white">
            <PiArrowSquareRightFill
              size={'3.5rem'}
              color="red"
            />
          </div>
        </div>
      </div>
    </div>
  );
}

export default DownloadService
