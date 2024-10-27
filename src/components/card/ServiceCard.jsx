import PropTypes from 'prop-types';



function ServiceCard({img, name, price}) {
  return (
    <div className="">
      <div className="flex flex-col border border-[#E8E8E8] m-2 rounded-md p-4">
        <img src={img} alt="" className=''/>
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