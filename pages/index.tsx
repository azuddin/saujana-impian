import { Swiper, SwiperSlide } from "swiper/react";
import { Pagination } from "swiper";
import "swiper/css";
import "swiper/css/pagination";
import type { NextPage } from "next";
import Head from "next/head";
import { Layout } from "../components/Layout";
import { useMediaQuery } from "@chakra-ui/react";

const Home: NextPage = () => {
  const [isDesktop] = useMediaQuery("(min-width: 1280px)");

  return (
    <>
      <Head>
        <title>Saujana Impian @ Seremban 2 Height</title>
        <meta name="description" content="Saujana Impian @ Seremban 2 Height" />
        <link rel="icon" href="/favicon.ico" />
      </Head>
      <Layout>
        <Swiper
          className="mt-24 xl:mt-0"
          pagination={true}
          modules={[Pagination]}
          slidesPerView={1}
          onSlideChange={() => console.log("slide change")}
          onSwiper={(swiper) => console.log(swiper)}
        >
          <SwiperSlide>
            <img
              className="mx-auto mb-14"
              src={
                isDesktop
                  ? "/assets/images/banner/slider-1.jpeg"
                  : "/assets/images/Slider-1@2x.jpg"
              }
            />
          </SwiperSlide>
          <SwiperSlide>
            <img
              className="mx-auto mb-14"
              src={
                isDesktop
                  ? "/assets/images/banner/slider-2.jpeg"
                  : "/assets/images/Slider-2@2x.jpg"
              }
            />
          </SwiperSlide>
          <SwiperSlide>
            <img
              className="mx-auto mb-14"
              src={
                isDesktop
                  ? "/assets/images/banner/slider-3.jpeg"
                  : "/assets/images/Slider-3@2x.jpg"
              }
            />
          </SwiperSlide>
        </Swiper>
      </Layout>
    </>
  );
};

export default Home;
