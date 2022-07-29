import { useMediaQuery } from "@chakra-ui/react";
import type { NextPage } from "next";
import Head from "next/head";
import { Navbar } from "../components/Navbar";

const LocationPage: NextPage = () => {
  const [isDesktop] = useMediaQuery("(min-width: 1024px)");
  const [isTablet] = useMediaQuery("(min-width: 768px)");

  return (
    <>
      <Head>
        <title>Location - Saujana Intan @ Seremban 2 Height</title>
        <meta
          name="description"
          content="Location - Saujana Intan @ Seremban 2 Height"
        />
        <link rel="icon" href="/favicon.ico" />
      </Head>
      <Navbar></Navbar>
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
              <img className="mx-auto" src="/assets/images/page-4/Map@2x.png" />
            </div>
          </div>
        </div>
      </div>
    </>
  );
};

export default LocationPage;
