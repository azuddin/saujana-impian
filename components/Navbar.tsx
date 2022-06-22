import { Container, IconButton, Text, useMediaQuery } from "@chakra-ui/react";
import Link from "next/link";
import { useRouter } from "next/router";
import { useEffect, useState } from "react";
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
  const [openMenu, setOpenMenu] = useState(false);

  const [isDesktop] = useMediaQuery("(min-width: 1280px)");

  const toggleOpenMenu = () => {
    setOpenMenu(!openMenu);
  };

  useEffect(() => {
    const handleRouteChange = () => {
      setOpenMenu(false);
    };

    router.events.on("routeChangeStart", handleRouteChange);

    return () => {
      router.events.off("routeChangeStart", handleRouteChange);
    };
  }, []);

  const navMobileClassname = `${
    openMenu && !isDesktop ? "" : "hidden"
  } bg-opacity-90 bg-stone-700 fixed w-screen`;

  return (
    <div className="top-0 z-50 fixed">
      <img
        src="/assets/images/top-left.svg"
        width={isDesktop ? 400 : 200}
        className="absolute top-0 left-0"
      />
      <div className="bg-white h-12 hidden xl:block"></div>
      <div className="relative bg-yellow-800 w-screen text-white flex items-center justify-between">
        <div className="container mx-auto px-10">
          <div className="flex flex-col xl:flex-row items-center py-5 relative">
            <div className="w-full xl:w-auto flex flex-grow justify-between items-center">
              <Logo></Logo>
              <div className="block xl:hidden">
                <IconButton
                  onClick={toggleOpenMenu}
                  variant="link"
                  aria-label="menu"
                  icon={
                    <img
                      src={
                        openMenu
                          ? "/assets/images/close@2x.png"
                          : "/assets/images/menu.svg"
                      }
                      width={20}
                      height={20}
                    />
                  }
                ></IconButton>
              </div>
            </div>

            <div className="w-full xl:w-auto hidden xl:flex flex-col xl:flex-row justify-between xl:items-center pt-5 xl:pt-0">
              <div className="w-full xl:w-auto flex flex-col xl:flex-row space-y-2 xl:space-y-0 xl:space-x-5 mr-44">
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
              <div className="xl:absolute right-0 z-10 flex mt-4 xl:mt-0">
                <Link passHref href="/">
                  <IconButton
                    variant="link"
                    aria-label="facebook"
                    sx={{ justifyContent: isDesktop ? "center" : "flex-start" }}
                    icon={
                      <img
                        src="/assets/images/icon-facebook.svg"
                        width={20}
                        height={20}
                      />
                    }
                  ></IconButton>
                </Link>
                <Link passHref href="/">
                  <IconButton
                    variant="link"
                    aria-label="whatsapp"
                    sx={{ justifyContent: isDesktop ? "center" : "flex-start" }}
                    icon={
                      <img
                        src="/assets/images/icon-whatsapp.svg"
                        width={20}
                        height={20}
                      />
                    }
                  ></IconButton>
                </Link>
                <Link passHref href="/">
                  <IconButton
                    variant="link"
                    aria-label="youtube"
                    sx={{ justifyContent: isDesktop ? "center" : "flex-start" }}
                    icon={
                      <img
                        src="/assets/images/icon-youtube.svg"
                        width={20}
                        height={20}
                      />
                    }
                  ></IconButton>
                </Link>
              </div>
            </div>
          </div>
          <div className="absolute top-0 right-0 w-64 hidden xl:flex items-end justify-end">
            <img src="/assets/images/top-right.svg" width={250} />
          </div>
        </div>
      </div>
      <div className={navMobileClassname}>
        <div className="py-10 space-y-5 flex flex-col container items-center mx-auto">
          {menu.map((m, k) => {
            const isActive = m.url === currentUrl;
            return (
              <Link href={m.url} key={m.url} passHref>
                <Text
                  fontWeight="semibold"
                  color={isActive ? "#8B5920" : "#FFFFFF"}
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
      </div>
    </div>
  );
};

export { Navbar };
