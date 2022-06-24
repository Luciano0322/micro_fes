import React, { Suspense, useState } from "react";
import ReactDOM from "react-dom";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import "./index.scss";

import SafeComponent from "./SafeComponent";
import Header from "home/Header";
// const Header = React.lazy(() => import("home/Header"));
import Footer from "home/Footer";
import PDPContent from "./PDPContent";

const App = () => {
  // const [showHeader, setShowHeader] = useState(false);
  return (
    <Router>
      <div className="text-3xl mx-auto max-w-6xl">
        {/* {showHeader && (
            <Suspense fallback={<div>Loading...</div>}>
              <Header/>
            </Suspense>
          )
        }
        <button 
          className="rounded-xl bg-blue-500 p-5 m-3 hover:bg-blue-300"
          onClick={() => setShowHeader(true)}
        >
          Show Header
        </button> */}
        <SafeComponent>
          <Header />
        </SafeComponent>
        <div className="my-10">
          <Routes>
            <Route path="/product/:id" element={<PDPContent/>} />
          </Routes>
        </div>
        <Footer/>
      </div>
    </Router>
  );
};
ReactDOM.render(<App />, document.getElementById("app"));
