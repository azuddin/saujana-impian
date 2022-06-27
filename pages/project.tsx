import { Swiper, SwiperSlide } from "swiper/react";
import { Pagination } from "swiper";
import "swiper/css";
import "swiper/css/pagination";
import { Text, useMediaQuery } from "@chakra-ui/react";
import type { NextPage } from "next";
import Head from "next/head";
import { Layout } from "../components/Layout";

const gridItem = [
  {
    img: "/assets/images/page-2/icon.svg",
    line1: "PANORAMIC VIEW",
    line2: "FROM HIGHER GROUND",
  },
  {
    img: "/assets/images/page-2/icon-1.svg",
    line1: "PRACTICAL",
    line2: "LAYOUT",
  },
  {
    img: "/assets/images/page-2/icon-2.svg",
    line1: "LOW",
    line2: "DENSITY",
  },
  {
    img: "/assets/images/page-2/icon-3.svg",
    line1: "NATURALLY",
    line2: "COOL AIR",
  },
];

const gridItem2 = [
  {
    img: "/assets/images/page-2/icon-4.svg",
    line1: "GUARDED",
    line2: "COMMUNITY",
  },
  {
    img: "/assets/images/page-2/icon-5.svg",
    line1: "SOLAR WATER",
    line2: "HEATING SYSTEM",
  },
  {
    img: "/assets/images/page-2/icon-6.svg",
    line1: "DIGITAL",
    line2: "CLOCK",
  },
  {
    img: "/assets/images/page-2/icon-7.svg",
    line1: "RAIN WATER",
    line2: "HARVESTING SYSTEM",
  },
  {
    img: "/assets/images/page-2/icon-8.svg",
    line1: "RECREATIONAL",
    line2: "PARK",
  },
];

