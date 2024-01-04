import Sidebar from "./Layout/Sidebar";
import SidebarFollowers from "./Layout/SidebarFollowers";

interface LayoutProps {
  children: React.ReactNode;
}

const Layout: React.FC<LayoutProps> = ({ children }) => {
  return (
    <div className="h-screen bg-black">
      <div className="container h-full mx-auto xl:px-30 max-w-8xl">
        <div className="grid grid-cols-4 h-full">
          <Sidebar />
          <div className="col-span-3 lg:col-span-2 border-x-[1px] border-sky-600 rounded-xl">
            {children}
          </div>
          <SidebarFollowers />
        </div>
      </div>
    </div>
  );
};

export default Layout;
