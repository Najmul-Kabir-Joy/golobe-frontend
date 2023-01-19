import { GlobalStyle } from "@/styles/global";
import React from "react";

const Layout = ({ children }: { children: any }) => {
  return (
    <>
      <GlobalStyle />
      {children}
    </>
  );
};

export default Layout;
