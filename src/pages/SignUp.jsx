import { Link } from "react-router-dom";
import signupimg from "../assets/cardImage/Frame (1).png";

function SignUp() {
  return (
    <div>
      <div className="">
        <div className="">
          <img src={signupimg} alt="Sign Up Image" />
        </div>
        <div className="">
          <div className="">
            <form action="" className="flex flex-col items-center">
              <h1>Sign Up</h1>
              <label htmlFor="" className="">
                Name
              </label>
              <input
                type="text"
                placeholder="Your name"
                className="input input-bordered w-full max-w-xs"
              />
              <label htmlFor="" className="">
                Email
              </label>
              <input
                type="email"
                placeholder="Your email"
                className="input input-bordered w-full max-w-xs"
              />
              <label htmlFor="" className="">
                Confirm Password
              </label>
              <input
                type="password"
                placeholder="Your Password"
                className="input input-bordered w-full max-w-xs"
              />
              <div>
                <Link to="ok2" className="btn bg-orange-600 text-white">
                  Sign Up
                </Link>
              </div>
            </form>
            <div className="py-5">
              <p>
                Already have account?
                <Link className="link bg-orange-600 text-white" to="/login">
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
