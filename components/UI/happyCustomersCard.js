import Image from "next/image";
import customers from "../../public/images/customer_72.png";
import listing from "../../public/images/listing-img.png";

const HappyCustomersCard = () => {
  return (
    <>
      <div className="happyCustomersCard">
        <div className="happyCustomersCard__customers">
          <Image
            src={customers}
            width={155}
            height={36}
            alt="Picture of the author"
          />
          <p>72k+ Happy Customers</p>
        </div>
        <div className="happyCustomersCard__listings">
          <Image
            src={listing}
            width={60}
            height={60}
            alt="Picture of the author"
          />
          <p>200+ New Listings Everyday!</p>
        </div>
      </div>
    </>
  );
};

export default HappyCustomersCard;
