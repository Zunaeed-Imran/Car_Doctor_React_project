import PropTypes from 'prop-types';

function SimpleStepCard({logo, heading, desc}) {
  return (
    <div>
      <div className="flex flex-col gap-4 items-center p-6 bg-slate-100 m-2 rounded-md">
        <h1 className="text-5xl text-[#ff3811] text-center items-center">
          {logo}
        </h1>
        <h1 className="text-2xl font-bold">{heading}</h1>
        <p className="leading-relaxed whitespace-pre-line text-center">
          {desc}
        </p>
      </div>
    </div>
  );
}

export default SimpleStepCard


SimpleStepCard.propTypes = {
  logo: PropTypes.string,
  heading: PropTypes.text,
  desc: PropTypes.text,
};