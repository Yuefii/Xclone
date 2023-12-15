"use client";
import { useRouter } from "next/navigation";

const SidebarLogo = () => {
  const router = useRouter();
  return (
    <>
      <div
        onClick={() => router.push("/")}
        className="w-14 h-14 p-4 flex justify-center items-center rounded-md cursor-pointer transition hover:bg-blue-300 hover:bg-opacity-10"
      >
        <h1 className="text-white text-2xl font-extrabold ">X</h1>
      </div>
    </>
  );
};

export default SidebarLogo;
