import PropTypes from "prop-types";


function UniqueCarCard({heading, details}) {
  return (
    <div>
      <div className="grid grid-cols-2">
        <h1 className="text-2xl font-bold text-left">{heading}</h1>
        <p className="text-left leading-normal">{details}</p>
      </div>
    </div>
  );
}

export default UniqueCarCard

UniqueCarCard.propTypes = {
  heading: PropTypes.text,
  details: PropTypes.text,
};