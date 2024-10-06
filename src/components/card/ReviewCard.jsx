import PropTypes from "prop-types";

function ReviewCard({ img, name, title, comment, star }) {
  return (
    <div>
      <div className="">
        <img src={img} alt="" />
      </div>
      <h2>{name}</h2>
      <h2>{title}</h2>
      <p>{comment}</p>
      {star}
    </div>
  );
}

export default ReviewCard

ReviewCard.propTypes = {
  img: PropTypes.string,
  name: PropTypes.text,
  title: PropTypes.text,
  comment: PropTypes.text,
  star: PropTypes.string,
};