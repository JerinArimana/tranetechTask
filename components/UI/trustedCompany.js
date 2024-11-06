import Image from "next/image";

const TrustedCompanyCard = ({ image }) => {
  return (
    <>
      <div>
        <Image
          src={image}
          width={120}
          height={40}
          alt="Picture of the author"
        />
      </div>
    </>
  );
};

export default TrustedCompanyCard;
