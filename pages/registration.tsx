import {
  Button,
  Checkbox,
  FormControl,
  FormLabel,
  IconButton,
  Input,
  Text,
  useMediaQuery,
} from "@chakra-ui/react";
import type { NextPage } from "next";
import Head from "next/head";
import Link from "next/link";
import { Layout } from "../components/Layout";

const RegistrationPage: NextPage = () => {
  const [isDesktop] = useMediaQuery("(min-width: 1280px)");

  return (
    <>
      <Head>
        <title>Registration - Saujana Impian @ Seremban 2 Height</title>
        <meta
          name="description"
          content="Registration - Saujana Impian @ Seremban 2 Height"
        />
        <link rel="icon" href="/favicon.ico" />
      </Head>
      <Layout>
        <div className="px-10 xl:px-0">
          <div className="flex flex-col xl:items-end mb-16">
            <div className="h-20 mt-0 xl:mt-10 mb-10 ">
              <img
                src="/assets/images/page-5/Registration@2x.png"
                className="h-full mx-auto xl:ml-10"
              />
            </div>
            {/* <div className="h-20 my-14 mr-20">
            <img
              src="/assets/images/page-5/Registration@2x.png"
              className="h-full"
            />
          </div> */}
            <div className="space-y-5 w-full mb-16">
              <FormControl isRequired className="flex items-end justify-center">
                <FormLabel
                  htmlFor="fullname"
                  sx={{ padding: 0, margin: 0 }}
                  className="w-60"
                  fontWeight="light"
                  fontSize="2xl"
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

              <FormControl isRequired className="flex items-end justify-center">
                <FormLabel
                  htmlFor="ic"
                  sx={{ padding: 0, margin: 0 }}
                  className="w-60"
                  fontWeight="light"
                  fontSize="2xl"
                >
                  IC / Passport
                </FormLabel>
                <Input
                  fontSize="2xl"
                  id="ic"
                  type="text"
                  variant="flushed"
                  borderColor="#794515"
                  focusBorderColor="#794515"
                />
              </FormControl>

              <FormControl isRequired className="flex items-end justify-center">
                <FormLabel
                  htmlFor="email"
                  sx={{ padding: 0, margin: 0 }}
                  className="w-60"
                  fontWeight="light"
                  fontSize="2xl"
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

              <FormControl isRequired className="flex items-end justify-center">
                <FormLabel
                  htmlFor="mobile_number"
                  sx={{ padding: 0, margin: 0 }}
                  className="w-60"
                  fontWeight="light"
                  fontSize="2xl"
                >
                  Mobile Number
                </FormLabel>
                <Input
                  fontSize="2xl"
                  id="mobile_number"
                  type="text"
                  variant="flushed"
                  borderColor="#794515"
                  focusBorderColor="#794515"
                />
              </FormControl>
            </div>

            <div className="space-y-3 w-full mb-5">
              <FormControl className="flex items-center">
                <Checkbox size="lg" spacing="1rem" colorScheme="orange">
                  <Text fontWeight="light" fontSize="xl">
                    I have read and understood the terms of the Privacy Notice
                    and consent to the processing of my Personal Data as
                    described in the notice.
                  </Text>
                </Checkbox>
              </FormControl>

              <FormControl className="flex items-center">
                <Checkbox size="lg" spacing="1rem" colorScheme="orange">
                  <Text fontWeight="light" fontSize="xl">
                    I would like to receive newsletter and updates from Seremban
                    2 and IJM Land Berhad.
                  </Text>
                </Checkbox>
              </FormControl>
            </div>

            <FormControl className="flex items-center justify-center">
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

          <div className="flex flex-col-reverse xl:flex-row gap-10 xl:border-t xl:border-yellow-800 xl:pt-10 px-10">
            <div className="flex flex-col xl:flex-row items-center space-y-10 xl:space-y-0 xl:space-x-10">
              <div className="w-52">
                <img src="/assets/images/page-5/IJMLANDlogo@2x.png" />
              </div>
              <div className="flex flex-col xl:space-y-5">
                <div className="">
                  <Text
                    textAlign={isDesktop ? "left" : "center"}
                    fontWeight="semibold"
                  >
                    Seremban Two Holdings Sdn Bhd
                  </Text>
                  <Text textAlign={isDesktop ? "left" : "center"}>
                    (199501028262/357468-H)
                  </Text>
                </div>
                <Text textAlign={isDesktop ? "left" : "center"}>
                  PT 10786, Seremban 2, 70300 Seremban, Negeri Sembilan.
                </Text>
              </div>
              <div className="flex flex-col xl:space-y-5">
                <Text
                  textAlign={isDesktop ? "left" : "center"}
                  fontWeight="semibold"
                >
                  Contacts
                </Text>
                <div className="">
                  <Text textAlign={isDesktop ? "left" : "center"}>
                    Email: sales.s2@ijm.com
                  </Text>
                  <Text textAlign={isDesktop ? "left" : "center"}>
                    Phone: 1800 222 456
                  </Text>
                </div>
              </div>
            </div>
            <div className="flex space-x-5 justify-center">
              <Link passHref href="/">
                <IconButton
                  variant="link"
                  aria-label="facebook"
                  icon={<img src="/assets/images/page-5/iconfacebook.svg" />}
                ></IconButton>
              </Link>
              <Link passHref href="/">
                <IconButton
                  variant="link"
                  aria-label="facebook"
                  icon={<img src="/assets/images/page-5/iconwhatsapp.svg" />}
                ></IconButton>
              </Link>
              <Link passHref href="/">
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
      </Layout>
      <div style={{ backgroundColor: "#3B3539" }}>
        <div className="container py-10 px-10 mx-auto text-white space-y-5">
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

export default RegistrationPage;