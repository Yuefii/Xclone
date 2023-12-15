import { BsBellFill, BsHouseFill } from "react-icons/bs";
import { FaUser } from "react-icons/fa";

export const SidebarItemList = [
  {
    label: "Home",
    href: "/",
    icon: BsHouseFill,
  },
  {
    label: "Notification",
    href: "/Notification",
    icon: BsBellFill,
  },
  {
    label: "Profile",
    href: "/users/123",
    icon: FaUser,
  },
];
