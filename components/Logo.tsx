import { Text } from "@chakra-ui/react";
import { ReactNode } from "react";

const Logo = (): JSX.Element => {
  return (
    <div className="flex flex-col items-center w-36">
      <img src="/assets/images/logo-1.svg" width={140} />
      <Text fontSize="xs" className="truncate">
        @ SEREMBAN 2 HEIGHTS
      </Text>
    </div>
  );
};

export { Logo };
