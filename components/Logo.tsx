import { Text, useMediaQuery } from "@chakra-ui/react";
import { ReactNode } from "react";

const Logo = (): JSX.Element => {
  const [isDesktop] = useMediaQuery("(min-width: 1024px)");
  return (
    <div
      className={`flex flex-col ${isDesktop ? "items-center" : "items-start"}`}
    >
      <div className="flex flex-col items-center overflow-hidden">
        <div className="w-24">
          <img src="/assets/images/logo-1.svg" width={140} />
        </div>
        <Text fontSize="xx-small" className="truncate ">
          @ SEREMBAN 2 HEIGHTS
        </Text>
      </div>

      <Text
        fontSize={isDesktop ? "lg" : "xx-small"}
        fontWeight="bold"
        className="truncate absolute -bottom-7 lg:-bottom-10"
        sx={{ color: "#C6762A" }}
      >
        FREEHOLD
      </Text>
    </div>
  );
};

export { Logo };
