import PropTypes from 'prop-types';

function PopularProductCard({img, star, name, price}) {
  return (
    <div>
      <div>
        <figure>
          {img}
        </figure>
        <p>{star}</p>
        <p>{name}</p>
        <p>{price}</p>
      </div>
    </div>
  )
}

export default PopularProductCard


PopularProductCard.propTypes = {
  img: PropTypes.string,
  star: PropTypes.string,
  name: PropTypes.text,
  price: PropTypes.string
}