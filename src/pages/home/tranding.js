import Image from "next/image";
import React, { useRef, useState } from "react";
// Import Swiper React components
import { Swiper, SwiperSlide } from "swiper/react";

// Import Swiper styles
import "swiper/css";
import "swiper/css/pagination";

// import required modules
import { Pagination } from "swiper/modules";
import b1 from "../../../public/images/b1.png";
import b2 from "../../../public/images/b2.png";
import b3 from "../../../public/images/b3.png";
const Tranding = () => {
  const blogData = [
    {
      id: 1,
      image: b1,
      title: `Top 10 Home Buying Mistakes to Avoid`,
      text: `  Etiam eget elementum elit. Aenean dignissim dapibus
                      vestibulum`,
    },
    {
      id: 2,
      image: b2,
      title: `Top 10 Home Buying Mistakes to Avoid`,
      text: `  Etiam eget elementum elit. Aenean dignissim dapibus
                        vestibulum`,
    },
    {
      id: 3,
      image: b3,
      title: `Top 10 Home Buying Mistakes to Avoid`,
      text: `  Etiam eget elementum elit. Aenean dignissim dapibus
                        vestibulum`,
    },
  ];
  return (
    <>
      <div className="tranding-blog__wrapper">
        <div className="sec-header text-center mb-20">
          <label className="page_label mb-3">WHAT’S TRENDING</label>
          <h2 className="page_title">Latest Blogs & Posts</h2>
        </div>
        <div className="tranding-blog__list">
          <>
            <Swiper
              spaceBetween={30}
              pagination={{
                clickable: true,
              }}
              modules={[Pagination]}
              breakpoints={{
                640: {
                  slidesPerView: 2,
                  spaceBetween: 20,
                },
                768: {
                  slidesPerView: 3,
                  spaceBetween: 40,
                },
                1024: {
                  slidesPerView: 3,
                  spaceBetween: 50,
                },
              }}
              className="mySwiper"
            >
              {blogData.map((data) => (
                <SwiperSlide key={data.id}>
                  <div className="tranding-blog__list_item">
                    <div className="tranding-blog__list_img">
                      <Image
                        src={data.image}
                        width={340}
                        height={240}
                        alt=""
                        className="w-full h-full object-cover opacity-80"
                      />
                    </div>
                    <div className="tranding-blog__list_content pr-24">
                      <h5>{data.title}</h5>
                      <p>{data.text}</p>
                    </div>
                    <button>
                      <svg
                        width="22"
                        height="16"
                        viewBox="0 0 22 16"
                        fill="none"
                        xmlns="http://www.w3.org/2000/svg"
                      >
                        <path
                          d="M1 7C0.447715 7 0 7.44772 0 8C0 8.55228 0.447715 9 1 9V7ZM21.7071 8.70711C22.0976 8.31658 22.0976 7.68342 21.7071 7.29289L15.3431 0.928932C14.9526 0.538408 14.3195 0.538408 13.9289 0.928932C13.5384 1.31946 13.5384 1.95262 13.9289 2.34315L19.5858 8L13.9289 13.6569C13.5384 14.0474 13.5384 14.6805 13.9289 15.0711C14.3195 15.4616 14.9526 15.4616 15.3431 15.0711L21.7071 8.70711ZM1 9H21V7H1V9Z"
                          fill="#3A0CA3"
                        />
                      </svg>
                    </button>
                  </div>
                </SwiperSlide>
              ))}

              <SwiperSlide>Slide 2</SwiperSlide>
              <SwiperSlide>Slide 3</SwiperSlide>
              <SwiperSlide>Slide 4</SwiperSlide>
              <SwiperSlide>Slide 5</SwiperSlide>
              <SwiperSlide>Slide 6</SwiperSlide>
              <SwiperSlide>Slide 7</SwiperSlide>
              <SwiperSlide>Slide 8</SwiperSlide>
              <SwiperSlide>Slide 9</SwiperSlide>
            </Swiper>
          </>
        </div>
      </div>
    </>
  );
};

export default Tranding;
