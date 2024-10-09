import Navbar from "../components/Navbar"
import Footer from "../layout/Footer"
import heroimg from "../assets/pageImage/Rectangle1548Shadow2.png";
import CartCard from "../components/card/smallComponent/CartCard";
import PendingButton from "../components/card/button/PendingButton";
import engine from '../assets/cardImage/Rectangle 65.png';
import autochack from '../assets/cardImage/Rectangle 65 (1).png';
import manualchack from '../assets/cardImage/Rectangle 65 (2).png';
import { FaXmark } from "react-icons/fa6";

function CarDetails() {
  return (
    <div>
      <div className="pb-10">
        <Navbar />
      </div>
      <div
        className="pt-20 bg-cover bg-center h-[300px] flex items-start justify-start rounded-md"
        style={{ backgroundImage: `url(${heroimg})` }}
      >
        <h1 className="text-3xl font-bold text-white pl-10 pt-16">
          Cart Details
        </h1>
      </div>
      <div className="flex flex-col">
        <CartCard
          logo={<FaXmark />}
          img={engine}
          name={'Martha Knit Top'}
          color={'Color : Green'}
          size={'Size: S'}
          price={'$25.00'}
          date={'22-10-2022'}
          logo2={<PendingButton />}
        />
        <CartCard
          logo={<FaXmark />}
          img={autochack}
          name={'Martha Knit Top'}
          color={'Color : Green'}
          size={'Size: S'}
          price={'$25.00'}
          date={'22-10-2022'}
          logo2={<PendingButton />}
        />
        <CartCard
          logo={<FaXmark />}
          img={manualchack}
          name={'Martha Knit Top'}
          color={'Color : Green'}
          size={'Size: S'}
          price={'$25.00'}
          date={'22-10-2022'}
          logo2={<PendingButton />}
        />
      </div>
      <div className="pt-20">
        <Footer />
      </div>
    </div>
  );
}

export default CarDetails
