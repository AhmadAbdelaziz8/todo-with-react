import { useState } from "react";
import Sidebar from "./components/sideBar.jsx";
import Header from "./components/header.jsx";
import Content from "./components/content.jsx";
import "./App.css";

function App() {
  return (
    <>
      <Header />
      <Sidebar />
      <Content />
    </>
  );
}

export default App;
