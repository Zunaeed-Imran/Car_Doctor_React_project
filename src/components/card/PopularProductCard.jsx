import PropTypes from 'prop-types';

function PopularProductCard({img, star, name, price}) {
  return (
    <div>
      <div className="flex flex-col items-center gap-2 py-2 rounded-md">
        <img src={img} alt="carEngine" className="block bg-[#F3F3F3] p-2 rounded-md" />
        <p>{star}</p>
        <p className="text-2xl font-bold text-center py-2">{name}</p>
        <p className="text-xl font-bold text-center pb-2 text-[#ff3811]">
          {price}
        </p>
      </div>
    </div>
  );
}

export default PopularProductCard


PopularProductCard.propTypes = {
  img: PropTypes.string,
  star: PropTypes.string,
  name: PropTypes.text,
  price: PropTypes.string
}