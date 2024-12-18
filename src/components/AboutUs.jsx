import { Link } from "react-router-dom";
import $aboutimg from "../assets/cardImage/aboutComponent.png";

function AboutUs() {
  return (
    <div id="aboutus" className="p-10 grid md:grid-cols-2">
      <div>
        <img src={$aboutimg} alt="" />
      </div>
      <div className="flex flex-col justify-between">
        <h3 className="text-xl text-[#ff3811] font-bold mb-3 text-left">
          About Us
        </h3>
        <h1 className="text-5xl font-bold pb-8 text-left">
          We are qualified <br />
          & of experience <br />
          in this field
        </h1>
        <p className="text-xl mb-3 text-left">
          There are many variations of passages of Lorem Ipsum available, but
          the majority have suffered alteration in some form, by injected
          humour, or randomised words which dont look even slightly believable.
        </p>
        <p className="text-xl mb-3 text-left">
          the majority have suffered alteration in some form, by injected
          humour, or randomised words which dont look even slightly believable.
        </p>
        <Link
          to="/lalala"
          className="btn bg-[#ff3811] hover:bg-orange-700 text-white w-40"
        >
          Get More Info
        </Link>
      </div>
    </div>
  );
}

export default AboutUs
