import { HiArrowSmLeft, HiArrowSmRight } from "react-icons/hi";
import $heroImg from "../assets/pageImage/heroShadow.png";


function Hero() {
  return (
    <div id="hero"
      className="relative pt-36 pl-20 bg-cover bg-center h-[600px] flex items-start justify-start rounded-md mb-28"
      style={{ backgroundImage: `url(${$heroImg})` }}
    >
      <div>
        <div className="leading-relaxed">
          <h1 className="mb-5 text-5xl font-bold text-white text-left md:pl-10">
            Affordable <br /> Price For Car <br /> Servicing
          </h1>
          <p className="mb-5 text-left text-white md:pl-10">
            There are many variations of passages of available, but <br />
            the majority have suffered alteration in some form
          </p>
        </div>
        <div className="flex text-left md:pl-10 gap-3">
          <button className="btn bg-[#ff3811] hover:bg-[#ff3811] text-white">
            Discover More
          </button>
          <button className="btn btn-outline hover:bg-[#ff3811] text-white">
            Latest Project
          </button>
        </div>
      </div>
      <div className="absolute bottom-4 right-4 flex gap-3">
        <button className="btn btn-circle btn-outline bg-[#ff3811]">
          <HiArrowSmLeft size="1.5rem" />
        </button>
        <button className="btn btn-circle btn-outline bg-[#ff3811]">
          <HiArrowSmRight size="1.5rem" />
        </button>
      </div>
    </div>
  );
}

export default Hero
