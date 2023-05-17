import Image from "next/image";
import React, { useRef, useState } from "react";
import { ReviewBack } from "~/svgs/ReviewBack";
import { ReviewComment } from "~/svgs/ReviewComment";
import { ReviewLike } from "~/svgs/ReviewLike";
import { ReviewSave } from "~/svgs/ReviewSave";
import { ReviewShare } from "~/svgs/ReviewShare";
import data from "../data";
import { HomeLike } from "~/svgs/HomeLike";
import { main } from "tailwind.config";

export const Home: React.FC<{
  setPage: React.Dispatch<React.SetStateAction<string>>;
}> = ({ setPage }) => {
  const [mousePos, setMousePos] = useState(["540px", "22px"]);
  const [sort, setSort] = useState("Hot");
  const reviewRef = useRef<HTMLDivElement>(null);
  const mainRef = useRef<HTMLDivElement>(null);
  const reviewPreview = (e: (typeof data.hot)[0], i: number) => (
    <div
      key={i}
      className="mb-6 flex w-full cursor-pointer flex-col bg-white"
      onClick={(e) => {
        console.log(`${e.clientX - 490}px ${e.clientY - 310}px`);
        if (reviewRef.current) {
          reviewRef.current.style.transitionDuration = "0ms";
          reviewRef.current.style.left = (e.clientX - 180).toString() + "px";
          reviewRef.current.style.top = (e.clientY - 320).toString() + "px";
          reviewRef.current.style.pointerEvents = "auto";
          setMousePos([
            (e.clientX - 180).toString() + "px",
            (e.clientY - 320).toString() + "px",
          ]);
          setTimeout(() => {
            if (reviewRef.current && mainRef.current) {
              reviewRef.current.style.transitionDuration = "200ms";
              reviewRef.current.style.left = mainRef.current.style.left;
              reviewRef.current.style.top = mainRef.current.style.top;
              reviewRef.current.style.opacity = "100";
              reviewRef.current.style.transform = "scale(1)";
            }
          }, 120);
        }
      }}
    >
      <div
        className="relative h-full w-full shrink-0 overflow-clip rounded-xl"
        style={{ height: e.height }}
      >
        <Image
          src="/test.png"
          alt="e.title"
          fill={true}
          style={{ objectFit: "cover" }}
        />
      </div>
      <div className="w-full shrink-0 px-3 pt-2.5 text-sm font-semibold">
        {e.title}
      </div>
      <div className="flex w-full shrink-0 flex-row items-center pl-3 pr-3.5 pt-2">
        <div className="relative h-[22px] w-[22px] shrink-0 overflow-clip rounded">
          <Image
            src="/test.png"
            alt="e.title"
            fill={true}
            style={{ objectFit: "cover" }}
          />
        </div>
        <div className="ml-1.5 flex shrink-0 flex-col">
          <div className="text-[10px] font-semibold">{e.title}</div>
          <div className="text-[6px] opacity-50">{e.title}</div>
        </div>
        <div className="flex h-6 w-full flex-row items-center justify-end">
          <HomeLike className="" />
          <div className="ml-1.5 text-[12px] text-main">999</div>
        </div>
      </div>
    </div>
  );

  return (
    <>
      {/* Review */}
      <div
        ref={reviewRef}
        className="pointer-events-none absolute z-[200] h-[640px] w-[360px] scale-[0.1] overflow-scroll rounded-[20px] bg-orange-500 opacity-0 ease-in-out"
        // style={{boxShadow: "0 0px 64px 36px rgb(0 0 0 / 0.9)"}}
      >
        <div className="relative h-full w-full">
          <Image
            src="/test.png"
            fill={true}
            alt="test"
            style={{ objectFit: "cover" }}
          />
          <div className="absolute top-0 z-[100] flex h-full w-full flex-col">
            <div className="h-12 w-full shrink-0 px-6">
              <div className="relative h-full w-full">
                <Image
                  src="/status_bar_white.png"
                  fill={true}
                  alt="status bar"
                  style={{ objectFit: "contain" }}
                />
              </div>
            </div>
            <div
              className="font-xl relative ml-4 h-6 w-6 cursor-pointer text-white"
              style={{ filter: "drop-shadow(0px 2px 12px rgba(0, 0, 0, 0.5))" }}
              onClick={() => {
                if (reviewRef.current) {
                  // reviewRef.current.style.left = mousePos[0] || "0px";
                  // reviewRef.current.style.top = mousePos[1] || "0px";
                  reviewRef.current.style.pointerEvents = "none";
                  reviewRef.current.style.opacity = "0";
                  reviewRef.current.style.transform = "scale(0.1)";
                }
              }}
            >
              <ReviewBack className="w-9" />
            </div>
            <div className="flex h-full w-full flex-row p-4">
              <div className="grow-1 flex h-full w-full flex-col justify-end ">
                <div
                  className="mb-[60px] text-xs text-white"
                  style={{ textShadow: "0px 2px 16px rgba(0, 0, 0, 0.5)" }}
                >
                  jhgfcvhbjnkl kjhg jkhgfdkjh jhgf
                </div>
              </div>
              <div
                className="flex h-full w-6 shrink-0 flex-col items-center justify-end"
                style={{
                  filter: "drop-shadow(0px 2px 14px rgba(0, 0, 0, 0.5))",
                }}
              >
                <ReviewLike className="mb-2 w-[26px]" />
                <div className="mb-5 text-xs font-medium text-white">999</div>
                <ReviewSave className="mb-2 w-[22px]" />
                <div className="mb-5 text-xs font-medium text-white">999</div>
                <ReviewComment className="mb-2 w-6" />
                <div className="mb-5 text-xs font-medium text-white">999</div>
                <ReviewShare className="mb-3 w-6" />
              </div>
            </div>
          </div>
          <div className="fixed bottom-4 left-4 z-[150] flex h-12 w-[284px] flex-row items-center rounded-full bg-white">
            restaurant
          </div>
        </div>
      </div>

      {/* Home */}
      <div ref={mainRef} className="h-12 w-full shrink-0 px-6">
        <div className="relative h-full w-full">
          <Image
            src="/status_bar_black.png"
            fill={true}
            alt="status bar"
            style={{ objectFit: "contain" }}
          />
        </div>
      </div>
      <div className="relative flex h-full w-full flex-col overflow-scroll bg-white">
        <div className="sticky top-0 z-50 flex h-8 shrink-0 flex-row items-center bg-white pl-4">
          <Image
            src="/HomeLocation.svg"
            alt="Location"
            width={14}
            height={14}
            className="mt-[1px]"
          />
          <div className="ml-[11px] mr-3 mt-[1px] shrink-0 text-xs font-extralight">
            Los Angelas
          </div>
          <Image
            src="/HomeLocationSelect.svg"
            alt="Select Location"
            width={12}
            height={12}
            className="mt-[1px]"
          />
          <div className="ml-4 mr-3 flex h-full w-full flex-row items-center rounded-full border-[0.5px] border-main py-0.5 text-xs font-light">
            <Image
              src="/HomeSearch.svg"
              alt="Search"
              width={12}
              height={12}
              className="mx-3"
            />
            <div className="text-[10px] font-extralight text-main">
              People, places, reviews, anything
            </div>
          </div>
        </div>
        <div className="flex h-24 shrink-0 flex-row items-center justify-center border-b-[6px] border-[#FFF6F3] bg-white">
          quick categories
        </div>
        <div className="sticky top-8 z-50 flex h-16 shrink-0 flex-row items-center bg-white py-4 pl-[18px]">
          <Image
            src="HomeFilter.svg"
            width={22}
            height={22}
            alt="Filter"
            className="pt-0.5"
          />
          <div className="h-6 w-4 shrink-0 border-r-[0.5px] border-main bg-white" />
          <div className="flex flex-row overflow-scroll pl-3 pt-4">
            <div
              className="mr-2.5 flex h-8 flex-row items-center justify-center rounded-full border-[0.5px] border-main px-6 py-0.5 text-sm"
              style={{
                color: sort === "Hot" ? "white" : main,
                fontWeight: sort === "Hot" ? "700" : "400",
                background: sort === "Hot" ? main : "white",
              }}
            >
              Hot
            </div>
            <div
              className="mr-2.5 flex h-8 flex-row items-center justify-center rounded-full border-[0.5px] border-main px-6 py-0.5 text-sm"
              style={{
                color: sort === "New" ? "white" : main,
                fontWeight: sort === "New" ? "700" : "400",
                background: sort === "New" ? main : "white",
              }}
            >
              New
            </div>
            <div
              className="mr-2.5 flex h-8 flex-row items-center justify-center rounded-full border-[0.5px] border-main px-6 py-0.5 text-sm"
              style={{
                color: sort === "Following" ? "white" : main,
                fontWeight: sort === "Following" ? "700" : "400",
                background: sort === "Following" ? main : "white",
              }}
            >
              Following
            </div>
            <div
              className="mr-2.5 flex h-8 flex-row items-center justify-center rounded-full border-[0.5px] border-main px-6 py-0.5 text-sm"
              style={{
                color: sort === "Best" ? "white" : main,
                fontWeight: sort === "Best" ? "700" : "400",
                background: sort === "Best" ? main : "white",
              }}
            >
              Best
            </div>
            <div className="h-1 w-6 shrink-0" />
          </div>
        </div>
        <div className="mx-2 flex flex-row items-start justify-center bg-white">
          <div className="mr-1 flex w-full flex-col">
            {data.hot.map((e, i) => i % 2 === 0 && reviewPreview(e, i))}
          </div>
          <div className="ml-1 flex w-full flex-col">
            {data.hot.map((e, i) => i % 2 === 1 && reviewPreview(e, i))}
          </div>
        </div>
      </div>
    </>
  );
};
