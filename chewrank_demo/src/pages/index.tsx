import { type NextPage } from "next";
import Head from "next/head";
import Image from "next/image";
import { useState } from "react";
import { Restaurant } from "~/components/Restaurant";
import { Review } from "~/components/Review";
import { Home } from "../components/Home";

const Index: NextPage = () => {
  const [page, setPage] = useState<string>("Home");
  const [coming, setComing] = useState([0, 0]);

  return (
    <div
      className="fixed flex h-[100vh] w-[100vw] items-center justify-center bg-main"
      // style={{ pointerEvents: coming[0] === 0 ? "none" : "all" }}
      onClick={() => {
        setComing([0, 0]);
      }}
    >
      <Head>
        <title>ChewRank Demo</title>
        <link rel="icon" href="/favicon.png" />
      </Head>
      <div className="absolute bottom-[-50px] right-4 z-[0]">
        <Image src="Logo.png" width={300} height={300} alt="Nav" className="" />
        {/* <div className="text-white absolute bottom-0 right-0 font-black">App Demo</div> */}
      </div>
      <div
        id="target"
        className="relative flex h-[720px] w-[360px] flex-col overflow-clip rounded-[20px] bg-white shadow-[0_25px_50px_-12px_rgb(179_43_0)]"
      >
        <Restaurant page={page} setPage={setPage} setComing={setComing} />
        <Review page={page} setPage={setPage} setComing={setComing} />
        <Home setPage={setPage} setComing={setComing} />
        <div
          className={
            "absolute inset-x-0 bottom-0 z-[9999] h-20 w-[360px] rounded-b-[20px] border-t border-[#FFF6F3] bg-white"
          }
        >
          <Image src="Nav.png" fill={true} alt="Nav" className="pb-[4px]" />
        </div>
      </div>
      <div
        className="absolute z-[9999]  origin-bottom ease-in-out"
        style={{
          left: (coming[0]||0)-70,
          top: (coming[1]||0)-70,
        }}
      >
        <div
          className="relative duration-300"
          style={{
            filter: "drop-shadow(0px 2px 12px rgba(179,43,0,0.9))",
            transform: coming[0] === 0 ? "scale(0)" : "scale(1)",
          }}
        >
          <Image src="ComingSoon.png" width={140} height={50} alt="Tooltip" />
        </div>
      </div>
    </div>
  );
};

export default Index;
