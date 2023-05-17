import { type NextPage } from "next";
import Head from "next/head";
import { useEffect, useRef, useState } from "react";
import { Home } from "../components/Home";
import { Review } from "~/components/Review"

const Index: NextPage = () => {
  const [page, setPage] = useState<string>("Home");
  useEffect(() => {
    console.log();
  }, []);

  return (
    <div className="relative flex h-[100vh] w-[100vw] items-center justify-center bg-stone-900">
      <Head>
        <title>ChewRank Demo</title>
        <link rel="icon" href="/favicon.png" />
      </Head>
      <div className="relative flex h-[720px] w-[360px] flex-col overflow-clip rounded-[20px] bg-white">
        
        <Review page={page} setPage={setPage} />
        <Home setPage={setPage} />
        <div
          className={
            "absolute inset-x-0 bottom-0 z-[200] h-20 w-[360px] rounded-b-[20px] border-t border-[#FFF6F3] bg-white"
          }
        />
      </div>
    </div>
  );
};

export default Index;
