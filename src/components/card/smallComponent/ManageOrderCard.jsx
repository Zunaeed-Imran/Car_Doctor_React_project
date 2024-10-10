import PropTypes from 'prop-types';



function ManageOrderCard({logo, img, name, color, size, mail, date, button}) {
  return (
    <div className='flex flex-row justify-between px-20 items-center'>
      <p className='text-2xl bg-black rounded-full text-white p-3'>{logo}</p>
      <img src={img} alt="carEngine" />
      <div className='text-left'>
        <p className='text-xl font-bold'>{name}</p>
        <p>{color}</p>
        <p>{size}</p>
      </div>
      <p className='font-bold'>{mail}</p>
      <p className='font-bold'>{date}</p>
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