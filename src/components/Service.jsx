import $electricimg from "../assets/cardImage/maintanance.png";
import $maontanance from "../assets/cardImage/Machanic.png";
import $autoCar from "../assets/cardImage/Rectangle 7 (2).png";
import $Elictrical from "../assets/cardImage/Elictric.png";
import $engineOil from "../assets/cardImage/engineOil.png";
import $autoRepiar from "../assets/cardImage/autoCarRepiar.png";


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
        <img src={$electricimg} alt="electrice system" />
        <p>name={'Electrical System'}</p>
        <p>price={'$20.00'}</p>
        <img src={$maontanance} alt="maintanance" />
        <p>name={'Engine Diagnostics'}</p>
        <p>price={'$20.00'}</p>
        <img src={$autoCar} alt="auto car" />
        <p>name={'Auto Car Repiar'}</p>
        <p>price={'$20.00'}</p>
        <img src={$Elictrical} alt="Electrical" />
        <p>name={'Electrical System'}</p>
        <p>price={'$20.00'}</p>
        <img src={$engineOil} alt="EngoneOil" />
        <p>name={'Engine Diagnostice'}</p>
        <p>price={'$20.00'}</p>
        <img src={$autoRepiar} alt="auto car repiar" />
        <p>name={'Auto Car Repiar'}</p>
        <p>price={'$20.00'}</p>
      </div>
      <div className="pt-8">
        <button className="btn btn-outline hover:bg-orange-600 text-orange-600">
          More Service
        </button>
      </div>
    </div>
  );
}

export default Service
