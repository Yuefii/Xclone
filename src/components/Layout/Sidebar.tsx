import useCurrentUser from "@/hooks/useCurrentUser";
import { signOut } from "next-auth/react";
import { IoMdHome,IoIosNotifications, IoIosPerson } from "react-icons/io";
import { BiLogOut } from "react-icons/bi";
import SidebarLogo from "./SidebarLogo";
import SidebarItem from "./SidebarItem";
import PostButton from "./PostButton";

const Sidebar = () => {
  const { data: currentUser } = useCurrentUser();
  const items = [
    {
      label: "Home",
      href: "/",
      icon: IoMdHome,
    },
    {
      label: "Notifications",
      href: "/notifications",
      icon: IoIosNotifications,
      auth: true,
    },
    {
      label: "Home",
      href: "/",
      icon: IoIosPerson,
      auth: true,
    },
  ];

  return (
    <div className="col-span-1 h-full pr-4 md:pr-6">
      <div className="flex flex-col items-end">
        <div className="space-y-2 lg:w-[230px]">
          <SidebarLogo />
          {items.map((i, index) => (
            <SidebarItem
              key={index}
              href={i.href}
              label={i.label}
              icon={i.icon}
              auth={i.auth}
            />
          ))}
          {currentUser && (
            <SidebarItem
              onClick={() => signOut()}
              icon={BiLogOut}
              label="Log Out"
            />
          )}
          <PostButton />
        </div>
      </div>
    </div>
  );
};

export default Sidebar;
