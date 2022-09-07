import { Swiper, SwiperSlide } from "swiper/react";
import { Pagination } from "swiper";
import "swiper/css";
import "swiper/css/pagination";
import type { NextPage } from "next";
import Head from "next/head";
import {
  Box,
  Text,
  useMediaQuery,
  Button,
  Checkbox,
  FormControl,
  FormLabel,
  IconButton,
  Input,
  RadioGroup,
  Stack,
  Radio,
  Select,
} from "@chakra-ui/react";
import { Navbar } from "../components/Navbar";
import Link from "next/link";

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

const MOBILE_COUNTRY_CODE = [
  "Algeria (213)",
  "American Samoa (1684)",
  "Andorra (376)",
  "Angola (244)",
  "Anguilla (1264)",
  "Antarctica/Norfolk Island (672)",
  "Antigua And Barbuda (1268)",
  "Argentina (54)",
  "Armenia (355)",
  "Aruba (297)",
  "Australia/Cocos/Christmas Islands (61)",
  "Austria (43)",
  "Azerbaijan (994)",
  "Bahrain (973)",
  "Bangladesh (880)",
  "Barbados (1246)",
  "Belarus (375)",
  "Belgium (32)",
  "Belize (501)",
  "Benin (229)",
  "Bermuda (1441)",
  "Bhutan (975)",
  "Bolivia (591)",
  "Bosnia And Herzegowina (387)",
  "Botswana (267)",
  "Brazil (55)",
  "Brunei Darussalam (673)",
  "Bulgaria (359)",
  "Burkina Faso (226)",
  "Burundi (257)",
  "Cambodia (855)",
  "Cameroon (237)",
  "Cayman Islands (1345)",
  "Central African Republic (236)",
  "Chad (235)",
  "Chile (56)",
  "China (86)",
  "Colombia (57)",
  "Comoros (269)",
  "Congo, Democratic Republic Of (243)",
  "Congo, Peoples Republic Of (242)",
  "Cook Islands (682",
  "Costa Rica (506)",
  "Cote Divoire (225)",
  "Croatia (385)",
  "Cuba (53)",
  "Cyprus (357)",
  "Czech Republic (420)",
  "Denmark (45)",
  "Djibouti (253)",
  "Dominica (1767)",
  "Dominican Republic (1809)",
  "East Timor/Timor-Leste (670)",
  "Ecuador (593)",
  "Egypt (20)",
  "El Salvador (503)",
  "Equatorial Guinea (240)",
  "Estonia (372)",
  "Ethiopia (251)",
  "Falkland Islands (Malvinas) (500)",
  "Faroe Islands (298)",
  "Fiji (679)",
  "Finland (358)",
  "France (33)",
  "French Guiana (594",
  "French Polynesia (689)",
  "Gabon (241)",
  "Gambia (220)",
  "Georgia (995)",
  "Germany (49)",
  "Ghana (233)",
  "Gibraltar (350)",
  "Greece (30)",
  "Greenland (299)",
  "Grenada (1473)",
  "Guadeloupe/Saint Barthelemy (590)",
  "Guam (1671)",
  "Guatemala (502)",
  "Guinea (224)",
  "Guinea-Bissau (245)",
  "Guyana (592)",
  "Haiti (509)",
  "Honduras (504)",
  "Hong Kong (852)",
  "Hungary (36)",
  "Iceland (354)",
  "India (91)",
  "Indonesia (62)",
  "Iran (98)",
  "Iraq (964)",
  "Ireland (353)",
  "Israel (972)",
  "Italy (39)",
  "Jamaica (1876)",
  "Japan (81)",
  "Jordan (962)",
  "Kenya (254)",
  "Kiribati (686)",
  "Korea, North (850)",
  "South Korea (82)",
  "Kuwait (965)",
  "Kyrgyzstan (996)",
  "Laos (856)",
  "Latvia (371)",
  "Lebanon (961)",
  "Lesotho (266)",
  "Liberia (231)",
  "Libyan Arab Jamahiriya (218)",
  "Liechtenstein (423)",
  "Lithuania (370)",
  "Luxembourg (352)",
  "Macao (853)",
  "Macedonia (389)",
  "Madagascar (261)",
  "Malawi (265)",
  "Malaysia (60)",
  "Maldives (960)",
  "Mali (223)",
  "Malta (356)",
  "Marshall Islands (692)",
  "Martinique (596)",
  "Mauritania (222)",
  "Mauritius (230)",
  "Mayotte Islands (262)",
  "Mexico (52)",
  "Micronesia (691)",
  "Moldova (373)",
  "Monaco (377)",
  "Mongolia (976)",
  "Montenegro (382)",
  "Montserrat (664)",
  "Morocco (212)",
  "Mozambique (258)",
  "Myanmar (95)",
  "Namibia (264)",
  "Nauru (674)",
  "Nepal (977)",
  "Netherlands (31)",
  "New Caledonia (687)",
  "New Zealand (64)",
  "Niger (227)",
  "Nigeria (234)",
  "Niue (683)",
  "Norway (47)",
  "Oman (968)",
  "Pakistan (92)",
  "Palau (680)",
  "Panama (507)",
  "Papua New Guinea (675)",
  "Paraguay (595)",
  "Peru (51)",
  "Philippines (63)",
  "Poland (48)",
  "Portugal (351)",
  "Qatar (974)",
  "Romania (40)",
  "Russia/Kazakhstan (7)",
  "Rwanda (250)",
  "Saint Kitts And Nevis (1869)",
  "Saint Lucia (1758)",
  "Saint Martin (1599)",
  "Saint Vincent And The Grenadines (1784)",
  "Samoa (685)",
  "San Marino (378)",
  "Sao Tome And Principe (239)",
  "Saudi Arabia (966)",
  "Senegal (221)",
  "Serbia/Yugoslavia (381)",
  "Sierra Leone (232)",
  "Singapore (65)",
  "Slovakia (Slovak Republic) (421)",
  "Slovenia (386)",
  "Solomon Islands (677)",
  "Somalia (252)",
  "South Africa (27)",
  "Spain (34)",
  "Sri Lanka (94)",
  "St. Helena (290)",
  "St. Pierre And Miquelon (508)",
  "Sudan (249)",
  "Suriname (597)",
  "Swaziland (268)",
  "Sweden (46)",
  "Switzerland (41)",
  "Syrian Arab Republic (963)",
  "Taiwan (886)",
  "Tajikistan (992)",
  "Tanzania, United Republic Of (255)",
  "Thailand (66)",
  "Togo (228)",
  "Tonga (676)",
  "Trinidad And Tobago (1868)",
  "Tunisia (216)",
  "Turkey (90)",
  "Turkmenistan (993)",
  "Turks And Caicos Islands (1649)",
  "Uganda (256)",
  "Ukraine (380)",
  "United Arab Emirates (971)",
  "United Kingdom (44)",
  "United States/Canada (1)",
  "Uruguay (598)",
  "Uzbekistan (998)",
  "Vanuatu (678)",
  "Venezuela (58)",
  "Vietnam (84)",
  "Virgin Islands (British) (1284)",
  "Virgin Islands (U.S) (1340)",
  "Wallis And Futuna Islands (681)",
  "Yemen (967)",
  "Zambia (260)",
  "Zimbabwe (263)",
  "Other",
];

