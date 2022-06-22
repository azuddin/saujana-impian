import { Swiper, SwiperSlide } from "swiper/react";
import { Pagination } from "swiper";
import "swiper/css";
import "swiper/css/pagination";
import type { NextPage } from "next";
import Head from "next/head";
import { Layout } from "../components/Layout";
import { useMediaQuery } from "@chakra-ui/react";

const GalleryPage: NextPage = () => {
  const [isDesktop] = useMediaQuery("(min-width: 1280px)");

  return (
    <>
      <Head>
        <title>Gallery - Saujana Impian @ Seremban 2 Height</title>
        <meta
          name="description"
          content="Gallery - Saujana Impian @ Seremban 2 Height"
        />
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
              src={
                isDesktop
                  ? "/assets/images/page-5/gallery-img-1@2x.jpg"
                  : "/assets/images/mobile-gallery-1.jpg"
              }
              className="mb-14"
            />
          </SwiperSlide>
          <SwiperSlide>
            <img
              src={
                isDesktop
                  ? "/assets/images/page-5/gallery-img-2@2x.jpg"
                  : "/assets/images/mobile-gallery-2.jpg"
              }
              className="mb-14"
            />
          </SwiperSlide>
        </Swiper>
      </Layout>
    </>
  );
};

export default GalleryPage;
