import { FaFacebook, FaInstagramSquare, FaLinkedin, FaTwitterSquare } from "react-icons/fa";


function TeamLogo() {
  return (
    <div>
      <div className="flex">
        <FaFacebook size={'1.5rem'}/>
        <FaTwitterSquare size={'1.5rem'}/>
        <FaLinkedin size={'1.5rem'}/>
        <FaInstagramSquare size={'1.5rem'}/>
      </div>
    </div>
  );
}

export default TeamLogo
