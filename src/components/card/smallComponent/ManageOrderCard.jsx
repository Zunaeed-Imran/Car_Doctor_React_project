import PropTypes from 'prop-types';



function ManageOrderCard({logo, img, name, color, size, mail, date, button}) {
  return (
    <div className="grid md:grid-cols-3 md:pb-5 lg:grid-cols-6 justify-between lg:px-20 items-center gap-4">
      <p className="text-2xl bg-black rounded-full text-white h-10 w-10 p-3 flex items-center">{logo}</p>
      <img src={img} alt="carEngine" />
      <div className="text-left">
        <p className="text-xl font-bold">{name}</p>
        <p>{color}</p>
        <p>{size}</p>
      </div>
      <p className="font-bold">{mail}</p>
      <p className="font-bold">{date}</p>
      <p>{button}</p>
    </div>
  );
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