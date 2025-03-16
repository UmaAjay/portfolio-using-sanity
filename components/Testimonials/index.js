import React from "react";
import { useTranslation } from "react-i18next";
import { Swiper, SwiperSlide } from "swiper/react";

// Import Swiper styles
import "swiper/css";
import "swiper/css/free-mode";
import "swiper/css/pagination";

// import required modules
import { FreeMode, Pagination, Autoplay } from "swiper";

import ScrollRevealDiv from "../common/ScrollRevealDiv";
import SRG2 from "../common/SRG2";

/* Component */
import Card from "./Card";

const testimonials = [
  {
    name: "John Doe",
    country: "USA",
    position: "Business Owner",
    website: "https://example.com/",
    company: "Tech Solutions",
    saying:
      "Working with Uma Ajay Kumar Reddy P S was an amazing experience. His expertise in full-stack development and blockchain was crucial for our project. Highly recommend his services!",
  },
  {
    name: "Sarah Lee",
    country: "UK",
    position: "Software Engineer",
    website: "https://example.com/",
    company: "Innovate Ltd.",
    saying:
      "Uma Ajay delivered an exceptional project with a great user experience. His knowledge of MERN and AI solutions helped us scale our application successfully.",
  },
  {
    name: "Rajesh Patel",
    country: "India",
    position: "CTO",
    website: "https://example.com/",
    company: "NextGen AI",
    saying:
      "Uma Ajay is a dedicated professional who understands the technical challenges of modern applications. His contributions to our AI-based project were invaluable.",
  },
];

const Testimonials = () => {
  const { t } = useTranslation();

  return (
    <section className="testimonials">
      <div className="background_div">
        <div className="">
          <h1 className="title_text text_center outlined_title">
            {t("What they say")}
          </h1>

          <div className="card_wrapper">
            <Swiper
              spaceBetween={30}
              pagination={{
                clickable: true,
              }}
              modules={[FreeMode, Pagination]}
              className="mySwiper hide_on_desktop"
              breakpoints={{
                640: {
                  slidesPerView: 1,
                },
                768: {
                  slidesPerView: 1,
                },
                1024: {
                  slidesPerView: 2,
                },
                1920: {
                  slidesPerView: 3,
                },
              }}
            >
              {testimonials.map((person, index) => (
                <SwiperSlide key={index}>
                  <Card person={person} />
                </SwiperSlide>
              ))}
            </Swiper>

            <div className="oneByone_wrapper container_sm hide_on_mobile">
              {testimonials.map((person, index) => (
                <SRG2 key={index} index={index} type="column" noOfColumn={2}>
                  <Card person={person} />
                </SRG2>
              ))}
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Testimonials;
