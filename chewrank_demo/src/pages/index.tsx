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
  const [seed, setSeed] = useState(-1);

  return (
    <div
      className="fixed flex h-[100vh] w-[100vw] items-start justify-center bg-white"
      // className="fixed flex h-[100vh] w-[100vw] items-start justify-center bg-main"
      // style={{ pointerEvents: coming[0] === 0 ? "none" : "all" }}
      onClick={() => {
        setComing([0, 0]);
      }}
    >
      <Head>
        <title>ChewRank Demo</title>
        <link rel="icon" href="/favicon.png" />
      </Head>
      {/* <div className="absolute bottom-[-50px] right-4 z-[0]">
        <Image src="Logo2.png" width={300} height={300} alt="Nav" className="" />
      </div> */}
      <div className="">
        <div
          className={
            "absolute top-[16px] md:top-[52px] z-[10000] flex h-[640px] w-[360px] cursor-pointer flex-col items-center justify-center rounded-b-[20px] bg-white duration-500"
          }
          onClick={(e) => {
            e.currentTarget.style.opacity = "0";
            e.currentTarget.style.zIndex = "-100";
          }}
        >
          <Image
            src="Logo2.png"
            width={200}
            height={200}
            alt="Cover"
            className=""
          />
          <div className="text-[10px] font-black text-main">
            RESTAURANT DISCOVERY FOR THE
          </div>
          <div className="text-[20px] font-black text-main">NEW GENERATION</div>
          {/* <div className="">DEMO</div> */}
          <div className="mt-6 text-[14px] text-main opacity-50">
            Click to Experience Now
          </div>
        </div>
        <div
          id="target"
          // className="relative flex h-[640px] w-[360px] flex-col overflow-hidden rounded-[20px] bg-white"
          className="relative mt-[16px] md:mt-[52px] flex h-[640px] w-[360px] flex-col overflow-hidden rounded-[20px] bg-white shadow-[0_25px_50px_-12px_rgb(179_43_0_/_0.5)]"
        >
          <Restaurant page={page} setPage={setPage} setComing={setComing} />
          <Review
            page={page}
            setPage={setPage}
            setComing={setComing}
            setSeed={setSeed}
            seed={seed}
          />
          <Home setPage={setPage} setComing={setComing} setSeed={setSeed} />
          <div
            className={
              "absolute inset-x-0 bottom-0 z-[9999] h-[80px] w-[360px] rounded-b-[20px] border-t border-[#FFF6F3] bg-white"
            }
          >
            <Image
              src="Nav.png"
              fill={true}
              alt="Nav"
              className="pb-[4px]"
              onClick={(e) => {
                e.stopPropagation();
                setComing((p) =>
                  p[0] === 0 ? [e.clientX, e.clientY] : [0, 0]
                );
              }}
            />
          </div>
        </div>
        <div
          className="absolute z-[9999] origin-bottom ease-in-out"
          style={{
            left: (coming[0] || 0) - 60,
            top: (coming[1] || 0) - 60,
          }}
        >
          <div
            className="relative duration-300"
            style={{
              filter: "drop-shadow(0px 2px 12px rgba(179,43,0,0.9))",
              transform: coming[0] === 0 ? "scale(0)" : "scale(1)",
            }}
          >
            <Image src="ComingSoon.png" width={120} height={40} alt="Tooltip" />
          </div>
        </div>
      </div>
    </div>
  );
};

export default Index;
