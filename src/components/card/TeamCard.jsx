import PropTypes from 'prop-types';


function TeamCard({img, name, title, socialLogo}) {
  return (
    <div>
      <figure>
        <img src={img} alt="" />
      </figure>
      <p>{name}</p>
      <p>{title}</p>
      <p>{socialLogo}</p>
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