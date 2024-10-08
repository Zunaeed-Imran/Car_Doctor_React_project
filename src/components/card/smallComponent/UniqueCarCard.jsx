import PropTypes from "prop-types";


function UniqueCarCard({heading, details}) {
  return (
    <div>
      <div className="m-2 p-5 pl-8 bg-[#F3F3F3] rounded-md border-t-4 border-orange-500">
        <h1 className="text-xl font-bold text-left py-2">{heading}</h1>
        <p className="text-left leading-relaxed">{details}</p>
      </div>
    </div>
  );
}

export default UniqueCarCard

UniqueCarCard.propTypes = {
  heading: PropTypes.text,
  details: PropTypes.text,
};