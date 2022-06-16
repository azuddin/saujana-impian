import { Swiper, SwiperSlide } from "swiper/react";
import { Pagination } from "swiper";
import "swiper/css";
import "swiper/css/pagination";
import type { NextPage } from "next";
import Head from "next/head";
import { Layout } from "../components/Layout";

const GalleryPage: NextPage = () => {
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
          pagination={true}
          modules={[Pagination]}
          slidesPerView={1}
          onSlideChange={() => console.log("slide change")}
          onSwiper={(swiper) => console.log(swiper)}
        >
          <SwiperSlide>
            <img src="/assets/images/page-5/gallery-img-1@2x.jpg" />
            <div className="h-20 bg-white"></div>
          </SwiperSlide>
          <SwiperSlide>
            <img src="/assets/images/page-5/gallery-img-2@2x.jpg" />
          </SwiperSlide>
        </Swiper>
      </Layout>
    </>
  );
};

export default GalleryPage;
