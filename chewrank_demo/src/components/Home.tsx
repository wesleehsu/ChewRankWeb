import Image from "next/image"
import React, { useRef, useState } from "react"
import { ReviewBack } from "~/svgs/ReviewBack"
import { ReviewComment } from "~/svgs/ReviewComment"
import { ReviewLike } from "~/svgs/ReviewLike"
import { ReviewSave } from "~/svgs/ReviewSave"
import { ReviewShare } from "~/svgs/ReviewShare"
import data from "../data"

export const Home: React.FC<{
  setPage: React.Dispatch<React.SetStateAction<string>>;
}> = ({ setPage }) => {
  const [mousePos, setMousePos] = useState(["540px", "22px"]);
  const reviewRef = useRef<HTMLDivElement>(null);
  const reviewPreview = (e: (typeof data.hot)[0], i: number) => (
    <div
      key={i}
      className="mb-3 w-full cursor-pointer border-2 bg-white"
      style={{ height: e.height }}
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
            if (reviewRef.current) {
              reviewRef.current.style.transitionDuration = "200ms";
              reviewRef.current.style.left = "540px";
              reviewRef.current.style.top = "22px";
              reviewRef.current.style.opacity = "100";
              reviewRef.current.style.transform = "scale(1)";
            }
          }, 120);
        }
      }}
    >
      {e.title}
    </div>
  );

  return (
    <>
      {/* Review */}
      <div
        ref={reviewRef}
        className="pointer-events-none absolute z-50 h-[640px] w-[360px] scale-[0.1] overflow-scroll rounded-[20px] bg-orange-500 opacity-0 ease-in-out"
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
                  reviewRef.current.style.left = mousePos[0] || "540px";
                  reviewRef.current.style.top = mousePos[1] || "22px";
                  reviewRef.current.style.pointerEvents = "none";
                  reviewRef.current.style.opacity = "0";
                  reviewRef.current.style.transform = "scale(0.4)";
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
      <div className="h-12 w-full shrink-0 px-6">
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
        <div className="sticky top-0 ml-4 flex h-8 shrink-0 flex-row items-center bg-white">
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
        <div className="flex h-20 shrink-0 flex-row items-center justify-center bg-white">
          quick categories
        </div>
        <div className="sticky top-8 h-14 shrink-0 border-2 bg-white">
          filter , sort
        </div>
        <div className="m-2 flex flex-row items-start justify-center bg-white">
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
