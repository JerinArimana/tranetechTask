import agentImg from "../../../public/images/agent_img.png";
import Image from "next/image";
const BecomeAgent = () => {
  return (
    <>
      <div className="become-agent__wrapper">
        <div className="become-agent__img">
          <Image
            src={agentImg}
            width={358}
            height={303}
            alt=""
            className="w-full h-full object-cover opacity-80"
          />
        </div>
        <div className="become-agent__content">
          <div className="sec-header">
            <h2 className="page_title ">Become a Agent.</h2>
            <p className="">
              Fusce venenatis tellus a felis scelerisque. venenatis tellus a
              felis scelerisque.
            </p>
          </div>
          <button>Register Now</button>
        </div>
      </div>
    </>
  );
};

export default BecomeAgent;
