import $electricimg from "../assets/cardImage/maintanance.png";
import $maontanance from "../assets/cardImage/Machanic.png";
import $autoCar from "../assets/cardImage/Rectangle 7 (2).png";
import $Elictrical from "../assets/cardImage/Elictric.png";
import $engineOil from "../assets/cardImage/engineOil.png";
import $autoRepiar from "../assets/cardImage/autoCarRepiar.png";
import ServiceContact from "./card/ServiceContact";
import ServiceCard from "./card/ServiceCard";


function Service() {
  return (
    <div>
      <div>
        <p className="text-xl font-bold text-orange-600 p-3">Service</p>
        <h1 className="text-3xl font-bold pb-3">Our Service Area</h1>
        <p className="">
          the majority have suffered alteration in some form, by injected
          humour, or randomised <br /> words which dont look even slightly
          believable.
        </p>
      </div>
      <div className="">
        <ServiceCard
          img={$electricimg}
          name={'Electrical System'}
          price={'$20.00'}
        />
        <ServiceCard
          img={$maontanance}
          name={'Engine Diagnostics'}
          price={'$20.00'}
        />
        <ServiceCard img={$autoCar} name={'Auto Car Repiar'} price={'$20.00'} />
        <ServiceCard
          img={$Elictrical}
          name={'Electrical System'}
          price={'$20.00'}
        />
        <ServiceCard
          img={$engineOil}
          name={'Engine Diagnostice'}
          price={'$20.00'}
        />
        <ServiceCard
          img={$autoRepiar}
          name={'Auto Car Repiar'}
          price={'$20.00'}
        />

      </div>
      <div className="py-8">
        <button className="btn btn-outline hover:bg-orange-600 text-orange-600">
          More Service
        </button>
      </div>
      <div>
        <ServiceContact />
      </div>
    </div>
  );
}

export default Service
