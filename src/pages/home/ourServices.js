import OurServicesCard from "../../../components/UI/ourServicesCard";

const OurServices = () => {
  const svg1 = (
    <svg
      width="42"
      height="42"
      viewBox="0 0 42 42"
      fill="none"
      xmlns="http://www.w3.org/2000/svg"
    >
      <path
        d="M39.6332 32.9763L32.8763 26.2193L27.6789 24.072C29.4095 21.6111 30.3366 18.6751 30.3333 15.6666C30.3333 7.5794 23.7539 1 15.6666 1C7.5794 1 1 7.5794 1 15.6666C1 23.7539 7.5794 30.3333 15.6666 30.3333C18.7013 30.3367 21.6615 29.3936 24.1349 27.6352L26.2765 32.8185L33.0333 39.5758C33.4666 40.0092 33.981 40.353 34.5472 40.5875C35.1134 40.822 35.7203 40.9428 36.3331 40.9428C36.9459 40.9428 37.5528 40.8221 38.119 40.5876C38.6852 40.3531 39.1997 40.0094 39.633 39.576C40.0664 39.1427 40.4102 38.6283 40.6447 38.0621C40.8792 37.4959 41 36.889 41 36.2762C41 35.6633 40.8793 35.0565 40.6448 34.4903C40.4103 33.9241 40.0666 33.4096 39.6332 32.9763ZM3.66666 15.6666C3.66666 9.04998 9.04998 3.66666 15.6666 3.66666C22.2833 3.66666 27.6666 9.04998 27.6666 15.6666C27.6666 22.2833 22.2833 27.6666 15.6666 27.6666C9.04998 27.6666 3.66666 22.2833 3.66666 15.6666ZM37.7475 37.6902C37.3721 38.0648 36.8635 38.2751 36.3333 38.2751C35.803 38.2751 35.2944 38.0648 34.919 37.6902L28.538 31.3093L26.5469 26.4897L31.3666 28.4809L37.7477 34.8618C38.1221 35.2372 38.3324 35.7458 38.3324 36.2761C38.3324 36.8063 38.122 37.3149 37.7475 37.6902Z"
        fill="white"
        stroke="white"
        strokeWidth="0.6"
      />
    </svg>
  );
  const svg2 = (
    <svg
      width="42"
      height="44"
      viewBox="0 0 42 44"
      fill="none"
      xmlns="http://www.w3.org/2000/svg"
    >
      <path
        d="M40.0773 18.1142L22.3463 1.80166C21.7698 1.27135 21.0108 0.984352 20.2277 1.00066C19.4446 1.01697 18.6981 1.33531 18.1443 1.88916L1.83688 18.1967L1 19.0334V43.0741H16.7143V28.0741H25.2857V43.0741H41V18.9632L40.0773 18.1142ZM20.2891 3.85719C20.3143 3.85719 20.2987 3.86264 20.2879 3.87327C20.2768 3.86264 20.2639 3.85719 20.2891 3.85719ZM38.1429 40.2169H28.1429V28.0741C28.1429 27.3163 27.8418 26.5896 27.306 26.0538C26.7702 25.5179 26.0435 25.2169 25.2857 25.2169H16.7143C15.9565 25.2169 15.2298 25.5179 14.694 26.0538C14.1582 26.5896 13.8571 27.3163 13.8571 28.0741V40.2169H3.85714L3.85714 20.2169L20.2891 3.90943L20.2913 3.9063L38.1429 20.2169V40.2169Z"
        fill="white"
        stroke="white"
        strokeWidth="0.6"
      />
    </svg>
  );

  const svg3 = (
    <svg
      width="48"
      height="35"
      viewBox="0 0 48 35"
      fill="none"
      xmlns="http://www.w3.org/2000/svg"
    >
      <path
        d="M40 7.2H19.2V19.2619H16.9846V15.1619C16.982 12.8389 16.0581 10.6118 14.4155 8.96921C12.773 7.3266 10.5459 6.40262 8.2229 6.4H3.2V0H0V34.4H3.2V29.6257L44.8 29.9585V34.4H48V15.2C47.9976 13.079 47.154 11.0456 45.6542 9.54581C44.1544 8.04604 42.121 7.20241 40 7.2ZM3.2 9.6H8.2229C9.69744 9.60167 11.1111 10.1882 12.1538 11.2308C13.1964 12.2735 13.7829 13.6872 13.7846 15.1617V19.2617H3.2V9.6ZM44.8 26.7584L3.2 26.4256V22.4619H44.8V26.7584ZM44.8 19.2619H22.4V10.4H40C41.2726 10.4015 42.4926 10.9076 43.3925 11.8075C44.2924 12.7074 44.7985 13.9274 44.8 15.2V19.2619Z"
        fill="white"
      />
    </svg>
  );

  const ourServicesCard = [
    {
      id: 1,
      icon: svg1,
      title: `Buy a New Home`,
      text: `Donec porttitor euismod dignissim. Nullam a lacinia ipsum, nec
              dignissim purus.`,
    },
    {
      id: 1,
      icon: svg2,
      title: `Sell a House`,
      text: `Donec porttitor euismod dignissim. Nullam a lacinia ipsum, nec
                dignissim purus.`,
    },
    {
      id: 1,
      icon: svg3,
      title: `Buy a New Home`,
      text: `Donec porttitor euismod dignissim. Nullam a lacinia ipsum, nec
                dignissim purus.`,
    },
  ];
  return (
    <>
      <div className="ourServices__wrapper">
        <div className="sec-header text-center mb-10">
          <label className="page_label mb-3">OUR SERVICES</label>
          <h2 className="page_title">Donec porttitor euismod dignissim</h2>
        </div>
        <div className="ourServices__list">
          {ourServicesCard.map((data) => (
            <OurServicesCard
              key={data.id}
              icon={data.icon}
              title={data.title}
              text={data.text}
            />
          ))}
        </div>
      </div>
    </>
  );
};

export default OurServices;
