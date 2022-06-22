import { Text, useMediaQuery } from "@chakra-ui/react";
import { ReactNode } from "react";

const Logo = (): JSX.Element => {
  const [isDesktop] = useMediaQuery("(min-width: 1280px)");
  return (
    <div className="flex flex-col items-center w-20 xl:w-36">
      <img src="/assets/images/logo-1.svg" width={140} />
      <Text fontSize="xs" className="truncate">
        @ SEREMBAN 2 HEIGHTS
      </Text>
      <Text
        fontSize={isDesktop ? "lg" : "xs"}
        fontWeight="bold"
        className="truncate absolute -bottom-7 xl:-bottom-10 text-yellow-800"
      >
        FREEHOLD
      </Text>
    </div>
  );
};

export { Logo };
