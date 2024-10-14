import TeamCard from "./card/TeamCard";
import engineExpart from "../assets/avater/member3.png";
import man2 from "../assets/avater/member2.png";
import man3 from "../assets/avater/member1.png";
import TeamLogo from "./card/smallComponent/TeamLogo";

function Team() {
  return (
    <div className="p-10">
      <div className="flex flex-col gap-3 pb-7">
        <p className="text-xl font-bold text-[#ff3811] py-3">Team</p>
        <h1 className="text-5xl font-bold py-3">Meet Our Team</h1>
        <p className="pb-5">
          the majority have suffered alteration in some form, by injected
          humour, or randomised <br /> words which dont look even slightly
          believable.
        </p>
      </div>
      <div className="grid grid-cols-3">
        <TeamCard
          img={engineExpart}
          name={'Car Engine Plug'}
          title={'Engine Expart'}
          socialLogo={<TeamLogo />}
        />
        <TeamCard
          img={man2}
          name={'Car Engine Plug'}
          title={'Engine Expart'}
          socialLogo={<TeamLogo />}
        />
        <TeamCard
          img={man3}
          name={'Car Engine Plug'}
          title={'Engine Expart'}
          socialLogo={<TeamLogo />}
        />
      </div>
    </div>
  );
}

export default Team
