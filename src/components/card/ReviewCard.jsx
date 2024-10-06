import RatingProduct from "./smallComponent/RatingProduct";


function ReviewCard() {
  return (
    <div>
      <div className="">
        <img src="" alt="" />
      </div>
      <h2>Awlad Hossain</h2>
      <h2>Businessman</h2>
      <p>
        There are many variations of passages of Lorem Ipsum available, but the
        majority have suffered alteration in some form, by injected humour, or
        randomised words which dont look even slightly believable.
      </p>
      <RatingProduct />
    </div>
  );
}

export default ReviewCard
