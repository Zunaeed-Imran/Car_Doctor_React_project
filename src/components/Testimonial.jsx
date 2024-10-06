import ReviewCard from "./card/ReviewCard";


function Testimonial() {
  return (
    <div>
      <div>
        <p className="text-xl font-bold text-orange-600 py-3">Testimonial</p>
        <h1 className="text-3xl font-bold">What Customer Says</h1>
        <p className="py-2">
          the majority have suffered alteration in some form, by injected
          humour, or randomised <br /> words which donSt look even slightly
          believable.
        </p>
      </div>
      <div>
        <ReviewCard/>
      </div>
    </div>
  );
}

export default Testimonial
