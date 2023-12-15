"use client";
import SidebarLogo from "./SidebarLogo";
import { SidebarItemList } from "@/constants/SidebarItemList";
import SidebarItem from "./SidebarItem";
import { BiLogOut } from "react-icons/bi";
import SidebarTweetButton from "./SidebarTweetButton";

const Sidebar = () => {
  return (
    <>
      <div className="col-span-1 h-full pr-4 md:pr-6">
        <div className="flex flex-col items-end">
          <div className="space-y-2 lg:w-[230px]">
            <SidebarLogo />
            {SidebarItemList.map((i) => (
              <SidebarItem
                key={i.href}
                href={i.href}
                label={i.label}
                icon={i.icon}
              />
            ))}
            <SidebarItem onClick={() => {}} icon={BiLogOut} label="Logout" />
            <SidebarTweetButton />
          </div>
        </div>
      </div>
    </>
  );
};

export default Sidebar;
