import { Box, Text } from "@chakra-ui/react";
import type { NextPage } from "next";
import Head from "next/head";
import { Layout } from "../components/Layout";

const SitePlanPage: NextPage = () => {
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
      <Layout>
        <div className="flex flex-col-reverse xl:flex-row pt-44 xl:mt-0">
          <div className="w-full xl:w-2/3 mt-10 xl:m-0">
            <img src="/assets/images/page-3/SitePlanImg.png" />
          </div>
          <div className="flex flex-grow flex-col items-center xl:pt-20 space-y-14">
            <div className="h-20">
              <img
                src="/assets/images/page-3/SitePlan@2x.png"
                className="h-full"
              />
            </div>
            <div className="flex items-center space-x-2">
              <Text fontSize="xl" className="leading-none">
                TOTAL
                <br />
                UNITS:
              </Text>
              <Text fontSize="5xl" className="leading-none">
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
      </Layout>
    </>
  );
};

export default SitePlanPage;
