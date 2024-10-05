import RatingProduct from "./card/smallComponent/RatingProduct";
import carEngine from "../assets/cardImage/engine.png";
import PopularProductCard from "./card/PopularProductCard";

function PopularProduct() {
  return (
    <div className="p-10">
      <div>
        <p className="text-xl font-bold text-orange-600">Popular Products</p>
        <h1 className="text-3xl font-bold">Browse Our Products</h1>
        <p>
          the majority have suffered alteration in some form, by injected
          humour, or randomised <br /> words which dont look even slightly
          believable.
        </p>
      </div>
      <div>
        <PopularProductCard
          img={carEngine}
          name={'Car Engine Plug'}
          price={'$20.00'} />
        <p>
          <RatingProduct />
        </p>
      </div>
    </div>
  );
}

export default PopularProduct
