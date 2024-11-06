import Image from "next/image";
import t1 from "../../../public/images/t-1.png";
import t2 from "../../../public/images/t-2.png";
import t3 from "../../../public/images/t-3.png";
import t4 from "../../../public/images/t-4.png";
import TeamCard from "../../../components/UI/teamCard";

const Team = () => {
  const teamData = [
    { id: 1, image: t1, name: `Brendon M`, profile: `CEO & Founder` },
    { id: 2, image: t2, name: `Brendon M`, profile: `CEO & Founder` },
    { id: 3, image: t3, name: `Brendon M`, profile: `CEO & Founder` },
    { id: 4, image: t4, name: `Brendon M`, profile: `CEO & Founder` },
  ];
  return (
    <>
      <div className="team__wrapper">
        <div className="sec-header text-center mb-20">
          <label className="page_label mb-3">Introduce yourself to </label>
          <h2 className="page_title">Our Team of Experts</h2>
        </div>
        <div className="team__list px-20">
          {teamData.map((data) => (
            <TeamCard
              key={data.id}
              image={data.image}
              name={data.name}
              profile={data.profile}
            />
          ))}
        </div>
      </div>
    </>
  );
};

export default Team;
