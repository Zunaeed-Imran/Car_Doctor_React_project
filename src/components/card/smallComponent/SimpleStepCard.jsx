import PropTypes from 'prop-types';

function SimpleStepCard({logo, heading, desc}) {
  return (
    <div>
      <div className=''>
        <h1 className='text-5xl text-orange-600'>{logo}</h1>
        <h1 className='text-2xl font-bold'>{heading}</h1>
        <p className='leading-10'>{desc}</p>
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