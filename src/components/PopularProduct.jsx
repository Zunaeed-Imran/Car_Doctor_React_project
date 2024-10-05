import RatingProduct from "./card/smallComponent/RatingProduct";
import PopularProductCard from "./card/PopularProductCard";
import carEngine from "../assets/cardImage/engine.png";
import airFilter from "../assets/cardImage/airFilter.png";
import rearBreack from "../assets/cardImage/rearbreak.png";
import frontBreack from "../assets/cardImage/front_break.png";
import tair from "../assets/cardImage/tair.png";
import battery from "../assets/cardImage/COOLS_LED.png";

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
          star={<RatingProduct />}
          name={'Car Engine Plug'}
          price={'$20.00'}
        />
        <PopularProductCard
          img={airFilter}
          star={<RatingProduct />}
          name={'Car Air Filter'}
          price={'$20.00'}
        />
        <PopularProductCard
          img={rearBreack}
          star={<RatingProduct />}
          name={'Cools Led Light'}
          price={'$20.00'}
        />
        <PopularProductCard
          img={frontBreack}
          star={<RatingProduct />}
          name={'Cools Led Light'}
          price={'$20.00'}
        />
        <PopularProductCard
          img={tair}
          star={<RatingProduct />}
          name={'Cools Led Light'}
          price={'$20.00'}
        />
        <PopularProductCard
          img={battery}
          star={<RatingProduct />}
          name={'Cools Led Light'}
          price={'$20.00'}
        />
      </div>
      
    </div>
  );
}

export default PopularProduct
