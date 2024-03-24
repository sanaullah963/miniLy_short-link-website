import React from "react";
import { FaRegCopy } from "react-icons/fa";
import { MdOutlineOpenInNew } from "react-icons/md";
import { FaRegEye } from "react-icons/fa";
import { ToastContainer, toast } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";
import { useRouter } from "next/navigation";

function Result({ click, url }) {
  const router = useRouter();
  // total visit handel
  const visitHandel = () => {
    if (!url) return;
    window.open(url, "_blank");
  };
  // coppy handel
  const coppyHandel = async () => {
    if (!url) return 
    navigator.clipboard.writeText(url);

    toast.success("Coppy successfull",{
      autoClose: 2000,
      theme: "dark",
    });
  };
  return (
    <main className={`${click && "mb-4 bg-gray-100"}`}>
      <div className="flex flex-col sm:flex-row gap-y-3 gap-2">
        <div className="border border-gray-300  py-2 px-1  flex-1 cursor-text">
          <span className="block text-xl text-indigo-500">
            {click
              ? "example.com"
              : url && url !== process.env.NEXT_PUBLIC_API && url}
          </span>

          {click && (
            <span className="text-gray-500 font-semibold text-sm">
              <hr />
              Original : wwwndkdjdksdfgagfjs.con
            </span>
          )}
        </div>
        {/* coppy icon */}
        <div className="flex gap-x-2">
          <button
            onClick={coppyHandel}
            className=" bg-green-500 hover:bg-green-600 h-12 md:h-full font-semibold text-white rounded-[4px] py-3 px-4 flex-1"
          >
            <FaRegCopy />
          </button>
          {/* visit icon */}
          <button
            onClick={visitHandel}
            className=" bg-yellow-400 hover:bg-yellow-500 h-12 md:h-full font-semibold text-white rounded-[4px] py-3 px-4 mx-auto"
          >
            <MdOutlineOpenInNew />
          </button>
          {/* conditional render total visit */}
          {click && (
            <span className=" border bg-gray-300 text-gray-600 h-12 md:h-full font-semibold rounded-[4px] py-3 px-4 mx-auto flex items-center justify-center">
              <span className="">
                <FaRegEye />
                22
              </span>
            </span>
          )}
        </div>
      </div>
      <ToastContainer />
    </main>
  );
}

export default Result;
