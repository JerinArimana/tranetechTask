import Image from "next/image";

const TeamCard = ({ image, name, profile }) => {
  return (
    <>
      <div className="team__list_item">
        <div className="team__list_item_image">
          <Image
            src={image}
            width={200}
            height={280}
            alt=""
            className="w-full h-full object-cover opacity-80"
          />
        </div>
        <h3 className="mb-2 mt-4">{name}</h3>
        <p>{profile}</p>
      </div>
    </>
  );
};

export default TeamCard;
