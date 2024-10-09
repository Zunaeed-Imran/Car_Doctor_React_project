import PropTypes from 'prop-types';

function CartCard({logo, img, name, color, size, price, date, logo2}) {
  return (
    <div className="flex flex-row justify-between">
      <p>{logo}</p>
      <img src={img} alt="product" />
      <div>
        <p>{name}</p>
        <p>{color}</p>
        <p>{size}</p>
      </div>
      <p>{price}</p>
      <p>{date}</p>
      <p>{logo2}</p>
    </div>
  )
}

export default CartCard

CartCard.propTypes = {
  logo: PropTypes.string,
  img: PropTypes.string,
  name: PropTypes.text,
  color: PropTypes.string,
  size: PropTypes.string,
  price: PropTypes.string,
  date: PropTypes.date,
  logo2: PropTypes.string,
};