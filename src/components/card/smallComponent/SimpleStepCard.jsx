import PropTypes from 'prop-types';

function SimpleStepCard({logo, heading, desc}) {
  return (
    <div>
      <div className='flex flex-col gap-4 justify-center items-center p-6'>
        <h1 className='text-5xl text-orange-600 text-center items-center'>{logo}</h1>
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