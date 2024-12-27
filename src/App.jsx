import { useState } from "react";
import Sidebar from "./components/sideBar.jsx";
import Header from "./components/header.jsx";
import Content from "./components/content.jsx";
import "./App.css";

function App() {
  const [selectedProject, setSelectedProject] = useState(null);

  return (
    <>
      <Header />
      <Sidebar setSelectedProject={setSelectedProject} />
      <Content project={selectedProject} />
    </>
  );
}

export default App;
