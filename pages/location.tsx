import type { NextPage } from "next";
import Head from "next/head";
import { Layout } from "../components/Layout";

const LocationPage: NextPage = () => {
  return (
    <>
      <Head>
        <title>Location - Saujana Impian @ Seremban 2 Height</title>
        <meta
          name="description"
          content="Location - Saujana Impian @ Seremban 2 Height"
        />
        <link rel="icon" href="/favicon.ico" />
      </Head>
      <Layout>
        <div className="flex flex-col">
          <div className="h-20 my-14 ml-20">
            <img
              src="/assets/images/page-4/LocationMap@2x.png"
              className="h-full"
            />
          </div>
          <div className="grid grid-cols-1 xl:grid-cols-2 gap-10">
            <div className="flex justify-center">
              <img src="/assets/images/page-4/fasilities.png" />
            </div>
            <div className="flex justify-center">
              <img src="/assets/images/page-4/Map@2x.png" />
            </div>
          </div>
        </div>
      </Layout>
    </>
  );
};

export default LocationPage;
