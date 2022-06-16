import { Container, Text } from "@chakra-ui/react";
import Link from "next/link";
import { useRouter } from "next/router";
import { Logo } from "./Logo";

const menu = [
  {
    label: "INTRODUCTION",
    url: "/",
  },
  {
    label: "PROJECT",
    url: "/project",
  },
  {
    label: "SITE PLAN",
    url: "/site-plan",
  },
  {
    label: "LOCATION",
    url: "/location",
  },
  {
    label: "GALLERY",
    url: "/gallery",
  },
  {
    label: "E-BROCHURE",
    url: "/e-brochure",
    target: "_blank",
  },
  {
    label: "REGISTRATION",
    url: "/registration",
  },
];

const Navbar = (): JSX.Element => {
  const router = useRouter();
  const currentUrl = router.asPath;
  return (
    <div className="top-0 z-50 fixed">
      <img
        src="/assets/images/top-left.svg"
        width={400}
        className="absolute top-0 left-0"
      />
      <div className="bg-white h-12"></div>
      <div className="relative bg-yellow-800 w-screen text-white flex items-center justify-between">
        <div className="container mx-auto px-10">
          <div className="flex justify-between items-center py-5 relative">
            <Logo></Logo>
            <div className="flex space-x-5 mr-44">
              {menu.map((m, k) => {
                const isActive = m.url === currentUrl;
                return (
                  <Link href={m.url} key={m.url} passHref>
                    <Text
                      fontWeight="semibold"
                      color={isActive ? "#FFFFFF" : "#C5AB90"}
                      fontSize="md"
                      as="a"
                      target={m.target}
                    >
                      {m.label}
                    </Text>
                  </Link>
                );
              })}
            </div>
            <div className="absolute right-0 z-10 flex space-x-5">
              <Link passHref href="/">
                <img
                  src="/assets/images/icon-facebook.svg"
                  width={20}
                  height={20}
                />
              </Link>
              <Link passHref href="/">
                <img
                  src="/assets/images/icon-whatsapp.svg"
                  width={20}
                  height={20}
                />
              </Link>
              <Link passHref href="/">
                <img
                  src="/assets/images/icon-youtube.svg"
                  width={20}
                  height={20}
                />
              </Link>
            </div>
          </div>
          <div className="absolute top-0 right-0 w-64 flex items-end justify-end">
            <img src="/assets/images/top-right.svg" width={250} />
          </div>
        </div>
      </div>
    </div>
  );
};

export { Navbar };
