import React from "react";
import Sidebar from "./layouts/Sidebar";
import SidebarFollow from "./layouts/SidebarFollow";

const Layout: React.FC<{ children: React.ReactNode }> = ({ children }) => {
  return (
    <div className="h-screen bg-black">
      <div className="container h-full mx-auto xl:px-30 max-w-8xl">
        <div className="grid grid-cols-4 h-full">
          <Sidebar />
          <div
            className="
              col-span-3 
              lg:col-span-2 
              border-x-2
              border-sky-600
              rounded-xl
          "
          >
            {children}
          </div>
          <SidebarFollow />
        </div>
      </div>
    </div>
  );
};

export default Layout;
