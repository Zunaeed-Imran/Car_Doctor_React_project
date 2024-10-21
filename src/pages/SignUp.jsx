import { Link } from "react-router-dom";
import signupimg from "../assets/cardImage/Frame (1).png";
import LoginLogo from "../components/card/smallComponent/LoginLogo";

function SignUp() {
  return (
    <div>
      <div className="grid grid-cols-1 md:grid-cols-2 justify-center items-center">
        <div className="">
          <img src={signupimg} alt="Sign Up Image" />
        </div>
        <div className="pt-32 items-center justify-center">
          <div className="md:border-2 border-[#D0D0D0] rounded-md md:p-10 md:px-20">
            <div className=" items-center py-3 pb-5">
              <h1 className="text-3xl font-bold">Sign Up</h1>
            </div>
            <form
              action=""
              className="flex flex-col justify-center items-start gap-4"
            >
              <label htmlFor="" className="font-bold items-baseline">
                Name
              </label>
              <input
                type="text"
                placeholder="Your name"
                className="input input-bordered w-full max-w-xs"
              />
              <label htmlFor="" className="font-bold">
                Email
              </label>
              <input
                type="email"
                placeholder="Your email"
                className="input input-bordered w-full max-w-xs"
              />
              <label htmlFor="" className="font-bold">
                Confirm Password
              </label>
              <input
                type="password"
                placeholder="Your Password"
                className="input input-bordered w-full max-w-xs"
              />
            </form>
            <div className="items-center p-2 w-full">
              <Link to="ok2" className="btn bg-[#ff3811] text-white">
                Sign Up
              </Link>
            </div>
            <div className="py-4">
              <p>Or Sign Up with</p>
              <LoginLogo />
            </div>
            <div className="py-5">
              <p>
                Already have account?
                <Link className="link text-orange-600" to="/login">
                  Login
                </Link>
              </p>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}

export default SignUp
