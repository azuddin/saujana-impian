import { IconButton, Text, useMediaQuery } from "@chakra-ui/react";
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
    url: "#project",
  },
  {
    label: "SITE PLAN",
    url: "#site-plan",
  },
  {
    label: "LOCATION",
    url: "#location",
  },
  {
    label: "GALLERY",
    url: "#gallery",
  },
  {
    label: "E-BROCHURE",
    url: "/Saujana_Intan_E-Brochure_230x320_FA3OL_1.6.22.pdf",
    target: "_blank",
  },
  {
    label: "REGISTRATION",
    url: "#registration",
  },
];

const getCurrentId = (): any => {
  let prev_s_height = 0;
  return menu
    .filter((m) => m.target === undefined)
    .map((m, i) => {
      let s = 0,
        min_s = 0,
        max_s = 0;

      if (m.url !== "/") {
        s =
          document.getElementById(`${m.url.replace("#", "")}`)?.scrollHeight ||
          0;
        if (s > 0) s -= 1;
      } else {
        s = document.getElementById(`home`)?.scrollHeight || 0;
      }

      if (s > 0) {
        min_s = i === 0 ? 0 : prev_s_height;
        max_s = s + prev_s_height - 1;
      }

      prev_s_height += s;

      return {
        minScrollPos: Math.ceil(min_s),
        maxScrollPos: Math.ceil(max_s),
        scrollHeight: s,
        ...m,
      };
    });
};

const Navbar = (): JSX.Element => {
  const router = useRouter();
  const [currentUrl, setCurrentUrl] = useState(router.asPath);
  const [openMenu, setOpenMenu] = useState(false);

  const [isDesktop] = useMediaQuery("(min-width: 1024px)");

  const toggleOpenMenu = () => {
    setOpenMenu(!openMenu);
  };

  useEffect(() => {
    let timeout: any;
    let idiedDiv: any;

    const handleRouteChange = () => {
      setOpenMenu(false);
    };

    const handleScroll = (idiedDiv: any) => {
      const currScroll = Math.ceil(document.documentElement.scrollTop);
      const currID = idiedDiv.filter(
        (i: any) => currScroll <= i.maxScrollPos && currScroll >= i.minScrollPos
      );
      setCurrentUrl(currID[0]?.url || "/");
    };

    if (window) {
      timeout = setTimeout(() => {
        idiedDiv = getCurrentId();
        window.addEventListener("scroll", () => handleScroll(idiedDiv));
      }, 3000);
    }

    router.events.on("routeChangeStart", handleRouteChange);

    return () => {
      router.events.off("routeChangeStart", handleRouteChange);
      window.removeEventListener("scroll", () => handleScroll(idiedDiv));
      clearTimeout(timeout);
    };
  }, []);

  const navMobileClassname = `${
    openMenu && !isDesktop ? "" : "hidden"
  } bg-opacity-90 bg-stone-700 fixed w-screen`;

  const topLeftClassnames = `${
    isDesktop ? "" : "scale-50 -translate-x-20"
  } absolute top-0 left-0 lg:-left-8`;

  return (
    <div className="top-0 z-50 fixed">
      <img
        src="/assets/images/top-left.svg"
        width={isDesktop ? 380 : 280}
        className={topLeftClassnames}
      />
      <div
        className="h-12 hidden lg:block"
        style={{ backgroundImage: `url(/assets/images/bg-web-desktop.png)` }}
      ></div>
      <div
        style={{ backgroundColor: "#8b5920" }}
        className="relative w-screen text-white flex items-center justify-between"
      >
        <div className="w-full px-5">
          <div className="flex flex-col lg:flex-row items-center justify-between py-5 relative">
            <div className="w-full lg:w-auto flex flex-grow justify-between items-center">
              <Logo></Logo>
              <div className="block lg:hidden">
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

            <div className="w-full lg:w-auto hidden lg:flex flex-col lg:flex-row justify-between lg:items-center pt-5 lg:pt-0">
              <div className="w-full lg:w-auto flex flex-col lg:flex-row space-y-2 lg:space-y-0 lg:space-x-5 mr-36">
                {menu.map((m, k) => {
                  const isActive = m.url === currentUrl;
                  return (
                    <Link href={m.url} key={m.url} passHref scroll>
                      <Text
                        fontWeight="semibold"
                        color={isActive ? "#FFFFFF" : "#C5AB90"}
                        fontSize="xs"
                        as="a"
                        target={m.target}
                      >
                        {m.label}
                      </Text>
                    </Link>
                  );
                })}
              </div>
              <div className="lg:absolute right-0 z-10 flex mt-4 lg:mt-0">
                <Link
                  passHref
                  href="https://www.facebook.com/ijmlandseremban2"
                  target="_blank"
                >
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
                <Link
                  passHref
                  href="https://wa.me/60139287388?text=I%20am%20interested%20to%20know%20about%20Seremban%202%20Heights%20Saujana%20Intan"
                  target="_blank"
                >
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
                <Link
                  passHref
                  href="https://www.youtube.com/user/IJMLandBerhad"
                  target="_blank"
                >
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
          <div className="absolute top-0 right-0 w-48 hidden lg:flex items-end justify-end">
            <img src="/assets/images/top-right.svg" width={250} />
          </div>
        </div>
      </div>
      <div className={navMobileClassname}>
        <div className="py-10 space-y-5 flex flex-col items-center mx-auto">
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