const ProjectPage: NextPage = () => {
  const [isDesktop] = useMediaQuery("(min-width: 1024px)");

  return (
    <>
      <Head>
        <title>Project - Saujana Impian @ Seremban 2 Height</title>
        <meta
          name="description"
          content="Project - Saujana Impian @ Seremban 2 Height"
        />
        <link rel="icon" href="/favicon.ico" />
      </Head>
      <img
        src={
          isDesktop
            ? "/assets/images/welcome-to-a-breathtaking-2.jpeg"
            : "/assets/images/Welcome-to-a-breathtaking@2x.jpg"
        }
        className="mt-20 lg:mt-32 mx-auto w-full"
      />
      <Layout>
        <div className="flex justify-center my-10 px-5 lg:px-60 2lg:px-80">
          <Text fontSize={isDesktop ? "xl" : "md"} textAlign="center">
            Enrich your life in a new luxurious home built in a harmonious
            combination of urban and natural settings at Seremban 2.
          </Text>
        </div>
        <div className="lg:divide-y-2 lg:divide-yellow-800 lg:divide-dashed mb-20">
          <div className="flex flex-col lg:flex-row lg:divide-x-2 lg:divide-yellow-800 lg:divide-dashed">
            {gridItem.map((item, k) => {
              return (
                <div
                  key={k}
                  className="flex flex-1 flex-grow flex-col justify-center items-center p-5"
                >
                  <img src={item.img} className="mb-5 h-14" />
                  <Text fontSize="sm" textAlign="center">
                    {item.line1}
                  </Text>
                  <Text fontSize="sm" textAlign="center">
                    {item.line2}
                  </Text>
                </div>
              );
            })}
          </div>
          <div className="flex flex-col lg:flex-row lg:divide-x-2 lg:divide-yellow-800 lg:divide-dashed">
            {gridItem2.map((item, k) => {
              return (
                <div
                  key={k}
                  className="flex flex-1 flex-grow flex-col justify-center items-center p-5"
                >
                  <img src={item.img} className="mb-5 h-14" />
                  <Text fontSize="md" textAlign="center">
                    {item.line1}
                  </Text>
                  <Text fontSize="md" textAlign="center">
                    {item.line2}
                  </Text>
                </div>
              );
            })}
          </div>
        </div>

        <Swiper
          pagination={true}
          modules={[Pagination]}
          slidesPerView={1}
          onSlideChange={() => console.log("slide change")}
          onSwiper={(swiper) => console.log(swiper)}
        >
          <SwiperSlide>
            <img
              className="w-screen mb-20"
              src={
                isDesktop
                  ? "/assets/images/page-2/Desktop-Semi-d-floor-plan.png"
                  : "/assets/images/page-2/Semi-d-floor plan@2x.jpg"
              }
            />
          </SwiperSlide>
          <SwiperSlide>
            <img
              className="w-screen mb-20"
              src={
                isDesktop
                  ? "/assets/images/page-2/Desktop-Bungalow-floor-plan.png"
                  : "/assets/images/page-2/Bungalow-floor-plan@2x.jpg"
              }
            />
          </SwiperSlide>
        </Swiper>

        <div className="flex justify-start lg:justify-end lg:w-full w-1/2 mt-10 mb-2 mx-5 lg:m-0">
          <img src="/assets/images/page-2/Specifications.png" />
        </div>

        <div className="divide-y divide-yellow-800 px-5">
          <div className="flex flex-row w-full py-5">
            <div className="w-1/2 lg:w-1/4">
              <Text fontSize="md" fontWeight="semibold">
                STRUCTURE
              </Text>
            </div>
            <Text fontSize="md" fontWeight="light" className="w-1/2">
              Reinforced Concrete Frame
            </Text>
          </div>

          <div className="flex flex-row w-full py-5">
            <div className="w-1/2 lg:w-1/4">
              <Text fontSize="md" fontWeight="semibold">
                WALL
              </Text>
            </div>
            <Text fontSize="md" fontWeight="light" className="w-1/2">
              Common Clay Brick Wall
            </Text>
          </div>

          <div className="flex flex-row w-full py-5">
            <div className="w-1/2 lg:w-1/4">
              <Text fontSize="md" fontWeight="semibold">
                ROOF
              </Text>
            </div>
            <Text fontSize="md" fontWeight="light" className="w-1/2">
              Metal Roofing Sheet / Reinforced Concrete Roof
            </Text>
          </div>

          <div className="flex flex-row w-full py-5">
            <div className="w-1/2 lg:w-1/4">
              <Text fontSize="md" fontWeight="semibold">
                CEILING FINISHES
              </Text>
            </div>
            <Text fontSize="md" fontWeight="light" className="w-1/2">
              Skimcoat / Plasterglass Ceiling
            </Text>
          </div>

          <div className="flex flex-row w-full py-5">
            <div className="w-1/2 lg:w-1/4">
              <Text fontSize="md" fontWeight="semibold">
                FLOOR FINISHES
              </Text>
            </div>
            <Text fontSize="md" fontWeight="light" className="w-1/2">
              Porcelein Tiles / Ceramics Tiles / Laminated Flooring
            </Text>
          </div>

          <div className="flex flex-row w-full py-5">
            <div className="w-1/2 lg:w-1/4">
              <Text fontSize="md" fontWeight="semibold">
                WALL FINISHES
              </Text>
            </div>
            <div className="w-1/2 lg:w-3/4 flex flex-col lg:flex-row">
              <div className="flex flex-col lg:w-1/3 mr-5 lg:mr-0">
                <Text fontSize="md" fontWeight="light">
                  Kitchen &amp; Bathrooms
                </Text>
                <Text fontSize="md" fontWeight="light">
                  Other Areas
                </Text>
              </div>
              <div className="flex flex-col lg:w-1/3">
                <Text fontSize="md" fontWeight="light">
                  Tiles Up to Ceiling Height
                </Text>
                <Text fontSize="md" fontWeight="light">
                  Plaster and Paint
                </Text>
              </div>
            </div>
          </div>

          <div className="flex flex-row w-full py-5">
            <div className="w-1/2 lg:w-1/4">
              <Text fontSize="md" fontWeight="semibold">
                DOORS
              </Text>
            </div>
            <div className="w-1/2 lg:w-auto flex flex-col">
              <Text fontSize="md" fontWeight="light">
                Decorative Entrace Door
              </Text>
              <Text fontSize="md" fontWeight="light">
                Powder Coated Aluminium Frame with Tinted Glass Doors
              </Text>
              <Text fontSize="md" fontWeight="light">
                Moulded Doors
              </Text>
            </div>
          </div>

          <div className="flex flex-row w-full py-5">
            <div className="w-1/2 lg:w-1/4">
              <Text fontSize="md" fontWeight="semibold">
                WINDOWS
              </Text>
            </div>
            <Text fontSize="md" fontWeight="light" className="w-1/2">
              Powder Coated Aluminium Frame with Tinted Glass / Obsecured Glass
              Window
            </Text>
          </div>

          <div className="flex flex-row w-full py-5">
            <div className="w-1/2 lg:w-1/4">
              <Text fontSize="md" fontWeight="semibold">
                SANITARY FITTINGS
              </Text>
            </div>
            <div className="w-1/2 lg:w-3/4 lg:flex space-y-5 lg:space-y-0">
              <div className="w-full lg:w-1/3 flex flex-col">
                <Text fontSize="md" fontWeight="light">
                  Kitchen
                </Text>
                <Text fontSize="md" fontWeight="light">
                  Bathrooms
                </Text>
              </div>
              <div className="w-full lg:w-1/3 flex flex-col">
                <Text fontSize="md" fontWeight="semibold">
                  2 - STOREY SEMI D
                </Text>
                <Text fontSize="md" fontWeight="light">
                  Stainless Steel Sink
                </Text>
                <Text fontSize="md" fontWeight="light">
                  Basin, Hand Shower, Paper Holder &amp; Padestal Water Closet
                </Text>
                <Text fontSize="md" fontWeight="light">
                  Vanity Top to Master Bath only
                </Text>
              </div>
              <div className="w-full lg:w-1/3 flex flex-col">
                <Text fontSize="md" fontWeight="semibold">
                  2 - STOREY BUNGALOW
                </Text>
                <Text fontSize="md" fontWeight="light">
                  Stainless Steel Sink
                </Text>
                <Text fontSize="md" fontWeight="light">
                  Basin, Hand Shower, Paper Holder &amp; Padestal Water Closet
                </Text>
                <Text fontSize="md" fontWeight="light">
                  Vanity Top to Master Bath, Bath 2, 3, 4, 5 &amp; Powder
                </Text>
              </div>
            </div>
          </div>
          <div className="flex flex-row w-full py-5">
            <div className="w-1/2 lg:w-1/4">
              <Text fontSize="md" fontWeight="semibold">
                ELECTRICAL INSTALLATION WITH THREE PHASE WIRING
              </Text>
            </div>
            <div className="w-1/2 lg:hidden grid grid-cols-4">
              <Text fontSize="md" fontWeight="light" className="col-span-2">
                Lighting Point
              </Text>
              <Text fontSize="md" fontWeight="light">
                40 nos
              </Text>
              <Text fontSize="md" fontWeight="light">
                53 nos
              </Text>

              <Text fontSize="md" fontWeight="light" className="col-span-2">
                Power Point
              </Text>
              <Text fontSize="md" fontWeight="light">
                32 nos
              </Text>
              <Text fontSize="md" fontWeight="light">
                44 nos
              </Text>

              <Text fontSize="md" fontWeight="light" className="col-span-2">
                Air Cond Point
              </Text>
              <Text fontSize="md" fontWeight="light">
                7 nos
              </Text>
              <Text fontSize="md" fontWeight="light">
                8 nos
              </Text>

              <Text fontSize="md" fontWeight="light" className="col-span-2">
                Fan Point
              </Text>
              <Text fontSize="md" fontWeight="light">
                7 nos
              </Text>
              <Text fontSize="md" fontWeight="light">
                9 nos
              </Text>

              <Text fontSize="md" fontWeight="light" className="col-span-2">
                Telephone Point
              </Text>
              <Text fontSize="md" fontWeight="light">
                1 no
              </Text>
              <Text fontSize="md" fontWeight="light">
                1 no
              </Text>

              <Text fontSize="md" fontWeight="light" className="col-span-2">
                FWS Point
              </Text>
              <Text fontSize="md" fontWeight="light">
                1 no
              </Text>
              <Text fontSize="md" fontWeight="light">
                1 no
              </Text>

              <Text fontSize="md" fontWeight="light" className="col-span-2">
                TV Point
              </Text>
              <Text fontSize="md" fontWeight="light">
                3 nos
              </Text>
              <Text fontSize="md" fontWeight="light">
                3 nos
              </Text>

              <Text fontSize="md" fontWeight="light" className="col-span-2">
                Bell Point
              </Text>
              <Text fontSize="md" fontWeight="light">
                1 no
              </Text>
              <Text fontSize="md" fontWeight="light">
                1 no
              </Text>

              <Text fontSize="md" fontWeight="light" className="col-span-2">
                Auto Gate Point
              </Text>
              <Text fontSize="md" fontWeight="light">
                1 no
              </Text>
              <Text fontSize="md" fontWeight="light">
                1 no
              </Text>

              <Text fontSize="md" fontWeight="light" className="col-span-2">
                Gate Light Point
              </Text>
              <Text fontSize="md" fontWeight="light">
                2 nos
              </Text>
              <Text fontSize="md" fontWeight="light">
                3 nos
              </Text>

              <Text fontSize="md" fontWeight="light" className="col-span-2">
                Water Pump Point
              </Text>
              <Text fontSize="md" fontWeight="light">
                1 no
              </Text>
              <Text fontSize="md" fontWeight="light">
                1 no
              </Text>

              <Text fontSize="md" fontWeight="light" className="col-span-2">
                Solar Heater Point
              </Text>
              <Text fontSize="md" fontWeight="light">
                1 no
              </Text>
              <Text fontSize="md" fontWeight="light">
                1 no
              </Text>

              <Text fontSize="md" fontWeight="light" className="col-span-2">
                Network Point
              </Text>
              <Text fontSize="md" fontWeight="light">
                1 no
              </Text>
              <Text fontSize="md" fontWeight="light">
                1 no
              </Text>
            </div>
            <div className="w-1/4 hidden lg:flex flex-col">
              <Text fontSize="md" fontWeight="light">
                Lighting Point
              </Text>
              <Text fontSize="md" fontWeight="light">
                Power Point
              </Text>
              <Text fontSize="md" fontWeight="light">
                Air Cond Point
              </Text>
              <Text fontSize="md" fontWeight="light">
                Fan Point
              </Text>
              <Text fontSize="md" fontWeight="light">
                Telephone Point
              </Text>
              <Text fontSize="md" fontWeight="light">
                FWS Point
              </Text>
              <Text fontSize="md" fontWeight="light">
                TV Point
              </Text>
              <Text fontSize="md" fontWeight="light">
                Bell Point
              </Text>
              <Text fontSize="md" fontWeight="light">
                Auto Gate Point
              </Text>
              <Text fontSize="md" fontWeight="light">
                Gate Light Point
              </Text>
              <Text fontSize="md" fontWeight="light">
                Water Pump Point
              </Text>
              <Text fontSize="md" fontWeight="light">
                Solar Heater Point
              </Text>
              <Text fontSize="md" fontWeight="light">
                Network Point
              </Text>
            </div>
            <div className="w-1/4 hidden lg:flex flex-col">
              <Text fontSize="md" fontWeight="light">
                40 nos
              </Text>
              <Text fontSize="md" fontWeight="light">
                32 nos
              </Text>
              <Text fontSize="md" fontWeight="light">
                7 nos
              </Text>
              <Text fontSize="md" fontWeight="light">
                7 nos
              </Text>
              <Text fontSize="md" fontWeight="light">
                1 no
              </Text>
              <Text fontSize="md" fontWeight="light">
                1 no
              </Text>
              <Text fontSize="md" fontWeight="light">
                3 nos
              </Text>
              <Text fontSize="md" fontWeight="light">
                1 no
              </Text>
              <Text fontSize="md" fontWeight="light">
                1 no
              </Text>
              <Text fontSize="md" fontWeight="light">
                2 nos
              </Text>
              <Text fontSize="md" fontWeight="light">
                1 no
              </Text>
              <Text fontSize="md" fontWeight="light">
                1 no
              </Text>
              <Text fontSize="md" fontWeight="light">
                1 no
              </Text>
            </div>
            <div className="w-1/4 hidden lg:flex flex-col">
              <Text fontSize="md" fontWeight="light">
                53 nos
              </Text>
              <Text fontSize="md" fontWeight="light">
                44 nos
              </Text>
              <Text fontSize="md" fontWeight="light">
                8 nos
              </Text>
              <Text fontSize="md" fontWeight="light">
                9 nos
              </Text>
              <Text fontSize="md" fontWeight="light">
                1 no
              </Text>
              <Text fontSize="md" fontWeight="light">
                1 no
              </Text>
              <Text fontSize="md" fontWeight="light">
                3 nos
              </Text>
              <Text fontSize="md" fontWeight="light">
                1 no
              </Text>
              <Text fontSize="md" fontWeight="light">
                1 no
              </Text>
              <Text fontSize="md" fontWeight="light">
                3 nos
              </Text>
              <Text fontSize="md" fontWeight="light">
                1 no
              </Text>
              <Text fontSize="md" fontWeight="light">
                1 no
              </Text>
              <Text fontSize="md" fontWeight="light">
                1 no
              </Text>
            </div>
          </div>

          <div className="flex flex-row w-full py-5">
            <div className="w-1/2 lg:w-1/4">
              <Text fontSize="md" fontWeight="semibold">
                EXTERNAL
              </Text>
            </div>
            <div className="hidden lg:w-1/4 lg:flex flex-col">
              <Text fontSize="md" fontWeight="light">
                Fence
              </Text>
              <Text fontSize="md" fontWeight="light">
                Gate
              </Text>
            </div>
            <div className="w-1/2 flex flex-col">
              <Text fontSize="md" fontWeight="light">
                Concrete Block Wall
              </Text>
              <Text fontSize="md" fontWeight="light">
                Mild Steel Frame with Aluminium Panel Main Gate
              </Text>
              <Text fontSize="md" fontWeight="light">
                Mild Steel Gate
              </Text>
            </div>
          </div>

          <div className="flex flex-row w-full py-5">
            <div className="w-1/2 lg:w-1/4">
              <Text fontSize="md" fontWeight="semibold">
                MISCELLANEOUS
              </Text>
            </div>
            <div className="w-auto lg:w-1/4"></div>
            <div className="w-1/2 lg:w-2/4 lg:flex space-y-5 lg:space-y-0 lg:space-x-0">
              <div className="w-full lg:w-1/2 flex flex-col">
                <Text fontSize="md" fontWeight="semibold">
                  2 - STOREY SEMI D
                </Text>
                <Text fontSize="md" fontWeight="light">
                  Home Alarm Security System
                </Text>
                <Text fontSize="md" fontWeight="light">
                  Solar Water Heating System
                </Text>
                <Text fontSize="md" fontWeight="light">
                  Hot Water Piping to all Showers only
                </Text>
                <Text fontSize="md" fontWeight="light">
                  Water Pump
                </Text>
                <Text fontSize="md" fontWeight="light">
                  Air-Cond Piping and Discharge Pipe
                </Text>
                <Text fontSize="md" fontWeight="light">
                  Stainless Steel Water Tank
                </Text>
                <Text fontSize="md" fontWeight="light">
                  Rain Water Harvesting System
                </Text>
                <Text fontSize="md" fontWeight="light">
                  Shower Screen to Master Bath only
                </Text>
                <Text fontSize="md" fontWeight="light">
                  Digital Lock to Entrance Door
                </Text>
              </div>
              <div className="w-full lg:w-1/2 flex flex-col">
                <Text fontSize="md" fontWeight="semibold">
                  2 - STOREY BUNGALOW
                </Text>
                <Text fontSize="md" fontWeight="light">
                  Home Alarm Security System
                </Text>
                <Text fontSize="md" fontWeight="light">
                  Solar Water Heating System
                </Text>
                <Text fontSize="md" fontWeight="light">
                  Hot Water Piping to all Showers only
                </Text>
                <Text fontSize="md" fontWeight="light">
                  Water Pump
                </Text>
                <Text fontSize="md" fontWeight="light">
                  Air-Cond Piping and Discharge Pipe
                </Text>
                <Text fontSize="md" fontWeight="light">
                  Stainless Steel Water Tank
                </Text>
                <Text fontSize="md" fontWeight="light">
                  Rain Water Harvesting System
                </Text>
                <Text fontSize="md" fontWeight="light">
                  Shower Screen to Master Bath, Bath 2, 3, 4 &amp; 5
                </Text>
                <Text fontSize="md" fontWeight="light">
                  Digital Lock to Entrance Door
                </Text>
                <Text fontSize="md" fontWeight="light">
                  Bath Tub to Master Bath only
                </Text>
              </div>
            </div>
          </div>
        </div>
      </Layout>
    </>
  );
};

export default ProjectPage;
