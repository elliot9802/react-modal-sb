import React, { useState } from "react";
import Backdrop from "./Backdrop";
import Sidebar from "./Sidebar";
import ToolBar from "./ToolBar";
import MyModal from "./Modal";

const App = () => {
  const [sidebar, setSidebar] = useState(false);

  const toggleSidebar = () => {
    setSidebar((prevState) => !prevState);
  };
  return (
    <div className="App">
      <ToolBar openSidebar={toggleSidebar} />
      <Backdrop sidebar={sidebar} closeSidebar={toggleSidebar} />
      <Sidebar sidebar={sidebar} />
      <MyModal />
    </div>
  );
};

export default App;
