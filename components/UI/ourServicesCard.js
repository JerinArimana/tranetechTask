const OurServicesCard = ({ icon, title, text }) => {
  return (
    <>
      <div className="ourServices__list_item">
        <div className="icon">{icon}</div>
        <h6 className="">{title}</h6>
        <p className="page_p">{text}</p>
      </div>
    </>
  );
};

export default OurServicesCard;
