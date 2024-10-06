import $aboutimg from "../assets/cardImage/aboutComponent.png";

function AboutUs() {
  return (
    <div className="p-10 grid grid-cols-2">
      <div>
        <img src={$aboutimg} alt="" />
      </div>
      <div className="flex flex-col justify-between">
        <h3 className="text-xl text-orange-600 font-bold mb-3 text-left">
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
        <button className="btn bg-orange-600 hover:bg-orange-700 text-white w-40">
          Get More Info
        </button>
      </div>
    </div>
  );
}

export default AboutUs
