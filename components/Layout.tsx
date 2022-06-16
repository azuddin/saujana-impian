import { ReactNode } from "react";
import { Navbar } from "./Navbar";

export interface LayoutProps {
  children?: ReactNode;
}

const Layout = (props: LayoutProps): JSX.Element => {
  const { children } = props;
  return (
    <>
      <Navbar></Navbar>
      <div className="container mx-auto px-20 pt-44">{children}</div>
    </>
  );
};

export { Layout };