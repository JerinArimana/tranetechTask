import Image from "next/image";

const BannerCard = ({ image }) => {
  return (
    <>
      <div className="slider-item">
        <Image
          src={image}
          width={580}
          height={350}
          alt="Picture of the author"
        />
      </div>
    </>
  );
};

export default BannerCard;
