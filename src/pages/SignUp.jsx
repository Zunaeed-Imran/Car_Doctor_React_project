import { Link } from "react-router-dom";


function SignUp() {
  return (
    <div className="pt-20 hero">
      <div className="min-h-screen">
        <form action="" className="flex flex-col gap-2">
          <label htmlFor="" className="text-2xl font-semibold m-5">
            Sign Up
          </label>
          <input
            type="text"
            placeholder="Name"
            className="input input-bordered w-full max-w-xs"
          />
          <input
            type="email"
            placeholder="Email"
            className="input input-bordered w-full max-w-xs"
          />
          <input
            type="password"
            placeholder="Confirm Password"
            className="input input-bordered w-full max-w-xs"
          />
          <div>
            <button className="btn bg-orange-600">Sign Up</button>
          </div>
        </form>
        <div className="py-5">
          <p>
            Already have account?
            <Link className="link bg-orange-600" to="/login">
              Login
            </Link>
          </p>
        </div>
      </div>
    </div>
  );
}

export default SignUp
