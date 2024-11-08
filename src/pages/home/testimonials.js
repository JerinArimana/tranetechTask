import Image from "next/image";
import React, { useRef, useState } from "react";
// Import Swiper React components
import { Swiper, SwiperSlide } from "swiper/react";

// Import Swiper styles
import "swiper/css";
import "swiper/css/pagination";
import "swiper/css/navigation";
// import required modules
import { Navigation, Pagination, Mousewheel, Keyboard } from "swiper/modules";

import user_img from "../../../public/images/user_img.png";
import TestimonialsCard from "../../../components/UI/testimonialsCard";

const Testimonials = () => {
  const starIcon = (
    <svg
      width="14"
      height="14"
      viewBox="0 0 14 14"
      fill="none"
      xmlns="http://www.w3.org/2000/svg"
    >
      <path
        d="M13.9412 5.04325C13.8743 4.83558 13.7512 4.65048 13.5856 4.50844C13.42 4.36641 13.2183 4.27297 13.0028 4.23848L9.62216 3.68907L8.05497 0.643662C7.95515 0.449786 7.80385 0.287154 7.61767 0.173611C7.4315 0.0600672 7.21765 0 6.99958 0C6.78151 0 6.56766 0.0600672 6.38148 0.173611C6.19531 0.287154 6.04401 0.449786 5.94418 0.643662L4.377 3.68907L0.996381 4.23848C0.781151 4.27351 0.579729 4.36715 0.414215 4.50912C0.248701 4.6511 0.125491 4.83592 0.0581037 5.04331C-0.00928335 5.2507 -0.0182434 5.47264 0.0322066 5.68479C0.0826566 5.89693 0.190567 6.09108 0.344098 6.24594L2.75618 8.6775L2.2341 12.0624C2.2006 12.278 2.2272 12.4987 2.31099 12.7001C2.39478 12.9016 2.53251 13.076 2.70902 13.2043C2.88554 13.3325 3.094 13.4096 3.31149 13.4271C3.52897 13.4445 3.74705 13.4016 3.94175 13.3031L6.99958 11.7605L10.0575 13.3031C10.2522 13.4014 10.4702 13.4441 10.6876 13.4266C10.905 13.4091 11.1134 13.332 11.2899 13.2038C11.4663 13.0756 11.604 12.9012 11.6879 12.6999C11.7717 12.4985 11.7985 12.278 11.7651 12.0624L11.2431 8.6775L13.6551 6.24594C13.8092 6.09138 13.9174 5.89723 13.9679 5.68496C14.0184 5.47269 14.0092 5.2506 13.9412 5.04325Z"
        fill="#FFC700"
      />
    </svg>
  );
  const testimonialsData = [
    {
      id: 1,
      paragraph: `I highly recommend Jodi J. Appleby. She was attentive to our needs and worked tirelessly to find us the perfect home. We couldn't be happier with our new place!`,
      userImage: user_img,
      userName: `userName`,
      starIcon: starIcon,
    },
    {
      id: 1,
      paragraph: `I highly recommend Jodi J. Appleby. She was attentive to our needs and worked tirelessly to find us the perfect home. We couldn't be happier with our new place!`,
      userImage: user_img,
      userName: `userName`,
      starIcon: starIcon,
    },
    {
      id: 1,
      paragraph: `I highly recommend Jodi J. Appleby. She was attentive to our needs and worked tirelessly to find us the perfect home. We couldn't be happier with our new place!`,
      userImage: user_img,
      userName: `userName`,
      starIcon: starIcon,
    },
  ];
  return (
    <>
      <div className="testimonials__wrapper">
        <div className="testimonials__content">
          <div className="sec-header  mb-20 pr-64">
            <label className="page_label mb-3">TESTIMONIALS</label>
            <h2 className="page_title pr-44">Look What Our Customers Say!</h2>
            <p className="pr-44">
              Fusce venenatis tellus a felis scelerisque, non pulvinar est
              pellentesque.{" "}
            </p>
          </div>
        </div>
        <div className="testimonials__slider">
          <Swiper
            direction={"vertical"}
            // pagination={{
            //   clickable: true,
            // }}
            navigation={true}
            pagination={true}
            mousewheel={true}
            keyboard={true}
            modules={[Navigation, Pagination, Mousewheel, Keyboard]}
            breakpoints={{
              640: {
                slidesPerView: 1,
                spaceBetween: 20,
              },
              768: {
                slidesPerView: 1,
                spaceBetween: 40,
              },
              1024: {
                slidesPerView: 1,
                spaceBetween: 50,
              },
            }}
            className="mySwiper"
          >
            {testimonialsData.map((data) => (
              <SwiperSlide key={data.id}>
                <TestimonialsCard
                  paragraph={data.paragraph}
                  userImage={data.userImage}
                  userName={data.userName}
                  starIcon={data.starIcon}
                />
              </SwiperSlide>
            ))}
          </Swiper>
        </div>
      </div>
    </>
  );
};

export default Testimonials;
