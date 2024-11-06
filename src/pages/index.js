import Image from "next/image";
import Tab from "react-bootstrap/Tab";
import Tabs from "react-bootstrap/Tabs";
import Header from "../../components/Header";
import React, { useRef, useState } from "react";
import slider1 from "../../public/images/bnr-slider-1.png";
import c1 from "../../public/images/c-1.png";
import c2 from "../../public/images/c-2.png";
import c3 from "../../public/images/c-3.png";
import c4 from "../../public/images/c-4.png";
import c5 from "../../public/images/c-5.png";
import c6 from "../../public/images/c-6.png";
import { Swiper, SwiperSlide } from "swiper/react";
import Form from "react-bootstrap/Form";
// Import Swiper styles
import "swiper/css";
import "swiper/css/pagination";

// import required modules
import { Pagination } from "swiper/modules";
import { Container } from "react-bootstrap";
import BannerCard from "../../components/UI/bannerCard";
import HappyCustomersCard from "../../components/UI/happyCustomersCard";
import TrustedCompanyCard from "../../components/UI/trustedCompany";
import WhoAreWe from "./home/whoAreWe";
import OurServices from "./home/ourServices";
import Neighborhood from "./home/neighborhood";
import Team from "./home/team";
import Tranding from "./home/tranding";
import Testimonials from "./home/testimonials";
import BecomeAgent from "./home/becomeAgent";
import Footer from "../../components/Footer";
export default function Home() {
  const bannerImg = [
    { id: 1, image: slider1 },
    { id: 1, image: slider1 },
    { id: 1, image: slider1 },
    { id: 1, image: slider1 },
  ];

  const trustedCompany = [
    { id: 1, image: c1 },
    { id: 1, image: c2 },
    { id: 1, image: c3 },
    { id: 1, image: c4 },
    { id: 1, image: c5 },
    { id: 1, image: c6 },
  ];
  return (
    <main>
      <Header />

      <section className="banner">
        <Container>
          <div className="banner__wrapper">
            <div className="banner__slider">
              <label>REAL ESTATE</label>
              <h1>Find a perfect home you love..!</h1>
              <p>
                Etiam eget elementum elit. Aenean dignissim dapibus vestibulum.
                Integer a dolor eu sapien sodales vulputate ac in purus.
              </p>
              <Swiper
                spaceBetween={30}
                pagination={{
                  clickable: true,
                }}
                modules={[Pagination]}
                className="mySwiper"
              >
                {bannerImg.map((data) => (
                  <SwiperSlide key={data.id}>
                    <BannerCard image={data.image} />
                  </SwiperSlide>
                ))}
              </Swiper>
            </div>

            <div className="banner__form">
              <Tabs
                defaultActiveKey="home"
                id="uncontrolled-tab-example"
                className="mb-3"
              >
                <Tab eventKey="home" title="For Sale">
                  <div className="tab_content">
                    <Form>
                      <Form.Group
                        className="form_item"
                        controlId="exampleForm.ControlInput1"
                      >
                        <Form.Control
                          type="text"
                          placeholder="New York, San Francisco, etc"
                        />
                      </Form.Group>
                      <Form.Select
                        aria-label="Default select example"
                        className="form_item"
                      >
                        <option>Select Property Type</option>
                        <option value="1">One</option>
                        <option value="2">Two</option>
                        <option value="3">Three</option>
                      </Form.Select>
                      <Form.Select
                        aria-label="Default select example"
                        className="mb-3"
                      >
                        <option>Select Rooms</option>
                        <option value="1">One</option>
                        <option value="2">Two</option>
                        <option value="3">Three</option>
                      </Form.Select>
                      <p className="flex items-center gap-2 form_item">
                        <span>
                          <svg
                            width="14"
                            height="14"
                            viewBox="0 0 14 14"
                            fill="none"
                            xmlns="http://www.w3.org/2000/svg"
                          >
                            <path
                              d="M12.0256 13.9999C11.7313 13.9999 11.4872 13.7785 11.4872 13.5115V6.34872C11.4872 6.08175 11.7313 5.86035 12.0256 5.86035C12.32 5.86035 12.5641 6.08175 12.5641 6.34872V13.5115C12.5641 13.7785 12.32 13.9999 12.0256 13.9999Z"
                              fill="#3A0CA3"
                            />
                            <path
                              d="M12.0256 4.23256C11.7313 4.23256 11.4872 4.01116 11.4872 3.74419V0.488372C11.4872 0.221395 11.7313 0 12.0256 0C12.32 0 12.5641 0.221395 12.5641 0.488372V3.74419C12.5641 4.01116 12.32 4.23256 12.0256 4.23256Z"
                              fill="#3A0CA3"
                            />
                            <path
                              d="M7.00001 14.0001C6.70565 14.0001 6.46155 13.7787 6.46155 13.5118V10.256C6.46155 9.98897 6.70565 9.76758 7.00001 9.76758C7.29437 9.76758 7.53847 9.98897 7.53847 10.256V13.5118C7.53847 13.7787 7.29437 14.0001 7.00001 14.0001Z"
                              fill="#3A0CA3"
                            />
                            <path
                              d="M7.00001 8.13953C6.70565 8.13953 6.46155 7.91814 6.46155 7.65116V0.488372C6.46155 0.221395 6.70565 0 7.00001 0C7.29437 0 7.53847 0.221395 7.53847 0.488372V7.65116C7.53847 7.91814 7.29437 8.13953 7.00001 8.13953Z"
                              fill="#3A0CA3"
                            />
                            <path
                              d="M1.97434 13.9999C1.67999 13.9999 1.43588 13.7785 1.43588 13.5115V6.34872C1.43588 6.08175 1.67999 5.86035 1.97434 5.86035C2.2687 5.86035 2.51281 6.08175 2.51281 6.34872V13.5115C2.51281 13.7785 2.2687 13.9999 1.97434 13.9999Z"
                              fill="#3A0CA3"
                            />
                            <path
                              d="M1.97434 4.23256C1.67999 4.23256 1.43588 4.01116 1.43588 3.74419V0.488372C1.43588 0.221395 1.67999 0 1.97434 0C2.2687 0 2.51281 0.221395 2.51281 0.488372V3.74419C2.51281 4.01116 2.2687 4.23256 1.97434 4.23256Z"
                              fill="#3A0CA3"
                            />
                            <path
                              d="M3.41026 6.8371H0.538462C0.244103 6.8371 0 6.6157 0 6.34872C0 6.08175 0.244103 5.86035 0.538462 5.86035H3.41026C3.70462 5.86035 3.94872 6.08175 3.94872 6.34872C3.94872 6.6157 3.70462 6.8371 3.41026 6.8371Z"
                              fill="#3A0CA3"
                            />
                            <path
                              d="M13.4615 6.8371H10.5897C10.2954 6.8371 10.0513 6.6157 10.0513 6.34872C10.0513 6.08175 10.2954 5.86035 10.5897 5.86035H13.4615C13.7559 5.86035 14 6.08175 14 6.34872C14 6.6157 13.7559 6.8371 13.4615 6.8371Z"
                              fill="#3A0CA3"
                            />
                            <path
                              d="M8.43589 8.13934H5.5641C5.26974 8.13934 5.02563 7.91795 5.02563 7.65097C5.02563 7.38399 5.26974 7.1626 5.5641 7.1626H8.43589C8.73025 7.1626 8.97435 7.38399 8.97435 7.65097C8.97435 7.91795 8.73025 8.13934 8.43589 8.13934Z"
                              fill="#3A0CA3"
                            />
                          </svg>
                        </span>
                        Advance Search
                      </p>
                    </Form>
                    <button>
                      <svg
                        width="20"
                        height="20"
                        viewBox="0 0 20 20"
                        fill="none"
                        xmlns="http://www.w3.org/2000/svg"
                      >
                        <path
                          d="M9.53582 19.0716C4.27949 19.0716 0 14.7921 0 9.53582C0 4.27949 4.27949 0 9.53582 0C14.7921 0 19.0716 4.27949 19.0716 9.53582C19.0716 14.7921 14.7921 19.0716 9.53582 19.0716ZM9.53582 1.39549C5.04235 1.39549 1.39549 5.05166 1.39549 9.53582C1.39549 14.02 5.04235 17.6761 9.53582 17.6761C14.0293 17.6761 17.6761 14.02 17.6761 9.53582C17.6761 5.05166 14.0293 1.39549 9.53582 1.39549Z"
                          fill="white"
                        />
                        <path
                          d="M19.3046 20.0019C19.1278 20.0019 18.9511 19.9367 18.8115 19.7972L16.9509 17.9365C16.6811 17.6667 16.6811 17.2202 16.9509 16.9504C17.2207 16.6806 17.6672 16.6806 17.937 16.9504L19.7977 18.811C20.0675 19.0808 20.0675 19.5274 19.7977 19.7972C19.6581 19.9367 19.4814 20.0019 19.3046 20.0019Z"
                          fill="white"
                        />
                      </svg>
                      Search
                    </button>
                  </div>
                </Tab>
                <Tab eventKey="profile" title="For Rent">
                  Tab content for Profile
                </Tab>
              </Tabs>
            </div>
          </div>
        </Container>
      </section>

      <section className="trusted-company">
        <Container>
          <div className="trusted-company__wrapper">
            <>
              <HappyCustomersCard />
            </>
            <div className="trusted-company__tr_slider">
              <div className="trusted-company__tr_text">
                <p>Trusted by 100+ Companies across the globe! </p>
              </div>
              <Swiper
                slidesPerView={3}
                spaceBetween={30}
                pagination={{
                  clickable: true,
                }}
                modules={[Pagination]}
                breakpoints={{
                  640: {
                    slidesPerView: 2.5,
                    spaceBetween: 20,
                  },
                  768: {
                    slidesPerView: 4,
                    spaceBetween: 40,
                  },
                  1024: {
                    slidesPerView: 6,
                    spaceBetween: 50,
                  },
                }}
                className="mySwiper"
              >
                {trustedCompany.map((data) => (
                  <SwiperSlide key={data.id}>
                    <TrustedCompanyCard image={data.image} />
                  </SwiperSlide>
                ))}
              </Swiper>
            </div>
          </div>
        </Container>
      </section>

      <section className="WhoAreWe pt-20 pb-20">
        <Container>
          <WhoAreWe />
        </Container>
      </section>

      <section className="ourServices pt-20 pb-20">
        <Container>
          <OurServices />
        </Container>
      </section>
      <section className="neighborhood pt-20 pb-20">
        <Container>
          <Neighborhood />
        </Container>
      </section>

      <section className="team pt-20 pb-20">
        <Container>
          <Team />
        </Container>
      </section>
      <section className="tranding-blog pt-20 pb-20 bg-[#4361ee]">
        <Container>
          <Tranding />
        </Container>
      </section>
      <section className="testimonials pt-20 pb-20">
        <Container>
          <Testimonials />
        </Container>
      </section>
      <section className="become-agent pt-20 pb-20">
        <Container>
          <BecomeAgent />
        </Container>
      </section>
      <Footer />
    </main>
  );
}
