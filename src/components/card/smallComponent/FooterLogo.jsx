import { FaGoogle, FaInstagram, FaLinkedin, FaTwitter } from "react-icons/fa";


function FooterLogo() {
  return (
    <div>
      <div className="flex gap-2">
        <FaGoogle />
        <FaTwitter />
        <FaInstagram />
        <FaLinkedin />
      </div>
    </div>
  );
}

export default FooterLogo
