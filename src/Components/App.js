import React from "react";
import Header from "./Header";
import Content from "./Content";
import Menu from "./Menu";
import ImageProfile from "./ImageProfile";
import Projects from "./Projects";
import Footer from "./Footer";

export default function App() {
  return (
    <div className="grid-main-app">
      <Header />
      <Menu />
      <Content />
      <ImageProfile />
      <Projects />
      <Footer />
      
    </div>
  );
}