const Home: NextPage = () => {
  const [isDesktop] = useMediaQuery("(min-width: 1024px)");
  const [isTablet] = useMediaQuery("(min-width: 768px)");

  return (
    <>
      <Head>
        <title>Saujana Intan @ Seremban 2 Height</title>
        <meta name="description" content="Saujana Intan @ Seremban 2 Height" />
        <link rel="icon" href="/favicon.ico" />
      </Head>
      <Navbar></Navbar>
      <div id="home">
        <Swiper
          className="mt-24 lg:mt-0"
          pagination={{
            clickable: true,
          }}
          modules={[Pagination]}
          slidesPerView={1}
          onSlideChange={() => console.log("slide change")}
          onSwiper={(swiper) => console.log(swiper)}
        >
          <SwiperSlide>
            <img
              className="mx-auto lg:mt-36"
              src={
                isDesktop
                  ? "/assets/images/banner/slider1b.png"
                  : "/assets/images/Slider-1@2x.jpg"
              }
            />
          </SwiperSlide>
          <SwiperSlide>
            <img
              className="mx-auto lg:mt-36"
              src={
                isDesktop
                  ? "/assets/images/banner/slider2b.png"
                  : "/assets/images/Slider-2@2x.jpg"
              }
            />
          </SwiperSlide>
          <SwiperSlide>
            <img
              className="mx-auto lg:mt-36"
              src={
                isDesktop
                  ? "/assets/images/banner/slider3b.png"
                  : "/assets/images/Slider-3@2x.jpg"
              }
            />
          </SwiperSlide>
        </Swiper>
      </div>
      <div id="project">
        <div className="lg:px-20 mb-10">
          <img
            src={
              isDesktop
                ? "/assets/images/welcome-to-a-breathtaking-2.jpeg"
                : "/assets/images/Welcome-to-a-breathtaking@2x.jpg"
            }
            className="pt-20 lg:pt-32 mx-auto w-full"
          />
        </div>
        <div className="container mx-auto lg:px-20 mb-10">
          <div className="flex justify-center my-10 px-5 lg:px-60 2lg:px-80">
            <Text fontSize={isDesktop ? "xl" : "md"} textAlign="center">
              Enrich your life in a new luxurious home built in a harmonious
              combination of urban and natural settings at Seremban 2.
            </Text>
          </div>
          <div className="lg:divide-y lg:divide-yellow-800 lg:divide-dashed mb-20">
            <div className="hidden md:grid lg:hidden grid-cols-3 divide-x divide-y divide-yellow-800 divide-dashed">
              {[...gridItem, ...gridItem2].map((item, k) => {
                return (
                  <div
                    key={k}
                    style={{
                      borderTop: [1, 2].includes(k) ? 0 : undefined,
                      borderLeft: [3, 6].includes(k) ? 0 : undefined,
                    }}
                    className="flex flex-1 flex-grow flex-col justify-center items-center p-5"
                  >
                    <img src={item.img} className="mb-5 h-10" />
                    <Text fontSize="xs" textAlign="center" lineHeight="shorter">
                      {item.line1}
                    </Text>
                    <Text fontSize="xs" textAlign="center" lineHeight="shorter">
                      {item.line2}
                    </Text>
                  </div>
                );
              })}
            </div>
            <div className="flex md:hidden lg:flex flex-col lg:flex-row lg:divide-x lg:divide-yellow-800 lg:divide-dashed">
              {gridItem.map((item, k) => {
                return (
                  <div
                    key={k}
                    className="flex flex-1 flex-grow flex-col justify-center items-center p-5"
                  >
                    <img src={item.img} className="mb-5 h-10" />
                    <Text fontSize="xs" textAlign="center" lineHeight="shorter">
                      {item.line1}
                    </Text>
                    <Text fontSize="xs" textAlign="center" lineHeight="shorter">
                      {item.line2}
                    </Text>
                  </div>
                );
              })}
            </div>
            <div className="flex md:hidden lg:flex flex-col lg:flex-row lg:divide-x lg:divide-yellow-800 lg:divide-dashed">
              {gridItem2.map((item, k) => {
                return (
                  <div
                    key={k}
                    className="flex flex-1 flex-grow flex-col justify-center items-center p-5"
                  >
                    <img src={item.img} className="mb-5 h-10" />
                    <Text fontSize="xs" textAlign="center" lineHeight="shorter">
                      {item.line1}
                    </Text>
                    <Text fontSize="xs" textAlign="center" lineHeight="shorter">
                      {item.line2}
                    </Text>
                  </div>
                );
              })}
            </div>
          </div>
        </div>
        <div className="container mx-auto lg:px-2 mb-10">
          <Swiper
            pagination={{
              clickable: true,
            }}
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
        </div>
        <div className="container mx-auto lg:px-20 mb-10">
          <div className="flex justify-start lg:justify-end lg:w-full w-1/2 mt-10 mb-2 mx-5 lg:m-0">
            <img
              src="/assets/images/page-2/Specifications.png"
              className="lg:w-64"
            />
          </div>

          <div className="divide-y divide-yellow-800 px-5">
            <div className="flex flex-row w-full py-5 space-x-2">
              <div className="w-2/5 lg:w-1/4">
                <Text fontSize="sm" fontWeight="semibold">
                  STRUCTURE
                </Text>
              </div>
              <Text fontSize="sm" fontWeight="light" className="w-3/5 lg:w-3/4">
                Reinforced Concrete Frame
              </Text>
            </div>

            <div className="flex flex-row w-full py-5 space-x-2">
              <div className="w-2/5 lg:w-1/4">
                <Text fontSize="sm" fontWeight="semibold">
                  WALL
                </Text>
              </div>
              <Text fontSize="sm" fontWeight="light" className="w-3/5 lg:w-3/4">
                Common Clay Brick Wall
              </Text>
            </div>

            <div className="flex flex-row w-full py-5 space-x-2">
              <div className="w-2/5 lg:w-1/4">
                <Text fontSize="sm" fontWeight="semibold">
                  ROOF
                </Text>
              </div>
              <Text fontSize="sm" fontWeight="light" className="w-3/5 lg:w-3/4">
                Metal Roofing Sheet / Reinforced Concrete Roof
              </Text>
            </div>

            <div className="flex flex-row w-full py-5 space-x-2">
              <div className="w-2/5 lg:w-1/4">
                <Text fontSize="sm" fontWeight="semibold">
                  CEILING FINISHES
                </Text>
              </div>
              <Text fontSize="sm" fontWeight="light" className="w-3/5 lg:w-3/4">
                Skimcoat / Plasterglass Ceiling
              </Text>
            </div>

            <div className="flex flex-row w-full py-5 space-x-2">
              <div className="w-2/5 lg:w-1/4">
                <Text fontSize="sm" fontWeight="semibold">
                  FLOOR FINISHES
                </Text>
              </div>
              <Text fontSize="sm" fontWeight="light" className="w-3/5 lg:w-3/4">
                Porcelein Tiles / Ceramics Tiles / Laminated Flooring
              </Text>
            </div>

            <div className="flex flex-row w-full py-5 space-x-2">
              <div className="w-2/5 lg:w-1/4">
                <Text fontSize="sm" fontWeight="semibold">
                  WALL FINISHES
                </Text>
              </div>
              <div className="w-3/5 lg:w-3/4 flex flex-col lg:flex-row">
                <div className="flex flex-col lg:w-1/3 mr-5 lg:mr-0">
                  <Text fontSize="sm" fontWeight="light">
                    Kitchen &amp; Bathrooms
                  </Text>
                  <Text fontSize="sm" fontWeight="light">
                    Other Areas
                  </Text>
                </div>
                <div className="flex flex-col lg:w-1/3">
                  <Text fontSize="sm" fontWeight="light">
                    Tiles Up to Ceiling Height
                  </Text>
                  <Text fontSize="sm" fontWeight="light">
                    Plaster and Paint
                  </Text>
                </div>
              </div>
            </div>

            <div className="flex flex-row w-full py-5 space-x-2">
              <div className="w-2/5 lg:w-1/4">
                <Text fontSize="sm" fontWeight="semibold">
                  DOORS
                </Text>
              </div>
              <div className="w-3/5 lg:w-3/4 flex flex-col">
                <Text fontSize="sm" fontWeight="light">
                  Decorative Entrace Door
                </Text>
                <Text fontSize="sm" fontWeight="light">
                  Powder Coated Aluminium Frame with Tinted Glass Doors
                </Text>
                <Text fontSize="sm" fontWeight="light">
                  Moulded Doors
                </Text>
              </div>
            </div>

            <div className="flex flex-row w-full py-5 space-x-2">
              <div className="w-2/5 lg:w-1/4">
                <Text fontSize="sm" fontWeight="semibold">
                  WINDOWS
                </Text>
              </div>
              <Text fontSize="sm" fontWeight="light" className="w-3/5 lg:w-3/4">
                Powder Coated Aluminium Frame with Tinted Glass / Obsecured
                Glass Window
              </Text>
            </div>

            <div className="flex flex-row w-full py-5 space-x-2">
              <div className="w-2/5 lg:w-1/4">
                <Text fontSize="sm" fontWeight="semibold">
                  SANITARY FITTINGS
                </Text>
              </div>
              <div className="w-3/5 lg:w-3/4 lg:flex space-y-5 lg:space-y-0 lg:space-x-3">
                <div className="w-full lg:w-1/3 flex flex-col">
                  <Text fontSize="sm" fontWeight="light">
                    Kitchen
                  </Text>
                  <Text fontSize="sm" fontWeight="light">
                    Bathrooms
                  </Text>
                </div>
                <div className="w-full lg:w-1/3 flex flex-col">
                  <Text fontSize="sm" fontWeight="semibold">
                    2 - STOREY SEMI D
                  </Text>
                  <Text fontSize="sm" fontWeight="light">
                    Stainless Steel Sink
                  </Text>
                  <Text fontSize="sm" fontWeight="light">
                    Basin, Hand Shower, Paper Holder &amp; Padestal Water Closet
                  </Text>
                  <Text fontSize="sm" fontWeight="light">
                    Vanity Top to Master Bath only
                  </Text>
                </div>
                <div className="w-full lg:w-1/3 flex flex-col">
                  <Text fontSize="sm" fontWeight="semibold">
                    2 - STOREY BUNGALOW
                  </Text>
                  <Text fontSize="sm" fontWeight="light">
                    Stainless Steel Sink
                  </Text>
                  <Text fontSize="sm" fontWeight="light">
                    Basin, Hand Shower, Paper Holder &amp; Padestal Water Closet
                  </Text>
                  <Text fontSize="sm" fontWeight="light">
                    Vanity Top to Master Bath, Bath 2, 3, 4, 5 &amp; Powder
                  </Text>
                </div>
              </div>
            </div>
            <div className="flex flex-row w-full py-5 space-x-3">
              <div className="w-2/5 lg:w-1/4">
                <Text fontSize="sm" fontWeight="semibold">
                  ELECTRICAL INSTALLATION WITH THREE PHASE WIRING
                </Text>
              </div>
              <div className="w-3/5 lg:hidden grid grid-cols-4">
                <Text fontSize="sm" fontWeight="light" className="col-span-2">
                  Lighting Point
                </Text>
                <Text fontSize="sm" fontWeight="light">
                  40 nos
                </Text>
                <Text fontSize="sm" fontWeight="light">
                  53 nos
                </Text>

                <Text fontSize="sm" fontWeight="light" className="col-span-2">
                  Power Point
                </Text>
                <Text fontSize="sm" fontWeight="light">
                  32 nos
                </Text>
                <Text fontSize="sm" fontWeight="light">
                  44 nos
                </Text>

                <Text fontSize="sm" fontWeight="light" className="col-span-2">
                  Air Cond Point
                </Text>
                <Text fontSize="sm" fontWeight="light">
                  7 nos
                </Text>
                <Text fontSize="sm" fontWeight="light">
                  8 nos
                </Text>

                <Text fontSize="sm" fontWeight="light" className="col-span-2">
                  Fan Point
                </Text>
                <Text fontSize="sm" fontWeight="light">
                  7 nos
                </Text>
                <Text fontSize="sm" fontWeight="light">
                  9 nos
                </Text>

                <Text fontSize="sm" fontWeight="light" className="col-span-2">
                  Telephone Point
                </Text>
                <Text fontSize="sm" fontWeight="light">
                  1 no
                </Text>
                <Text fontSize="sm" fontWeight="light">
                  1 no
                </Text>

                <Text fontSize="sm" fontWeight="light" className="col-span-2">
                  FWS Point
                </Text>
                <Text fontSize="sm" fontWeight="light">
                  1 no
                </Text>
                <Text fontSize="sm" fontWeight="light">
                  1 no
                </Text>

                <Text fontSize="sm" fontWeight="light" className="col-span-2">
                  TV Point
                </Text>
                <Text fontSize="sm" fontWeight="light">
                  3 nos
                </Text>
                <Text fontSize="sm" fontWeight="light">
                  3 nos
                </Text>

                <Text fontSize="sm" fontWeight="light" className="col-span-2">
                  Bell Point
                </Text>
                <Text fontSize="sm" fontWeight="light">
                  1 no
                </Text>
                <Text fontSize="sm" fontWeight="light">
                  1 no
                </Text>

                <Text fontSize="sm" fontWeight="light" className="col-span-2">
                  Auto Gate Point
                </Text>
                <Text fontSize="sm" fontWeight="light">
                  1 no
                </Text>
                <Text fontSize="sm" fontWeight="light">
                  1 no
                </Text>

                <Text fontSize="sm" fontWeight="light" className="col-span-2">
                  Gate Light Point
                </Text>
                <Text fontSize="sm" fontWeight="light">
                  2 nos
                </Text>
                <Text fontSize="sm" fontWeight="light">
                  3 nos
                </Text>

                <Text fontSize="sm" fontWeight="light" className="col-span-2">
                  Water Pump Point
                </Text>
                <Text fontSize="sm" fontWeight="light">
                  1 no
                </Text>
                <Text fontSize="sm" fontWeight="light">
                  1 no
                </Text>

                <Text fontSize="sm" fontWeight="light" className="col-span-2">
                  Solar Heater Point
                </Text>
                <Text fontSize="sm" fontWeight="light">
                  1 no
                </Text>
                <Text fontSize="sm" fontWeight="light">
                  1 no
                </Text>

                <Text fontSize="sm" fontWeight="light" className="col-span-2">
                  Network Point
                </Text>
                <Text fontSize="sm" fontWeight="light">
                  1 no
                </Text>
                <Text fontSize="sm" fontWeight="light">
                  1 no
                </Text>
              </div>
              <div className="w-1/4 hidden lg:flex flex-col">
                <Text fontSize="sm" fontWeight="light">
                  Lighting Point
                </Text>
                <Text fontSize="sm" fontWeight="light">
                  Power Point
                </Text>
                <Text fontSize="sm" fontWeight="light">
                  Air Cond Point
                </Text>
                <Text fontSize="sm" fontWeight="light">
                  Fan Point
                </Text>
                <Text fontSize="sm" fontWeight="light">
                  Telephone Point
                </Text>
                <Text fontSize="sm" fontWeight="light">
                  FWS Point
                </Text>
                <Text fontSize="sm" fontWeight="light">
                  TV Point
                </Text>
                <Text fontSize="sm" fontWeight="light">
                  Bell Point
                </Text>
                <Text fontSize="sm" fontWeight="light">
                  Auto Gate Point
                </Text>
                <Text fontSize="sm" fontWeight="light">
                  Gate Light Point
                </Text>
                <Text fontSize="sm" fontWeight="light">
                  Water Pump Point
                </Text>
                <Text fontSize="sm" fontWeight="light">
                  Solar Heater Point
                </Text>
                <Text fontSize="sm" fontWeight="light">
                  Network Point
                </Text>
              </div>
              <div className="w-1/4 hidden lg:flex flex-col">
                <Text fontSize="sm" fontWeight="light">
                  40 nos
                </Text>
                <Text fontSize="sm" fontWeight="light">
                  32 nos
                </Text>
                <Text fontSize="sm" fontWeight="light">
                  7 nos
                </Text>
                <Text fontSize="sm" fontWeight="light">
                  7 nos
                </Text>
                <Text fontSize="sm" fontWeight="light">
                  1 no
                </Text>
                <Text fontSize="sm" fontWeight="light">
                  1 no
                </Text>
                <Text fontSize="sm" fontWeight="light">
                  3 nos
                </Text>
                <Text fontSize="sm" fontWeight="light">
                  1 no
                </Text>
                <Text fontSize="sm" fontWeight="light">
                  1 no
                </Text>
                <Text fontSize="sm" fontWeight="light">
                  2 nos
                </Text>
                <Text fontSize="sm" fontWeight="light">
                  1 no
                </Text>
                <Text fontSize="sm" fontWeight="light">
                  1 no
                </Text>
                <Text fontSize="sm" fontWeight="light">
                  1 no
                </Text>
              </div>
              <div className="w-1/4 hidden lg:flex flex-col">
                <Text fontSize="sm" fontWeight="light">
                  53 nos
                </Text>
                <Text fontSize="sm" fontWeight="light">
                  44 nos
                </Text>
                <Text fontSize="sm" fontWeight="light">
                  8 nos
                </Text>
                <Text fontSize="sm" fontWeight="light">
                  9 nos
                </Text>
                <Text fontSize="sm" fontWeight="light">
                  1 no
                </Text>
                <Text fontSize="sm" fontWeight="light">
                  1 no
                </Text>
                <Text fontSize="sm" fontWeight="light">
                  3 nos
                </Text>
                <Text fontSize="sm" fontWeight="light">
                  1 no
                </Text>
                <Text fontSize="sm" fontWeight="light">
                  1 no
                </Text>
                <Text fontSize="sm" fontWeight="light">
                  3 nos
                </Text>
                <Text fontSize="sm" fontWeight="light">
                  1 no
                </Text>
                <Text fontSize="sm" fontWeight="light">
                  1 no
                </Text>
                <Text fontSize="sm" fontWeight="light">
                  1 no
                </Text>
              </div>
            </div>

            <div className="flex flex-row w-full py-5 space-x-2">
              <div className="w-2/5 lg:w-1/4">
                <Text fontSize="sm" fontWeight="semibold">
                  EXTERNAL
                </Text>
              </div>
              <div className="w-3/5 lg:w-3/4 flex lg:space-x-3">
                <div className="w-1/3 lg:flex flex-col">
                  <Text fontSize="sm" fontWeight="light">
                    Fence
                  </Text>
                  <Text fontSize="sm" fontWeight="light">
                    Gate
                  </Text>
                </div>
                <div className="w-2/3 flex flex-col">
                  <Text fontSize="sm" fontWeight="light">
                    Concrete Block Wall
                  </Text>
                  <Text fontSize="sm" fontWeight="light">
                    Mild Steel Frame with Aluminium Panel Main Gate
                  </Text>
                  <Text fontSize="sm" fontWeight="light">
                    Mild Steel Gate
                  </Text>
                </div>
              </div>
            </div>

            <div className="flex flex-row w-full py-5 space-x-2">
              <div className="w-2/5 lg:w-1/4">
                <Text fontSize="sm" fontWeight="semibold">
                  MISCELLANEOUS
                </Text>
              </div>
              <div className="hidden lg:block lg:w-1/4"></div>
              <div className="w-3/5 lg:w-2/4 lg:flex space-y-5 lg:space-y-0 lg:space-x-3">
                <div className="w-full lg:w-1/2 flex flex-col">
                  <Text fontSize="sm" fontWeight="semibold">
                    2 - STOREY SEMI D
                  </Text>
                  <Text fontSize="sm" fontWeight="light">
                    Home Alarm Security System
                  </Text>
                  <Text fontSize="sm" fontWeight="light">
                    Solar Water Heating System
                  </Text>
                  <Text fontSize="sm" fontWeight="light">
                    Hot Water Piping to all Showers only
                  </Text>
                  <Text fontSize="sm" fontWeight="light">
                    Water Pump
                  </Text>
                  <Text fontSize="sm" fontWeight="light">
                    Air-Cond Piping and Discharge Pipe
                  </Text>
                  <Text fontSize="sm" fontWeight="light">
                    Stainless Steel Water Tank
                  </Text>
                  <Text fontSize="sm" fontWeight="light">
                    Rain Water Harvesting System
                  </Text>
                  <Text fontSize="sm" fontWeight="light">
                    Shower Screen to Master Bath only
                  </Text>
                  <Text fontSize="sm" fontWeight="light">
                    Digital Lock to Entrance Door
                  </Text>
                </div>
                <div className="w-full lg:w-1/2 flex flex-col">
                  <Text fontSize="sm" fontWeight="semibold">
                    2 - STOREY BUNGALOW
                  </Text>
                  <Text fontSize="sm" fontWeight="light">
                    Home Alarm Security System
                  </Text>
                  <Text fontSize="sm" fontWeight="light">
                    Solar Water Heating System
                  </Text>
                  <Text fontSize="sm" fontWeight="light">
                    Hot Water Piping to all Showers only
                  </Text>
                  <Text fontSize="sm" fontWeight="light">
                    Water Pump
                  </Text>
                  <Text fontSize="sm" fontWeight="light">
                    Air-Cond Piping and Discharge Pipe
                  </Text>
                  <Text fontSize="sm" fontWeight="light">
                    Stainless Steel Water Tank
                  </Text>
                  <Text fontSize="sm" fontWeight="light">
                    Rain Water Harvesting System
                  </Text>
                  <Text fontSize="sm" fontWeight="light">
                    Shower Screen to Master Bath, Bath 2, 3, 4 &amp; 5
                  </Text>
                  <Text fontSize="sm" fontWeight="light">
                    Digital Lock to Entrance Door
                  </Text>
                  <Text fontSize="sm" fontWeight="light">
                    Bath Tub to Master Bath only
                  </Text>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
      <div id="site-plan">
        <div className="container mx-auto lg:px-2 mb-10">
          <div className="flex flex-col-reverse lg:flex-row pt-44 lg:mt-0">
            <div className="w-full lg:w-4/5 mt-10 lg:m-0">
              <img
                className="mx-auto"
                src={
                  isDesktop
                    ? "/assets/images/plan-ada-pokok-desktop.png"
                    : isTablet
                    ? "/assets/images/page-3/Tablet-Saujana-Intan_SiteMap.svg"
                    : "/assets/images/page-3/Mobile-Saujana Intan_SiteMap.svg"
                }
              />
            </div>
            <div className="flex flex-grow flex-col items-center lg:items-start lg:pt-20 space-y-12 lg:pl-10">
              <div className="h-20">
                <img
                  src="/assets/images/page-3/SitePlan@2x.png"
                  className="w-48"
                />
              </div>
              <div className="flex items-center space-x-2">
                <Text fontSize="lg" className="leading-none">
                  TOTAL
                  <br />
                  UNITS:
                </Text>
                <Text fontSize="4xl" className="leading-none">
                  42
                </Text>
              </div>
              <div className="flex flex-col flex-start space-y-2">
                <div className="flex items-center space-x-4">
                  <Box height={6} width={6} backgroundColor="#E1BA8B"></Box>
                  <Text fontSize="xl" fontWeight="semibold">
                    2 STOREY SEMI-D
                  </Text>
                </div>
                <div className="flex items-center space-x-4">
                  <Box height={6} width={6} backgroundColor="#B099C8"></Box>
                  <Text fontSize="xl" fontWeight="semibold">
                    2 STOREY BUNGALOW
                  </Text>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
      <div id="location">
        <div className="flex flex-col px-10 lg:px-0 pt-44 lg:mt-0">
          <div className="container mx-auto lg:px-20 mb-10">
            <div className="h-20 mt-0 lg:mt-10 mb-10 ">
              <img
                src="/assets/images/page-4/LocationMap@2x.png"
                className="h-full mx-auto lg:ml-10"
              />
            </div>
          </div>

          <div className="container mx-auto lg:px-5 mb-10">
            <div className="flex flex-col-reverse lg:flex-row gap-10">
              <div className="flex-1 ">
                <img
                  className="mx-auto"
                  src={
                    isDesktop
                      ? "/assets/images/page-4/fasilities.png"
                      : isTablet
                      ? "/assets/images/page-2/Tablet-fasilities.png"
                      : "/assets/images/page-2/Fasilities@2x.png"
                  }
                />
              </div>
              <div className="flex-1 ">
                <img
                  className="mx-auto"
                  src="/assets/images/page-4/Map@2x.png"
                />
              </div>
            </div>
          </div>
        </div>
      </div>
      <div id="gallery">
        <Swiper
          className="mt-20 lg:mt-0"
          pagination={{
            clickable: true,
          }}
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
      </div>
      <div id="registration" className="container mx-auto lg:px-20 mb-10">
        <div className="px-5 lg:px-0 pt-44 lg:mt-0">
          <div className="flex flex-col lg:items-end mb-16">
            <div className="h-20 mt-0 lg:mt-10 mb-10 ">
              <img
                src="/assets/images/page-5/Registration@2x.png"
                className="h-full mx-auto lg:ml-10"
              />
            </div>
            {/* <div className="h-20 my-14 mr-20">
            <img
              src="/assets/images/page-5/Registration@2x.png"
              className="h-full"
            />
          </div> */}
            <div className="space-y-5 w-full mb-16">
              <FormControl
                isRequired
                className="flex items-start justify-center flex-col lg:flex-row lg:items-end"
              >
                <FormLabel
                  htmlFor="fullname"
                  sx={{ padding: 0, margin: 0 }}
                  className="w-60"
                  fontWeight="light"
                  fontSize="md"
                >
                  Full Name
                </FormLabel>
                <Input
                  fontSize="2xl"
                  id="fullname"
                  type="text"
                  variant="flushed"
                  borderColor="#794515"
                  focusBorderColor="#794515"
                />
              </FormControl>

              <FormControl
                isRequired
                className="flex items-start justify-center flex-col lg:flex-row lg:items-end"
              >
                <FormLabel
                  htmlFor="project_name"
                  sx={{ padding: 0, margin: 0 }}
                  className="w-60"
                  fontWeight="light"
                  fontSize="md"
                >
                  Project Name
                </FormLabel>
                <Input
                  fontSize="2xl"
                  id="project_name"
                  type="text"
                  variant="flushed"
                  borderColor="#794515"
                  focusBorderColor="#794515"
                />
              </FormControl>

              <FormControl
                isRequired
                className="flex items-start justify-center flex-col lg:flex-row lg:items-end"
              >
                <FormLabel
                  htmlFor="email"
                  sx={{ padding: 0, margin: 0 }}
                  className="w-60"
                  fontWeight="light"
                  fontSize="md"
                >
                  Email
                </FormLabel>
                <Input
                  fontSize="2xl"
                  id="email"
                  type="email"
                  variant="flushed"
                  borderColor="#794515"
                  focusBorderColor="#794515"
                />
              </FormControl>

              <FormControl
                isRequired
                className="flex items-start justify-center flex-col lg:flex-row lg:items-end"
              >
                <FormLabel
                  htmlFor="mobile_number"
                  sx={{ padding: 0, margin: 0 }}
                  className="w-60"
                  fontWeight="light"
                  fontSize="md"
                >
                  Mobile Number
                </FormLabel>
                <div className="flex w-full space-x-2">
                  <Select
                    width={{ base: "100%", md: "20rem" }}
                    placeholder="Select option"
                    variant="flushed"
                    borderColor="#794515"
                    focusBorderColor="#794515"
                  >
                    {MOBILE_COUNTRY_CODE.map((code) => {
                      return (
                        <option
                          value={code}
                          key={code}
                          selected={code === "Malaysia (60)"}
                        >
                          {code}
                        </option>
                      );
                    })}
                  </Select>
                  <Input
                    fontSize="2xl"
                    id="mobile_number"
                    type="text"
                    variant="flushed"
                    borderColor="#794515"
                    focusBorderColor="#794515"
                  />
                </div>
              </FormControl>

              <FormControl
                isRequired
                className="flex items-start justify-center flex-col lg:flex-row lg:items-end"
              >
                <FormLabel
                  htmlFor="mobile_country_code"
                  sx={{ padding: 0, margin: 0 }}
                  className="w-60"
                  fontWeight="light"
                  fontSize="md"
                >
                  Mobile Country Code
                </FormLabel>
                <Input
                  fontSize="2xl"
                  id="mobile_country_code"
                  type="text"
                  variant="flushed"
                  borderColor="#794515"
                  focusBorderColor="#794515"
                />
              </FormControl>

              <FormControl
                isRequired
                className="flex items-start flex-col lg:flex-row lg:items-end"
              >
                <FormLabel
                  htmlFor="customer_type"
                  sx={{ padding: 0, margin: 0 }}
                  className="w-48"
                  fontWeight="light"
                  fontSize="md"
                >
                  Customer Type
                </FormLabel>
                <RadioGroup
                  defaultValue="individual"
                  className="h-10 flex items-end"
                  id="customer_type"
                >
                  <Stack direction="row">
                    <Radio value="individual">Individual</Radio>
                    <Radio value="company">Company</Radio>
                  </Stack>
                </RadioGroup>
              </FormControl>
            </div>

            <div className="space-y-3 w-full mb-5">
              <FormControl className="flex items-center">
                <Checkbox
                  size="lg"
                  spacing="1rem"
                  colorScheme="orange"
                  sx={{ alignItems: "flex-start" }}
                >
                  <Text
                    fontWeight="light"
                    fontSize="md"
                    className="leading-none"
                  >
                    I have read and understood the terms of the Privacy Notice
                    and consent to the processing of my Personal Data as
                    described in the notice.
                  </Text>
                </Checkbox>
              </FormControl>

              <FormControl className="flex items-center">
                <Checkbox
                  size="lg"
                  spacing="1rem"
                  colorScheme="orange"
                  sx={{ alignItems: "flex-start" }}
                >
                  <Text
                    fontWeight="light"
                    fontSize="md"
                    className="leading-none"
                  >
                    I would like to receive newsletter and updates from Seremban
                    2 and IJM Land Berhad.
                  </Text>
                </Checkbox>
              </FormControl>
            </div>

            <FormControl className="flex items-center justify-center mt-6">
              <Button
                isLoading={false}
                type="submit"
                sx={{
                  borderRadius: 0,
                  backgroundColor: "#8B5920",
                  paddingY: "2rem",
                  paddingX: "3rem",
                  width: isDesktop ? "initial" : "100%",
                }}
                color="white"
                fontWeight="normal"
              >
                SUBMIT
              </Button>
            </FormControl>
          </div>

          <div className="flex flex-col-reverse lg:flex-row gap-10 lg:border-t lg:border-yellow-800 lg:pt-10 px-10">
            <div className="flex flex-col lg:flex-row items-center space-y-10 lg:space-y-0 lg:space-x-10">
              <div className="w-52">
                <img src="/assets/images/page-5/IJMLANDlogo@2x.png" />
              </div>
              <div className="flex flex-col lg:space-y-5">
                <div className="">
                  <Text
                    textAlign={isDesktop ? "left" : "center"}
                    fontWeight="semibold"
                    fontSize="sm"
                  >
                    Seremban Two Holdings Sdn Bhd
                  </Text>
                  <Text textAlign={isDesktop ? "left" : "center"} fontSize="sm">
                    (199501028262/357468-H)
                  </Text>
                </div>
                <Text textAlign={isDesktop ? "left" : "center"} fontSize="sm">
                  PT 10786, Seremban 2, 70300 Seremban, Negeri Sembilan.
                </Text>
              </div>
              <div className="flex flex-col">
                <Text
                  textAlign={isDesktop ? "left" : "center"}
                  fontWeight="semibold"
                  fontSize="sm"
                >
                  Contacts
                </Text>
                <div className="">
                  <Text textAlign={isDesktop ? "left" : "center"} fontSize="sm">
                    Email: sales.s2@ijm.com
                  </Text>
                  <Text textAlign={isDesktop ? "left" : "center"} fontSize="sm">
                    Phone: 1800 222 456
                  </Text>
                </div>
              </div>
            </div>
            <div className="flex space-x-5 justify-center">
              <Link
                passHref
                href="https://www.facebook.com/ijmlandseremban2"
                target="_blank"
              >
                <IconButton
                  variant="link"
                  aria-label="facebook"
                  icon={<img src="/assets/images/page-5/iconfacebook.svg" />}
                ></IconButton>
              </Link>
              <Link
                passHref
                href="https://wa.me/60139287388?text=I%20am%20interested%20to%20know%20about%20Seremban%202%20Heights%20Saujana%20Intan"
                target="_blank"
              >
                <IconButton
                  variant="link"
                  aria-label="facebook"
                  icon={<img src="/assets/images/page-5/iconwhatsapp.svg" />}
                ></IconButton>
              </Link>
              <Link
                passHref
                href="https://www.youtube.com/user/IJMLandBerhad"
                target="_blank"
              >
                <IconButton
                  variant="link"
                  aria-label="facebook"
                  icon={<img src="/assets/images/page-5/iconyoutube.svg" />}
                ></IconButton>
              </Link>
            </div>
          </div>
          <div className="mt-10">
            <Text textAlign={isDesktop ? "left" : "center"} fontSize="sm">
              © Copyright 2022 IJM Land Berhad 198901010104 (187405-T) - All
              Rights Reserved
            </Text>
            <Text
              textAlign={isDesktop ? "left" : "center"}
              fontSize="sm"
              className="text-yellow-800"
            >
              Personal Data Notice | Personal Data Policy | Terms &amp;
              Conditions
            </Text>
          </div>
        </div>
      </div>
      <div style={{ backgroundColor: "#3B3539" }}>
        <div className="container py-10 px-10 lg:px-20 mx-auto text-white space-y-5">
          <Text fontSize="xs">
            Developer: Seremban Two Holdings SdnBhd (199501028262/357468-H) PT
            10786, Seremban 2, 70300 Seremban, Negeri Sembilan. • Developer’s
            License: 9567-26/03-2024/0203(L) • Validity Period:
            9/3/2022-8/3/2024 • Advertising Permit: 9567-26/03-2024/0203 (P) •
            Validity Period: 9/3/2022-8/3/2024 • Land Tenure: Freehold •
            Encumbrances: NIL • Restriction-in-interest: The land shall not be
            transferred, leased or charged without prior approval by the State
            Authority • Completion Date: June 2024 • Approving Authority: Majlis
            Bandaraya Seremban • No. of Units: 2-storey Bungalow – 2 units &amp;
            2-storey Semi-Detached – 40 units • Discount Bumiputra: 10% •
            Building Plan Approval No.: MBS.S.KB1-08/2020 • Selling Price:
            2-storey Bungalow RM3,946,000 (Min) RM3,968,500 (Max) 2-storey
            Semi-Detached RM2,211,000 (Min) RM3,043,500 (Max); THIS
            ADVERTISEMENT HAS BEEN APPROVED BY THE NATIONAL HOUSING DEPARTMENT.
          </Text>
          <Text fontSize="xs">
            All renderings contained in this advertisement are artist’s
            impressions only. The information contained herein is subject to
            change without notification as may be required by the relevant
            authorities or developer’s project consultant. Whilst every care is
            taken in providing this information, the owner, developers and
            managers cannot be held responsible for any variations. For
            avoidance of doubt on the specifications, please always refer to the
            Sale and Purchase Agreement.
          </Text>
        </div>
      </div>
    </>
  );
};

export default Home;
