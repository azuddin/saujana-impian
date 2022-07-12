import { Box, Text, useMediaQuery } from "@chakra-ui/react";
import type { NextPage } from "next";
import Head from "next/head";
import { Navbar } from "../components/Navbar";

const SitePlanPage: NextPage = () => {
  const [isDesktop] = useMediaQuery("(min-width: 1024px)");

  return (
    <>
      <Head>
        <title>Site Plan - Saujana Impian @ Seremban 2 Height</title>
        <meta
          name="description"
          content="Site Plan - Saujana Impian @ Seremban 2 Height"
        />
        <link rel="icon" href="/favicon.ico" />
      </Head>
      <Navbar></Navbar>
      <div className="container mx-auto lg:px-2 mb-10">
        <div className="flex flex-col-reverse lg:flex-row pt-44 lg:mt-0">
          <div className="w-full lg:w-4/5 mt-10 lg:m-0">
            <img
              className="mx-auto"
              src={
                isDesktop
                  ? "/assets/images/plan-ada-pokok-desktop.png"
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
    </>
  );
};

export default SitePlanPage;
