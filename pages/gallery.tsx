import { Swiper, SwiperSlide } from "swiper/react";
import { Pagination } from "swiper";
import "swiper/css";
import "swiper/css/pagination";
import type { NextPage } from "next";
import Head from "next/head";
import { useMediaQuery } from "@chakra-ui/react";
import { Navbar } from "../components/Navbar";

const GalleryPage: NextPage = () => {
  const [isDesktop] = useMediaQuery("(min-width: 1024px)");

  return (
    <>
      <Head>
        <title>Gallery - Saujana Intan @ Seremban 2 Height</title>
        <meta
          name="description"
          content="Gallery - Saujana Intan @ Seremban 2 Height"
        />
        <link rel="icon" href="/favicon.ico" />
      </Head>
      <Navbar></Navbar>
      <Swiper
        className="mt-20 lg:mt-0"
        pagination={true}
        modules={[Pagination]}
        slidesPerView={1}
        onSlideChange={() => console.log("slide change")}
        onSwiper={(swiper) => console.log(swiper)}
      >
        <SwiperSlide>
          <img
            src={
              isDesktop
                ? "/assets/images/page-5/gallery-img-1@2x.jpg"
                : "/assets/images/mobile-gallery-1.jpg"
            }
            className="mb-14 mx-auto lg:mt-36"
          />
        </SwiperSlide>
        <SwiperSlide>
          <img
            src={
              isDesktop
                ? "/assets/images/page-5/gallery-img-2@2x.jpg"
                : "/assets/images/mobile-gallery-2.jpg"
            }
            className="mb-14 mx-auto lg:mt-36"
          />
        </SwiperSlide>
      </Swiper>
    </>
  );
};

export default GalleryPage;
