import $aboutimg from "../assets/cardImage/aboutComponent.png";

function AboutUs() {
  return (
    <div className="p-10">
      <div>
        <img src={$aboutimg} alt="" />
      </div>
      <div>
        <h3 className="text-xl font-bold mb-3">This is about page</h3>
        <h1 className="text-3xl font-bold mb-3">
          We are qualified & of experience in this field
        </h1>
        <p className="text-xl mb-2">
          There are many variations of passages of Lorem Ipsum available, but
          the majority have suffered alteration in some form, by injected
          humour, or randomised words which dont look even slightly believable.
        </p>
        <p className="text-xl mb-3">
          the majority have suffered alteration in some form, by injected
          humour, or randomised words which dont look even slightly believable.
        </p>
      </div>
    </div>
  );
}

export default AboutUs
