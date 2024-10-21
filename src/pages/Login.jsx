import { Link } from "react-router-dom";
import loginimg from "../assets/cardImage/Frame (1).png";
import LoginLogo from "../components/card/smallComponent/LoginLogo";

function Login() {
  return (
    <div>
      <div className="grid grid-cols-2 justify-center items-center">
        <div className="pt-32 items-center">
          <img src={loginimg} alt="" />
        </div>
        <div className="pt-32 items-center justify-center">
          <div className="">
            <form action="" className="">
              <h1 className="text-3xl font-bold py-7">Login</h1>
              <label htmlFor="" className="font-semibold m-1 text-left">
                Email
              </label>
              <input
                type="email"
                placeholder="Your email"
                className="input input-bordered w-full max-w-xs"
              />
              <label htmlFor="" className="font-semibold m-1 text-left">
                Confirm Password
              </label>
              <input
                type="password"
                placeholder="Your password"
                className="input input-bordered w-full max-w-xs"
              />
              <div>
                <Link to="/ok" className="btn bg-[#ff3811] text-white">
                  Login
                </Link>
              </div>
            </form>
            <div className="py-4">
              <p>Or Sign In with</p>
              <LoginLogo/>
            </div>
            <div className="py-5">
              <p>
                Dont have account?
                <Link className="link  text-orange-600" to="/signup">
                  Sign-Up
                </Link>
              </p>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}

export default Login
