import PropTypes from 'prop-types';

function CartCard({logo, img, name, color, size, price, date, logo2}) {
  return (
    <div className="flex flex-row justify-between px-20">
      <p className="text-2xl text-center">{logo}</p>
      <img src={img} alt="product" />
      <div className='flex flex-col gap-2 pt-3'>
        <p className="font-bold text-xl">{name}</p>
        <p className="text-left">{color}</p>
        <p className="text-left">{size}</p>
      </div>
      <p className="font-bold">{price}</p>
      <p>{date}</p>
      <p>{logo2}</p>
    </div>
  );
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