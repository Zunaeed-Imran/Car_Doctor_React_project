import ReviewCard from "./card/ReviewCard";
import RatingProduct from "./card/smallComponent/RatingProduct";
import man1 from "../assets/avater/man2.png";
import man2 from "../assets/avater/man1.png";

function Testimonial() {
  return (
    <div className="p-10">
      <div className="flex flex-col gap-3 pb-7">
        <p className="text-xl font-bold text-orange-600 py-3">Testimonial</p>
        <h1 className="text-5xl font-bold">What Customer Says</h1>
        <p className="py-2">
          The majority have suffered alteration in some form, by injected
          humour, or randomised <br /> words which donSt look even slightly
          believable.
        </p>
      </div>
      <div>
        <ReviewCard
          img={man1}
          name={'Awlad Hossain'}
          title={'Businessman'}
          comment={'There are many variations of passages of Lorem Ipsum available, but the majority have suffered alteration in some form, by injected humour, or randomised words which dont look even slightly believable'}
          star={<RatingProduct/>}
        />
        <ReviewCard
          img={man2}
          name={'Awlad Hossain'}
          title={'Businessman'}
          comment={'There are many variations of passages of Lorem Ipsum available, but the majority have suffered alteration in some form, by injected humour, or randomised words which dont look even slightly believable'}
          star={<RatingProduct/>}
        />
      </div>
    </div>
  );
}

export default Testimonial
