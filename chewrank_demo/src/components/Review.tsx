import Image from "next/image"
import React, { useRef, useState } from "react"
import { ReviewBack } from "~/svgs/ReviewBack"
import { ReviewComment } from "~/svgs/ReviewComment"
import { ReviewLike } from "~/svgs/ReviewLike"
import { ReviewSave } from "~/svgs/ReviewSave"
import { ReviewShare } from "~/svgs/ReviewShare"
import data from "../data"

export const Review: React.FC<{
  page: string;
  setPage: React.Dispatch<React.SetStateAction<string>>;
}> = ({ page, setPage }) => {
  const mainRef = useRef<HTMLDivElement>(null);
  const [restaurant, setRestaurant] = useState(false);

  let reviewData = data.hot[parseInt(page.split(' ')[1])]
  console.log(reviewData)

  return (
    <div
      ref={mainRef}
      className="absolute z-[200] flex h-[640px] w-[360px] flex-col overflow-scroll rounded-t-[20px] duration-200 ease-in"
      style={{
        pointerEvents: /Review/.test(page) ? "auto" : "none",
        opacity: /Review/.test(page) ? 1 : 0,
      }}
      // style={{boxShadow: "0 0px 64px 36px rgb(0 0 0 / 0.9)"}}
    >
      <div className="relative h-[640px] w-[360px] shrink-0">
        <Image
          src="/test.png"
          fill={true}
          alt="test"
          className="duration-200"
          style={{
            objectFit: "cover",
            filter: restaurant ? "brightness(.3)" : "",
          }}
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
            style={{ filter: "drop-shadow(0px 2px 12px rgba(0, 0, 0, 0.6))" }}
            onClick={() => {
              if (!mainRef.current) return;
              mainRef.current.style.transform = "translateX(400px)";
              setTimeout(() => {
                setPage("Home");
              }, 100);
              setTimeout(() => {
                if (!mainRef.current) return;
                mainRef.current.style.transform = "";
              }, 300);
            }}
          >
            <ReviewBack className="w-9" />
          </div>
          <div className="flex h-full w-full flex-row p-4">
            <div
              className="grow-1 flex h-full w-full flex-col justify-end"
              style={{ textShadow: "0px 2px 16px rgba(0, 0, 0, 0.6)" }}
            >
              <div
                className="mb-3 flex flex-row items-end "
                style={{
                  filter: "drop-shadow(0px 2px 16px rgba(0, 0, 0, 0.5))",
                }}
              >
                <div className="relative h-11 w-11 overflow-clip rounded border border-white">
                  <Image
                    src="/test.png"
                    fill={true}
                    style={{ objectFit: "cover" }}
                    alt="Reviewer"
                  />
                </div>
                <div className="ml-2.5 flex shrink-0 flex-col text-white">
                  <div className="text-[16px] font-extrabold">kjhgfd</div>
                  <div className="text-[10px] font-bold opacity-70">
                    following
                  </div>
                </div>
              </div>
              <div className="mb-[64px] text-xs font-semibold text-white">
                jhgfcvhbjnkl kjhg jkhgfdkjh jhgf
              </div>
            </div>
            <div
              className="flex h-full w-6 shrink-0 flex-col items-center justify-end"
              style={{
                filter: "drop-shadow(0px 2px 14px rgba(0, 0, 0, 0.6))",
              }}
            >
              <ReviewLike className="mb-2 w-[26px]" />
              <div className="mb-5 text-xs font-medium text-white">999</div>
              <ReviewSave className="mb-2 w-[22px]" />
              <div className="mb-5 text-xs font-medium text-white">999</div>
              <ReviewComment className="mb-2 w-6" />
              <div className="mb-5 text-xs font-medium text-white">999</div>
              <ReviewShare className="mb-2.5 w-6" />
            </div>
          </div>
        </div>
        <div
          className="absolute z-[150] flex h-12 cursor-pointer flex-row items-center rounded-full bg-white px-4 duration-300"
          style={{
            filter: "drop-shadow(0px 2px 14px rgba(0, 0, 0, 0.3))",
            width: restaurant ? "360px" : "284px",
            left: restaurant ? "0px" : "16px",
            bottom: restaurant ? "600px" : "18px",
          }}
          onClick={() => {
            setRestaurant((p) => !p);
          }}
        >
          <Image
            src="/ReviewRestaurantExpand.svg"
            width={14}
            height={14}
            alt="See Restaurant"
            className="shrink-0 duration-0"
            style={{
              transform: restaurant ? "rotate(180deg)" : "",
              paddingBottom: restaurant ? "12px" : "1px",
            }}
          />
          <div
            className="mx-4 flex shrink-0 flex-col leading-4 duration-0"
            style={{
              visibility: restaurant ? "hidden" : "visible",
            }}
          >
            <div className="text-[16px] font-black">Resttttaurant</div>
            <div className="flex flex-row text-[10px] font-bold opacity-50">
              <div>Café</div>
              <div className="mx-1">•</div>
              <div>8.8</div>
              <div className="mx-0.5">mil</div>
            </div>
          </div>
          <div
            className="flex w-full flex-row items-center justify-end duration-0"
            style={{
              visibility: restaurant ? "hidden" : "visible",
            }}
          >
            <Image
              src="/ReviewRestaurantStar.svg"
              width={16}
              height={16}
              alt="See Restaurant"
              className="pb-[3px]"
            />
            <div className="ml-2 font-black text-main">4.3</div>
            <div className="ml-1 text-main">(677)</div>
          </div>
        </div>
      </div>
    </div>
  );
};
