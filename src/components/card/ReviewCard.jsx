import PropTypes from "prop-types";

function ReviewCard({ img, name, logo, title, comment, star }) {
  return (
    <div className="flex flex-col gap-5 items-start py-2 pl-10 pb-10 border border-[#E8E8E8] m-2 rounded-md">
      <div className="grid grid-cols-2 md:grid-cols-3 gap-4 ">
        <div className="pl-2 pt-4">
          <img src={img} alt="" className="" />
        </div>
        <div className="pr-28 text-left">
          <p className="text-xl font-bold pb-2 whitespace-nowrap">{name}</p>
          <p className="text-xl">{title}</p>
        </div>
        <div className="justify-end items-end pr-5">
          <img src={logo} alt="quto" className="" />
        </div>
      </div>
      <div className="w-full text-left leading-loose">{comment}</div>
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