import { useState } from 'react';
import Sidebar from './components/sideBar.jsx';
import Header from './components/header.jsx';
import Content from './components/content.jsx';
import './App.css';

function App() {
  const [projectState, setProjectState] = useState({
    projects: [],
    selectedProject: null,
  });

  return (
    <div className="bg-base-100 text-base-content h-screen grid grid-cols-1 md:grid-cols-4">
      <div className="col-span-1 md:col-span-4">
        <Header />
      </div>
      <div className="col-span-1 hidden md:block">
        <Sidebar projectState={projectState} setProjectState={setProjectState} />
      </div>
      <div className="col-span-1 md:col-span-3">
        <Content projectState={projectState} setProjectState={setProjectState} />
      </div>
    </div>
  );
}

export default App;
