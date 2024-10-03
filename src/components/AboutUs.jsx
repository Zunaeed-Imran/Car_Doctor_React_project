import $aboutimg from "../assets/cardImage/aboutComponent.png";

function AboutUs() {
  return (
    <div className="p-10">
      <div>
        <img src={$aboutimg} alt="" />
      </div>
      <div>
        <h1 className="text-2xl font-bold">This is about page</h1>
      </div>
    </div>
  )
}

export default AboutUs
