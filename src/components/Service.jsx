import $electricimg from "../assets/cardImage/maintanance.png";
import $maontanance from "../assets/cardImage/Machanic.png";
import $autoCar from "../assets/cardImage/Rectangle 7 (2).png";
import $Elictrical from "../assets/cardImage/Elictric.png";
import $engineOil from "../assets/cardImage/engineOil.png";
import $autoRepiar from "../assets/cardImage/autoCarRepiar.png";
import ServiceContact from "./card/ServiceContact";
import ServiceCard from "./card/ServiceCard";
import { Link } from "react-router-dom";


function Service() {
  return (
    <div>
      <div id="service" className="flex flex-col gap-3 pb-5">
        <p className="text-xl font-bold text-[#ff3811] p-3">Service</p>
        <h1 className="text-5xl font-bold pb-5">Our Service Area</h1>
        <p className="mb-3">
          the majority have suffered alteration in some form, by injected
          humour, or randomised <br /> words which dont look even slightly
          believable.
        </p>
      </div>
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3">
        <ServiceCard
          img={$electricimg}
          name={'Electrical System'}
          price={'Price : $20.00'}
        />
        <ServiceCard
          img={$maontanance}
          name={'Engine Diagnostics'}
          price={'Price : $20.00'}
        />
        <ServiceCard
          img={$autoCar}
          name={'Auto Car Repiar'}
          price={'$20.00'} />
        <ServiceCard
          img={$Elictrical}
          name={'Electrical System'}
          price={'Price : $20.00'}
        />
        <ServiceCard
          img={$engineOil}
          name={'Engine Diagnostice'}
          price={'Price : $20.00'}
        />
        <ServiceCard
          img={$autoRepiar}
          name={'Auto Car Repiar'}
          price={'Price : $20.00'}
        />
      </div>
      <div className="py-8 pb-20">
        <Link
          to="/servicedetails"
          className="btn btn-outline hover:bg-[#ff3811] text-[#ff3811]"
        >
          More Service
        </Link>
      </div>
      <div>
        <ServiceContact />
      </div>
    </div>
  );
}

export default Service
