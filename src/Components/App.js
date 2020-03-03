import React from "react";
import Header from "./Header";
import Menu from "./Menu";
import Content from "./Content";
import ImageProfile from "./ImageProfile";
/* import Projects from "./Projects";
import Footer from "./Footer"; */

export default function App() {
  return (
    <div className="main-app">
      <Header />
      <Menu />
      <Content />
      <ImageProfile />
      {/* <Projects />
      <Footer /> */}
      
    </div>
  );
}