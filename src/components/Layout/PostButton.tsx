import { useLoginModal } from "@/hooks/useLoginModal";
import { useRouter } from "next/router";
import { useCallback } from "react";
import { FaFeather } from "react-icons/fa";

const PostButton = () => {
  const router = useRouter();
  const loginModal = useLoginModal();

  const handleClick = useCallback(() => {
    loginModal.onOpen();
  }, [loginModal]);

  return (
    <div onClick={handleClick}>
      <div className="mt-6 lg:hidden rounded-full w-14 h-14 p-4 flex items-center justify-center bg-sky-600 hover:bg-opacity-80 transition cursor-pointer">
        <FaFeather size={20} color="white" />
      </div>
      <div className="mt-6 hidden lg:block px-4 py-2 rounded-full bg-sky-600 hover:bg-opacity-80 cursor-pointer transition">
        <p className="hidden lg:block text-center font-semibold text-white text-md">
          Post
        </p>
      </div>
    </div>
  );
};

export default PostButton;
