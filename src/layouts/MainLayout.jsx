import React from "react";
import { Outlet } from "react-router-dom";
import { Header } from "../components";
import Footer from "../components/Footer/Footer";

function MainLayout() {
  return (
    <>
      <Header />
      <main className="grow py-10">
        <Outlet />
      </main>
      <Footer/>
    </>
  );
}

export default MainLayout;
