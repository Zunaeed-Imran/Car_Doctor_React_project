import { HiArrowSmLeft, HiArrowSmRight } from "react-icons/hi";
import $heroImg from "../assets/pageImage/heroShadow.png";


function Hero() {
  return (
    <div
      className="bg-cover bg-center h-[300px] flex items-start justify-start rounded-md mb-28"
      style={{ backgroundImage: `url(${$heroImg})` }}
    >
      <div>
        <h1 className="mb-5 text-5xl font-bold text-white text-left pl-10">
          Affordable <br /> Price For Car <br /> Servicing
        </h1>
        <p className="mb-5 text-white">
          There are many variations of passages of available, but the majority
          have suffered alteration in some form
        </p>
        <button className="btn bg-orange-600 hover:bg-orange-500 text-white">
          Discover More
        </button>
        <button className="btn btn-outline hover:bg-orange-600 text-white">
          Latest Project
        </button>
      </div>
      <div>
        <button className="btn btn-circle btn-outline bg-[#FF4500]">
          <HiArrowSmLeft size="1.5rem" />
        </button>
        <button className="btn btn-circle btn-outline bg-[#FF4500]">
          <HiArrowSmRight size="1.5rem" />
        </button>
      </div>
    </div>
  );
}

export default Hero
