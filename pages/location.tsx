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
        <div className="flex flex-col px-10 xl:px-0">
          <div className="h-20 mt-0 xl:mt-10 mb-10 ">
            <img
              src="/assets/images/page-4/LocationMap@2x.png"
              className="h-full mx-auto xl:ml-10"
            />
          </div>
          <div className="flex flex-col-reverse xl:flex-row gap-10">
            <div className="flex-1 ">
              <img
                className="mx-auto"
                src="/assets/images/page-4/fasilities.png"
              />
            </div>
            <div className="flex-1 ">
              <img className="mx-auto" src="/assets/images/page-4/Map@2x.png" />
            </div>
          </div>
        </div>
      </Layout>
    </>
  );
};

export default LocationPage;
