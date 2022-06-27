import React, { Suspense, useState } from "react";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import "./index.scss";
import "remixicon/fonts/remixicon.css";

import Header from "home/Header";

import Footer from "home/Footer";
import PDPContent from "pdp/PDPContent";
import HomeContent from "home/HomeContent";
import CartContent from "cart/CartContent";

const MainLayout = () => {
  return (
    <Router>
      <div className="text-3xl mx-auto max-w-6xl">
        <Header />
        <div className="my-10">
          <Routes>
            <Route path="/">
              <Route index element={<HomeContent/>} />
              <Route path="product/:id" element={<PDPContent/>} />
              <Route path="cart" element={<CartContent/>} />
            </Route>
          </Routes>
        </div>
        <Footer/>
      </div>
    </Router>
  );
};

export default MainLayout;