import PropTypes from 'prop-types';

function PopularProductCard({img, star, name, price}) {
  return (
    <div>
      <div>
        img={img}
        star={star}
        name={name}
        price={price}
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