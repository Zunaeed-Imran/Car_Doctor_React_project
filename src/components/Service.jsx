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
          humour, or randomised <br /> words which dont look even slightly believable.
        </p>
      </div>
      <div className="">
        <img src={$electricimg} alt="electrice system" />
        name={"Electrical System"}
        price={"$20.00"}
        <img src={$maontanance} alt="maintanance" />
        name={"Engine Diagnostics"}
        price={"$20.00"}
        <img src={$autoCar} alt="auto car" />
        name={"Auto Car Repiar"}
        price={"$20.00"}
        <img src={$Elictrical} alt="Electrical" />
        name={"Electrical System"}
        price={"$20.00"}
        <img src={$engineOil} alt="EngoneOil" />
        name={"Engine Diagnostice"}
        price={"$20.00"}
        <img src={$autoRepiar} alt="auto car repiar" />
        name={"Auto Car Repiar"}
        price={"$20.00"}
      </div>
      <div>
        
      </div>
    </div>
  );
}

export default Service
