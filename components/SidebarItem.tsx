"use client";

import { IconType } from "react-icons";

interface SidebarItemProps {
  label: string;
  href?: string;
  icon: IconType;
  onClick?: () => void;
}

const SidebarItem: React.FC<SidebarItemProps> = ({
  label,
  href,
  icon: Icon,
  onClick,
}) => {
  return (
    <>
      <div className="flex flex-row items-center">
        <div className="relative flex justify-center items-center w-14 h-14 p-4 rounded-full cursor-pointer lg:hidden hover:bg-opacity-10 hover:bg-slate-300">
          <Icon size={28} color="white" />
        </div>
        <div className="relative items-center gap-4 p-4 rounded-full cursor-pointer hidden hover:bg-opacity-10 hover:bg-slate-300 lg:flex">
          <Icon size={24} color="white" />
          <p className="hidden text-md text-white lg:block">{label}</p>
        </div>
      </div>
    </>
  );
};

export default SidebarItem;
