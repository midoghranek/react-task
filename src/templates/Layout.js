import React from "react";
import Boxed from "./Boxed";
import { Footer, Header } from "../containers";

const Layout = ({ children }) => {
  return (
    <Boxed>
      {/* Header Container */}
      <Header />

      {/* Content */}
      {children}

      {/* Footer Container */}
      <Footer />
    </Boxed>
  );
};

export default Layout;
