import Image from "next/image";
import whoWeare_img from "../../../public/images/whoWeare_img.png";
const WhoAreWe = () => {
  return (
    <>
      <div className="WhoAreWe__wrapper flex gap-5">
        <div className="WhoAreWe__content_info">
          <label className="page_label">WHO ARE WE</label>
          <h2 className="page_title">
            Assisting individuals in locating the appropriate real estate.
          </h2>
          <p className="page_p">
            Donec porttitor euismod dignissim. Nullam a lacinia ipsum, nec
            dignissim purus. Nulla convallis ipsum molestie nibh malesuada, ac
            malesuada leo volutpat.
          </p>
          <div className="WhoAreWe__sub_content_info">
            <div className="WhoAreWe__sub_content_item">
              <div className="WhoAreWe__sub_item flex gap-4 p-4 rounded-xl shadow-md mt-5 mb-5 ">
                <svg
                  width="40"
                  height="39"
                  viewBox="0 0 40 39"
                  fill="none"
                  xmlns="http://www.w3.org/2000/svg"
                >
                  <path
                    d="M30.531 38.8827H19.1277C18.3736 38.8827 17.7483 38.2573 17.7483 37.5032C17.7483 36.7491 18.3736 36.1238 19.1277 36.1238H30.531C32.4989 36.1238 34.4301 34.4867 34.7612 32.5371L37.2074 17.897C37.4281 16.5727 36.6926 14.6781 35.6626 13.8505L22.9165 3.66125C21.4451 2.48414 18.9989 2.48412 17.546 3.64284L4.80009 13.8505C3.75172 14.6965 3.03442 16.5727 3.25513 17.897L3.77012 21.0051C3.89886 21.7592 3.38389 22.4765 2.62981 22.5869C1.87572 22.734 1.17683 22.2006 1.04808 21.4465L0.533097 18.3568C0.146858 16.0761 1.25042 13.1517 3.07126 11.6987L15.8171 1.49086C18.2816 -0.495513 22.1624 -0.477102 24.6454 1.50927L37.3913 11.6987C39.1938 13.1517 40.2973 16.0761 39.9295 18.3568L37.4833 32.9969C36.9315 36.2524 33.8232 38.8827 30.531 38.8827Z"
                    fill="#4361EE"
                  />
                </svg>
                <div>
                  <h6 className="page_label">Donec porttitor euismod</h6>
                  <p className="page_p pr-20">
                    Nullam a lacinia ipsum, nec dignissim purus. Nulla
                  </p>
                </div>
              </div>
              <div className="WhoAreWe__sub_item flex gap-4 p-4 rounded-xl shadow-md mt-5 ">
                <svg
                  width="40"
                  height="39"
                  viewBox="0 0 40 39"
                  fill="none"
                  xmlns="http://www.w3.org/2000/svg"
                >
                  <path
                    d="M30.531 38.8827H19.1277C18.3736 38.8827 17.7483 38.2573 17.7483 37.5032C17.7483 36.7491 18.3736 36.1238 19.1277 36.1238H30.531C32.4989 36.1238 34.4301 34.4867 34.7612 32.5371L37.2074 17.897C37.4281 16.5727 36.6926 14.6781 35.6626 13.8505L22.9165 3.66125C21.4451 2.48414 18.9989 2.48412 17.546 3.64284L4.80009 13.8505C3.75172 14.6965 3.03442 16.5727 3.25513 17.897L3.77012 21.0051C3.89886 21.7592 3.38389 22.4765 2.62981 22.5869C1.87572 22.734 1.17683 22.2006 1.04808 21.4465L0.533097 18.3568C0.146858 16.0761 1.25042 13.1517 3.07126 11.6987L15.8171 1.49086C18.2816 -0.495513 22.1624 -0.477102 24.6454 1.50927L37.3913 11.6987C39.1938 13.1517 40.2973 16.0761 39.9295 18.3568L37.4833 32.9969C36.9315 36.2524 33.8232 38.8827 30.531 38.8827Z"
                    fill="#4361EE"
                  />
                </svg>
                <div>
                  <h6 className="page_label">Donec porttitor euismod</h6>
                  <p className="page_p pr-20">
                    Nullam a lacinia ipsum, nec dignissim purus. Nulla
                  </p>
                </div>
              </div>
            </div>
          </div>
        </div>
        <div className="WhoAreWe__content_image">
          <Image
            src={whoWeare_img}
            width={575}
            height={547}
            alt="Picture of the author"
          />
        </div>
      </div>
    </>
  );
};

export default WhoAreWe;
