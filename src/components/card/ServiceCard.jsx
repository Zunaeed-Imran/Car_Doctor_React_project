import PropTypes from 'prop-types';



function ServiceCard({img, name, price}) {
  return (
    <div>
      <div className="">
        <figure>{img}</figure>
        <p>{name}</p>
        <p>{price}</p>
      </div>
    </div>
  )
}

export default ServiceCard




ServiceCard.propTypes = {
  img: PropTypes.string,
  name: PropTypes.string,
  price: PropTypes.string
};