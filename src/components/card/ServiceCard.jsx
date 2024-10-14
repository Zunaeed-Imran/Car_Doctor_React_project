import PropTypes from 'prop-types';



function ServiceCard({img, name, price}) {
  return (
    <div>
      <div className="">
        <img src={img} alt="" />
        <p className="text-2xl font-bold text-left py-2">{name}</p>
        <p className="text-xl font-bold text-left pb-2 text-[#ff3811]">
          {price}
        </p>
      </div>
    </div>
  );
}

export default ServiceCard




ServiceCard.propTypes = {
  img: PropTypes.string,
  name: PropTypes.text,
  price: PropTypes.string
};