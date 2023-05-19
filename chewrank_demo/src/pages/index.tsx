import { type NextPage } from "next";
import Head from "next/head";
import { useEffect, useRef, useState } from "react";
import { Home } from "../components/Home";
import { Review } from "~/components/Review";
import { Restaurant } from "~/components/Restaurant";
import Image from "next/image";

const Index: NextPage = () => {
  const [page, setPage] = useState<string>("Home");
  useEffect(() => {
    // console.log("Hello world");
  }, []);

  return (
    <div className="fixed flex h-[100vh] w-[100vw] items-center justify-center bg-main">
      <Head>
        <title>ChewRank Demo</title>
        <link rel="icon" href="/favicon.png" />
      </Head>
      <div className="absolute z-[0] bottom-[-50px] right-4">
        <Image
          src="Logo.png"
          width={300}
          height={300}
          alt="Nav"
          className=""
        />
        {/* <div className="text-white absolute bottom-0 right-0 font-black">App Demo</div> */}
      </div>
      <div
        id="target"
        className="relative flex h-[720px] w-[360px] flex-col overflow-clip rounded-[20px] bg-white shadow-[0_25px_50px_-12px_rgb(179_43_0)]"
      >
        <Restaurant page={page} setPage={setPage} />
        <Review page={page} setPage={setPage} />
        <Home setPage={setPage} />
        <div
          className={
            "absolute inset-x-0 bottom-0 z-[9999] h-20 w-[360px] rounded-b-[20px] border-t border-[#FFF6F3] bg-white"
          }
        >
          <Image src="Nav.png" fill={true} alt="Nav" className="pb-[4px]" />
        </div>
      </div>
    </div>
  );
};

export default Index;
