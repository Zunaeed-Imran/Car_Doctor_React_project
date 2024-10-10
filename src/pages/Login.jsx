import { Link } from "react-router-dom";
import loginimg from "../assets/cardImage/Frame (1).png";

function Login() {
  return (
    <div>
      <div className="flex">
        <div className="pt-32">
          <img src={loginimg} alt="" />
        </div>
        <div className="pt-20 hero m-20">
          <div className="min-h-screen">
            <form action="" className="flex flex-col gap-2">
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
                <Link to="/ok" className="btn bg-orange-600 text-white">
                  Login
                </Link>
              </div>
            </form>
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
