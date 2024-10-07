import PropTypes from "prop-types";

function ReviewCard({ img, name, logo, title, comment, star }) {
  return (
    <div className="flex flex-col gap-2 items-start py-2 pl-10">
      <div className="flex flex-row gap-10 justify-between w-full">
        <div className="pl-5">
        <img src={img} alt="" className="" />
        </div>
        <div className="pr-28">
        <h2 className="text-2xl font-bold ">{name}</h2>
        <h2 className="text-xl font-bold">{title}</h2>
        </div>
        <div className="justify-end items-end pr-5">
        <img src={logo} alt="quto" className="" />
        </div>
      </div>
      <div className="w-full text-left">
        {comment}
      </div>
      {star}
    </div>
  );
}

export default ReviewCard

ReviewCard.propTypes = {
  img: PropTypes.string,
  name: PropTypes.text,
  logo: PropTypes.string,
  title: PropTypes.text,
  comment: PropTypes.text,
  star: PropTypes.string,
};