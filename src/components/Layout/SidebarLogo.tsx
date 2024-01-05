import { useRouter } from "next/router";
import { BsTwitter } from "react-icons/bs";

const SidebarLogo = () => {
  const router = useRouter();

  return (
    <div
      onClick={() => router.push("/")}
      className="rounded-lg h-14 w-14 px-10 flex justify-center items-center cursor-pointer transition text-xl font-extrabold"
    >
      <span className="text-sky-600 text-4xl">X</span>clone
    </div>
  );
};

export default SidebarLogo;
