import TeamCard from "./TeamCard";
import Button from "./Button";

const OurTeam = () => {
  return (
    <div className="our_team text-center">
      <p className="text-muted">OUR TEAM</p>
      <h1 className="text-4xl lg:text-6xl font-heading">
        Awesome Team Members
      </h1>
      <div className="flex flex-col lg:flex-row justify-center items-center lg:gap-20  mt-4">
        <TeamCard image={"../../assets/zeus.png"} name={"Zeus"} title={"CEO"} />
        <TeamCard
          image={"../../assets/poseidon.png"}
          name={"Poseidon"}
          title={"CEO"}
        />
        <TeamCard
          image={"../../assets/hades.png"}
          name={"Hades"}
          title={"CEO"}
        />
      </div>
      <div className="w-max mx-auto mt-8">
        <Button text={"VIEW ALL MEMBERS"} />
      </div>
    </div>
  );
};

export default OurTeam;
