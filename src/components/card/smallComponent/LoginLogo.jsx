import { FaFacebookF, FaGoogle, FaLinkedinIn } from "react-icons/fa";


function LoginLogo() {
  return (
    <div>
      <div className="flex gap-4 justify-center pt-4 ">
        <div className="bg-[#F5F5F8] p-3 rounded-full">
          <FaFacebookF size={'1.5rem'} color="#3B5998" />
        </div>
        <div className="bg-[#F5F5F8] p-3 rounded-full">
          <FaLinkedinIn size={'1.5rem'} color="#0A66C2" />
        </div>
        <div className="bg-[#F5F5F8] p-3 rounded-full">
          <FaGoogle size={'1.5rem'} color="#EB4132" />
        </div>
      </div>
    </div>
  );
}

export default LoginLogo
