import PropTypes from 'prop-types';



function ManageOrderCard({logo, img, name, color, size, mail, date, button}) {
  return (
    <div>
      <p>{logo}</p>
      <img src={img} alt="carEngine" />
      <p>{name}</p>
      <p>{color}</p>
      <p>{size}</p>
      <p>{mail}</p>
      <p>{date}</p>
      <p>{button}</p>
    </div>
  )
}

export default ManageOrderCard

ManageOrderCard.propTypes = {
  logo: PropTypes.string,
  img: PropTypes.string,
  name: PropTypes.text,
  color: PropTypes.text,
  size: PropTypes.string,
  mail: PropTypes.string,
  date: PropTypes.date,
  button: PropTypes.string,
};