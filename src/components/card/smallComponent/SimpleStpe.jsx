import { Bs1CircleFill, Bs2CircleFill, Bs3CircleFill } from "react-icons/bs";
import SimpleStepCard from "./SimpleStepCard";
import lowerImage from '../../../assets/cardImage/Rectangle 1541.png';

function SimpleStpe() {
  return (
    <div>
      <div className="text-left py-5">
        <h1 className="text-3xl font-bold py-3">3 Simple Steps to Process</h1>
        <p className="leading-relaxed py-5">
          There are many variations of passages of Lorem Ipsum available, but
          the majority have suffered alteration in some form, by injected
          humour, or randomised words which dont look even slightly believable.
          If you are going to use a passage of Lorem Ipsum, you need to be sure
          there isnt anything embarrassing hidden in the middle of text
        </p>
      </div>
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-4 justify-center text-center items-center">
        <SimpleStepCard
          logo={<Bs1CircleFill />}
          heading={'Step One'}
          desc={'It uses a dictionary \n of over 200 .'}
        />
        <SimpleStepCard
          logo={<Bs2CircleFill />}
          heading={'Step Two'}
          desc={'It uses a dictionary \n of over 200 .'}
        />
        <SimpleStepCard
          logo={<Bs3CircleFill />}
          heading={'Step Three'}
          desc={'It uses a dictionary \n of over 200 .'}
        />
      </div>
      <div className="p-6">
        <img src={lowerImage} alt="lowerVideoImage" />
      </div>
    </div>
  );
}

export default SimpleStpe
