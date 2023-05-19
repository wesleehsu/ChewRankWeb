import Image from "next/image";
import React, { useRef, useState } from "react";
import { ReviewBack } from "~/svgs/ReviewBack";
import { ReviewComment } from "~/svgs/ReviewComment";
import { ReviewLike } from "~/svgs/ReviewLike";
import { ReviewSave } from "~/svgs/ReviewSave";
import { ReviewShare } from "~/svgs/ReviewShare";
import data from "../data";

export const Review: React.FC<{
  page: string;
  setPage: React.Dispatch<React.SetStateAction<string>>;
}> = ({ page, setPage }) => {
  const mainRef = useRef<HTMLDivElement>(null);
  const [restaurant, setRestaurant] = useState(false);
  const tempStr = page.split(" ")[1];
  const reviewData = data.hot[parseInt(String(tempStr))];
  console.log(reviewData);

  return (
    <div
      className="duration-200"
      style={{
        pointerEvents: /Review/.test(page) ? "auto" : "none",
        opacity: /Review/.test(page) ? 1 : 0,
      }}
    >
      <div className="fixed z-[250] h-12 w-[360px] shrink-0 px-6">
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
        className="fixed z-[250] h-12 w-[360px] shrink-0 px-6 duration-300"
        style={{ opacity: restaurant ? 1 : 0 }}
      >
        <div className="relative h-full w-full">
          <Image
            src="/status_bar_black.png"
            fill={true}
            alt="status bar"
            style={{ objectFit: "contain" }}
          />
        </div>
      </div>
      <div
        ref={mainRef}
        className="absolute z-[210] flex h-[640px] w-[360px] flex-col overflow-scroll rounded-t-[20px] duration-300 ease-in-out"
        // style={{boxShadow: "0 0px 64px 36px rgb(0 0 0 / 0.9)"}}
      >
        <div className="relative h-[640px] w-[360px] shrink-0">
            {(reviewData?.imgFlag) == true ? <Image
            src={reviewData?.img || "/Post1/Post.jpg"}
            alt={reviewData?.title || "" }
            fill={true}
            style={{ objectFit: "cover" }}
            /> : <video 
            autoPlay
            muted
            loop
            playsInline
            src={reviewData?.img || "/Post2/Post.mp4"}
            />
            }
          {/* <Image
            src={reviewData?.img || "/Post1.png"}
            fill={true}
            alt="test"
            className="duration-200"
            style={{
              objectFit: "cover",
              filter: restaurant ? "brightness(.3)" : "",
            }}
          /> */}
          <div className="absolute top-0 z-[100] flex h-full w-full flex-col">
            <div
              className="font-xl relative ml-4 mt-10 h-6 w-6 cursor-pointer text-white"
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
            <div className="flex h-full w-full flex-row p-4 duration-[200ms]">
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
                  <div className="relative h-11 w-11 overflow-clip rounded-full border border-white">
                    <Image
                      src={reviewData?.accountPic || "/Cindy.jpg"}
                      fill={true}
                      style={{ objectFit: "cover" }}
                      alt="Reviewer"
                    />
                  </div>
                  <div className="ml-2.5 flex shrink-0 flex-col text-white">
                    <div className="text-[16px] font-extrabold">{reviewData?.accountName}</div>
                    <div className="text-[12px] font-bold opacity-70">
                      {reviewData?.followingFlag == true ? "Following" : "Follow"}
                    </div>
                  </div>
                </div>
                <div className="mb-[64px] text-xs font-semibold text-white">
                  {reviewData?.description}
                </div>
              </div>
              <div
                className="flex h-full w-6 shrink-0 flex-col items-center justify-end"
                style={{
                  filter: "drop-shadow(0px 2px 14px rgba(0, 0, 0, 0.6))",
                }}
              >
                <ReviewLike className="mb-2 w-[26px]" />
                <div className="mb-5 text-xs font-medium text-white">{((reviewData?.likesNum || 255) > 1000 ?  ((reviewData?.likesNum || 255) / 1000).toFixed(1) + "k" : reviewData?.likesNum)}</div>
                <ReviewSave className="mb-2 w-[22px]" />
                <div className="mb-5 text-xs font-medium text-white">{((reviewData?.commentNum || 255) > 1000 ?  ((reviewData?.commentNum || 255) / 1000).toFixed(1) + "k" : reviewData?.commentNum)}</div>
                <ReviewComment className="mb-2 w-6" />
                <div className="mb-5 text-xs font-medium text-white">{((reviewData?.collectionNum || 255) > 1000 ?  ((reviewData?.collectionNum || 255) / 1000).toFixed(1) + "k" : reviewData?.collectionNum)}</div>
                <ReviewShare className="mb-2.5 w-6" />
              </div>
            </div>
          </div>
          <div
            className="absolute z-[500] flex cursor-pointer flex-row items-center bg-white px-4 duration-[240ms]"
            style={{
              filter: "drop-shadow(0px 2px 14px rgba(0, 0, 0, 0.3))",
              width: restaurant ? "360px" : "284px",
              left: restaurant ? "0px" : "16px",
              bottom: restaurant ? "-38px" : "18px",
              borderRadius: restaurant ? "24px" : "24px",
              height: restaurant ? "680px" : "48px",
            }}
            onClick={() => {
              setRestaurant((p) => !p);
            //   console.log(page.substring(0, page.length - 11));
              setPage((p) =>
                /Restaurant/.test(p)
                  ? p.substring(0, p.length - 11)
                  : p + " Restaurant"
              );
            }}
          >
            <Image
              src="/ReviewRestaurantExpand.svg"
              width={14}
              height={14}
              alt="See Restaurant"
              className="shrink-0 duration-0"
              style={{
                transform: restaurant ? "rotate(180deg) scale(3)" : "",
                paddingBottom: restaurant ? "28px" : "1px",
                paddingRight: restaurant ? "8px" : "0px",
                alignSelf: restaurant ? "start" : "center",
              }}
            />
            <div
              className="mx-4 mt-[2px] flex shrink-0 flex-col leading-[15px] duration-0"
              style={{
                visibility: restaurant ? "hidden" : "visible",
              }}
            >
              <div className="text-[13px] font-black">{reviewData?.restaurantName}</div>
              <div className="flex flex-row text-[10px] font-bold opacity-50">
                <div>{reviewData?.category}</div>
                <div className="mx-1">•</div>
                <div>{reviewData?.distance}</div>
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
                src="/RestaurantStar.svg"
                width={16}
                height={16}
                alt="Restaurant Rating"
                className="pb-[3px]"
              />
              <div className="ml-2 text-sm font-black text-main">{reviewData?.reviewRank}</div>
              <div className="ml-1 text-sm text-main">({reviewData?.reviewNum})</div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};
