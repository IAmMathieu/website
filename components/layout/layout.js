import Navbar from "../navbar/navbar";
import Footer from "../footer/footer";
import { useEffect, useState } from "react";

export default function Layout({ children }) {
  return (
    <>
      <Navbar />
      <main>{children}</main>
      <Footer />
    </>
  );
}
