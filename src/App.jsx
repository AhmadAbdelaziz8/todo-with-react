import { useState } from "react";
import Sidebar from "./components/sideBar.jsx";
import Header from "./components/header.jsx";
import Content from "./components/content.jsx";
import "./App.css";

function App() {
  const [projectState, setProjectState] = useState({
    selectedProject: null,
    projects: [],
  });

  return (
    <>
      <Header />
      <Sidebar projectState={projectState} setProjectState={setProjectState} />
      <Content projectState={projectState} setProjectState={setProjectState} />
    </>
  );
}

export default App;
