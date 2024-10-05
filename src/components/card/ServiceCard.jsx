import PropTypes from 'prop-types';



function ServiceCard({img, name, price}) {
  return (
    <div>
      <div className="">
          <img src={img} alt="" />
        <p>{name}</p>
        <p>{price}</p>
      </div>
    </div>
  )
}

export default ServiceCard




ServiceCard.propTypes = {
  img: PropTypes.string,
  name: PropTypes.text,
  price: PropTypes.string
};