import { Link } from "react-router-dom";
import loginimg from "../assets/cardImage/Frame (1).png";

function Login() {
  return (
    <div>
      <div className="flex">
        <div className="pt-32">
          <img src={loginimg} alt="" />
        </div>
        <div className="pt-20 hero">
          <div className="min-h-screen">
            <form action="" className="flex flex-col gap-2">
              <label htmlFor="" className="text-2xl font-semibold m-5">
                User Login
              </label>
              <input
                type="email"
                placeholder="Email"
                className="input input-bordered w-full max-w-xs"
              />
              <input
                type="password"
                placeholder="Password"
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
                <Link className="link bg-orange-600 text-white" to="/signup">
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
