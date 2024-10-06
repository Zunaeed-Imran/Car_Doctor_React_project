import { FaFacebook, FaInstagramSquare, FaLinkedin, FaTwitterSquare } from "react-icons/fa";


function TeamLogo() {
  return (
    <div>
      <div className="flex">
        <FaFacebook size={'2.5rem'} color="#395185" />
        <FaTwitterSquare size={'2.5rem'} color="#55ACEE" />
        <FaLinkedin size={'2.5rem'} color="#0A66C2" />
        <FaInstagramSquare size={'2.5rem'} color="#CC4587" />
      </div>
    </div>
  );
}

export default TeamLogo
