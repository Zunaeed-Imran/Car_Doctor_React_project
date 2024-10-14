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
    <div className="p-10" id="popularproduct">
      <div className="flex flex-col gap-3 pb-7">
        <p className="text-xl font-bold text-[#ff3811] p-3 pt-14">
          Popular Products
        </p>
        <h1 className="text-5xl font-bold pb-5">Browse Our Products</h1>
        <p>
          the majority have suffered alteration in some form, by injected
          humour, or randomised <br /> words which dont look even slightly
          believable.
        </p>
      </div>
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3">
        <PopularProductCard
          img={carEngine}
          star={<RatingProduct />}
          name={"Car Engine Plug"}
          price={"$20.00"}
        />
        <PopularProductCard
          img={airFilter}
          star={<RatingProduct />}
          name={"Car Air Filter"}
          price={"$20.00"}
        />
        <PopularProductCard
          img={rearBreack}
          star={<RatingProduct />}
          name={"Cools Led Light"}
          price={"$20.00"}
        />
        <PopularProductCard
          img={frontBreack}
          star={<RatingProduct />}
          name={"Cools Led Light"}
          price={"$20.00"}
        />
        <PopularProductCard
          img={tair}
          star={<RatingProduct />}
          name={"Cools Led Light"}
          price={"$20.00"}
        />
        <PopularProductCard
          img={battery}
          star={<RatingProduct />}
          name={"Cools Led Light"}
          price={"$20.00"}
        />
      </div>
      <div className="p-10">
        <button className="btn btn-outline hover:bg-[#ff3811] text-[#ff3811]">
          More Product
        </button>
      </div>
    </div>
  );
}

export default PopularProduct
