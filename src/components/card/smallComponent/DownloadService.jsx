import { IoDocumentTextOutline } from "react-icons/io5";
import { PiArrowSquareRightFill } from "react-icons/pi";


function DownloadService() {
  return (
    <div>
      <div>
        <div>
          <h1>Download</h1>
        </div>
        <div>
          <div>
            <IoDocumentTextOutline />
          </div>
          <div>
            <h1 className="text-xl font-bold">Our Brochure</h1>
            <p className="">Download</p>
          </div>
          <div>
            <PiArrowSquareRightFill />
          </div>
        </div>
      </div>
    </div>
  );
}

export default DownloadService
