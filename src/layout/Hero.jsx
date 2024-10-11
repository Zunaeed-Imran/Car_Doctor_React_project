// import { HiArrowSmLeft, HiArrowSmRight } from "react-icons/hi";
import $heroImg from "../assets/pageImage/heroShadow.png";


function Hero() {
  return (
    <div className="pt-1">
      <div className="hero">
        <img src={$heroImg} alt="hero-image"/>
        <div className="rounded-md"></div>
        <div className="hero-content text-neutral-content text-center">
          <div className="max-w-md">
            <h1 className="mb-5 text-5xl font-bold">
              Affordable Price For Car Servicing
            </h1>
            <p className="mb-5">
              There are many variations of passages of available, but the
              majority have suffered alteration in some form
            </p>
            <div className="flex gap-3">
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
        </div>
      </div>
    </div>
  );
}

export default Hero
