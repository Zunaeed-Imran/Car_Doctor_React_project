import PropTypes from 'prop-types';

function PopularProductCard({img, name, price}) {
  return (
    <div>
      <div>
        <figure>
          {img}
        </figure>
        <p>{name}</p>
        <p>{price}</p>
      </div>
    </div>
  )
}

export default PopularProductCard


PopularProductCard.propTypes = {
  img: PropTypes.string,
  name: PropTypes.text,
  price: PropTypes.string
}