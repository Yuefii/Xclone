"use client";

import { useRouter } from "next/navigation";
import { FaFeather } from "react-icons/fa";

const SidebarTweetButton = () => {
  const router = useRouter();

  return (
    <>
      <div onClick={() => router.push("/")}>
        <div className="w-14 h-14 p-4 mt-6 flex justify-center items-center bg-sky-500 rounded-full transition cursor-pointer lg:hidden">
          <FaFeather size={24} color="white" />
        </div>
        <div className="hidden mt-6 px-4 py-2 rounded-full bg-sky-500 cursor-pointer transition lg:block hover:bg-opacity-90">
          <p className="hidden text-center font-semibold text-white text-md lg:block">Tweat</p>
        </div>
      </div>
    </>
  );
};

export default SidebarTweetButton;
