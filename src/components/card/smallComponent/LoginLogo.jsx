import { FaFacebookF, FaGoogle, FaLinkedinIn } from "react-icons/fa";


function LoginLogo() {
  return (
    <div>
      <div className="flex gap-4 justify-center pt-4">
        <FaFacebookF />
        <FaLinkedinIn />
        <FaGoogle />
      </div>
    </div>
  );
}

export default LoginLogo
