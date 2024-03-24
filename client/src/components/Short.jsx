"use client";

import React, { useEffect, useState } from "react";
import { ToastContainer, toast } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";
import Result from "./Result";
import axios from "axios";
function Short() {
  // state
  const [value, setValue] = useState("");
  const [urlId, setUrlId] = useState("");
  const [shortUrl, setShortUrl] = useState("");
  // handel submit
  const handelSubmit = (e) => {
    e.preventDefault();
    if (!value)
      return toast.error("Enter Your Link", {
        autoClose: 2000,
        theme: "dark",
      });
    const call = async () => {
      const id = await axios.post(`${process.env.NEXT_PUBLIC_API}url`, {
        url: value,
      });
      setUrlId(id.data.urlID);
    };
    call();
    setValue('')
  };
  // genaret new url
  useEffect(() => {
    if (urlId) {
      const shortenUrl = `${process.env.NEXT_PUBLIC_API}${urlId}`;
      setShortUrl(shortenUrl);
    }
  }, [urlId]);

  return (
    <main className="flex flex-col md:flex-row gap-10 mt-28">
      {/* left side */}
      <div className="w-full md:w-1/2 h-screen">
        {/* headline */}
        <h1 className="text-3xl font-sans font-semibold text-center border-b pb-2 text-purple-700">
          FREE Short Your Link
        </h1>
        <div className="mt-10">
          {/* input section */}
          <div className="flex flex-col sm:flex-row gap-y-5">
            <input
              type="text"
              placeholder="www.example.com"
              className="outline-none border border-gray-300 focus:border-[#2ACFCF] py-2 px-1  flex-1 rounded-s-[10px]"
              onChange={(e) => setValue(e.target.value)}
              value={value}
            />
            <div className="w-full sm:w-[200px]">
              <button
                onClick={handelSubmit}
                className=" bg-[#24b1b1] hover:bg-[#238f8f] w-full h-12 md:h-full font-semibold text-white rounded-e-[10px]"
              >
                Free Short
              </button>
            </div>
          </div>
          {/* output section */}
          <div className=" mt-8 md:mt-202">
            <Result url={shortUrl} />
          </div>
        </div>
      </div>
      {/* ride-side histroy section */}
      <div className="flex-1 border border-blue-400 mb-9 rounded-md">
        {/* headline */}
        <h1 className="text-3xl font-sans font-semibold text-center border-b pb-2 text-purple-700">
          previous LInk
        </h1>
        <div className="p-2">
          <h1 className="text-3xl font-sans font-semibold text-center border-b pb-2 text-gray-700">
            cooming soon...
          </h1>
          {/* <Result click={true} />
          <Result click={true} /> */}
        </div>
      </div>
      <ToastContainer />
    </main>
  );
}

export default Short;
