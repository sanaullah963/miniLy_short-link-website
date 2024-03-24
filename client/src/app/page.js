import Banner from "@/components/Banner";
import Navbar from "@/components/Navbar";
import Short from "@/components/Short";
import Image from "next/image";

export default function Home() {
  return (
    <main className="">
      <div className="mx-10 md:mx-20">
        <Navbar />
        <Banner />
      </div>
      <div className="mx-5 lg:mx-20">
        <Short />
      </div>
    </main>
  );
}
