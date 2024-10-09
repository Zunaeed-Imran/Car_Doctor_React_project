import PropTypes from 'prop-types';

function SimpleStepCard({logo, heading, desc}) {
  return (
    <div>
      <div className=''>
        <h1>{logo}</h1>
        <h1>{heading}</h1>
        <p>{desc}</p>
      </div>
    </div>
  )
}

export default SimpleStepCard


SimpleStepCard.propTypes = {
  logo: PropTypes.string,
  heading: PropTypes.text,
  desc: PropTypes.text,
};