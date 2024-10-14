import PropTypes from 'prop-types';


function TeamCard({img, name, title, socialLogo}) {
  return (
    <div className='flex flex-col items-center gap-2 py-2 pb-8'>
      <figure>
        <img src={img} alt="" />
      </figure>
      <p className='text-2xl font-bold'>{name}</p>
      <p className='text-xl'>{title}</p>
      <p className='flex'>{socialLogo}</p>
    </div>
  )
}

export default TeamCard

TeamCard.propTypes = {
  img: PropTypes.string,
  name: PropTypes.text,
  title: PropTypes.text,
  socialLogo: PropTypes.string,
}