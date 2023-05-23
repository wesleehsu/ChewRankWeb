import Image from "next/image"
import React, { useEffect, useRef, useState } from "react"
import seedrandom from "seedrandom"
import { nextReview } from "~/nextReview"
import { ReviewBack } from "~/svgs/ReviewBack"
import { ReviewComment } from "~/svgs/ReviewComment"
import { ReviewLike } from "~/svgs/ReviewLike"
import { ReviewSave } from "~/svgs/ReviewSave"
import { ReviewShare } from "~/svgs/ReviewShare"
import data from "../data"

export const Review: React.FC<{
  page: string;
  setPage: React.Dispatch<React.SetStateAction<string>>;
  setComing: React.Dispatch<React.SetStateAction<number[]>>;
  setSeed: React.Dispatch<React.SetStateAction<number>>;
  seed: number
}> = ({ page, setPage, setComing, seed, setSeed }) => {
  const mainRef = useRef<HTMLDivElement>(null);
  const [restaurant, setRestaurant] = useState(false);
  const tempStr = page.split(" ")[1];
  const id = parseInt(String(tempStr));
  const reviewData = data.hot[id];
  console.log(reviewData);
  const [next, setNext] = useState<number[]>([]);
  useEffect(() => {
    if (page === "Home") {
      setNext([]);
      return;
    }
    const a = [...Array(data.hot.length).keys()].filter(
      (e) => e !== seed
    );
    let m = a.length,
      i;
    while (m > 0) {
      const r = seedrandom(`${seed || ""}${m}`);
      console.log(r());
      i = Math.floor(r() * m--);
      const t = a[m];
      a[m] = a[i] || 0;
      a[i] = t || 0;
    }
    setNext(a);
  }, [page, seed]);

  return (
    <div
      className="duration-200"
      style={{
        pointerEvents: /Review/.test(page) ? "auto" : "none",
        opacity: /Review/.test(page) ? 1 : 0,
      }}
    >
      <div
        className="fixed z-[250] h-10 w-[360px] shrink-0 px-6 pt-2"
        style={{ opacity: restaurant ? 0 : 1 }}
      >
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
        className="fixed z-[700] w-[360px] shrink-0 px-6 duration-300"
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
        className="font-xl absolute left-6 top-12 z-[300] h-16 w-16 cursor-pointer text-white"
        style={{
          filter: "drop-shadow(0px 2px 12px rgba(0, 0, 0, 0.8))",
          visibility: restaurant ? "hidden" : "visible",
        }}
        onClick={(e) => {
          e.stopPropagation();
          if (!mainRef.current) return;
          mainRef.current.style.transform = "translateX(400px)";
          setTimeout(() => {
            setPage("Home");
            setNext([]);
            setSeed(-1)
          }, 100);
          setTimeout(() => {
            if (!mainRef.current) return;
            mainRef.current.style.transform = "";
          }, 300);
        }}
      >
        <ReviewBack className="h-8 w-8 p-2" />
      </div>
      <div
        ref={mainRef}
        className="absolute z-[210] flex h-[640px] w-[360px] snap-y snap-mandatory flex-col overflow-scroll rounded-t-[20px] duration-300 ease-in-out"
        // style={{boxShadow: "0 0px 64px 36px rgb(0 0 0 / 0.9)"}}
      >
        <div className="relative h-[640px] w-[360px] shrink-0 snap-start snap-always">
          {reviewData?.imgFlag == true ? (
            <Image
              src={reviewData?.img || "/Post1/Post.jpg"}
              alt={reviewData?.title || ""}
              fill={true}
              style={{ objectFit: "cover" }}
            />
          ) : (
            <video
              autoPlay
              muted
              loop
              playsInline
              src={reviewData?.img || "/Post2/Post.mp4"}
            />
          )}
          <div className="absolute top-0 z-[100] flex h-full w-full flex-col">
            <div className="flex h-full w-full flex-row p-4 duration-[200ms]">
              <div
                className="grow-1 flex h-full w-full flex-col justify-end"
                style={{ textShadow: "0px 2px 16px rgba(0, 0, 0, 0.6)" }}
              >
                <div
                  className="mb-3 flex cursor-pointer flex-row items-end"
                  style={{
                    filter: "drop-shadow(0px 2px 16px rgba(0, 0, 0, 0.5))",
                  }}
                  onClick={(e) => {
                    e.stopPropagation();
                    setComing((p) =>
                      p[0] === 0 ? [e.clientX, e.clientY] : [0, 0]
                    );
                  }}
                >
                  <div className="relative h-11 w-11 overflow-hidden rounded-full border border-white">
                    <Image
                      src={reviewData?.accountPic || "/Cindy.jpg"}
                      fill={true}
                      style={{ objectFit: "cover" }}
                      alt="Reviewer"
                    />
                  </div>
                  <div className="ml-2.5 flex shrink-0 flex-col text-white">
                    <div className="text-[16px] font-extrabold">
                      {reviewData?.accountName}
                    </div>
                    <div className="text-[12px] font-bold opacity-70">
                      {reviewData?.followingFlag == true
                        ? "Following"
                        : "Follow"}
                    </div>
                  </div>
                </div>
                <div className="mb-[64px] text-xs font-semibold text-white">
                  {reviewData?.description}
                </div>
              </div>
              <div
                className="flex h-full w-6 shrink-0 cursor-pointer flex-col items-center justify-end"
                style={{
                  filter: "drop-shadow(0px 2px 14px rgba(0, 0, 0, 0.6))",
                }}
                onClick={(e) => {
                  e.stopPropagation();
                  setComing((p) =>
                    p[0] === 0 ? [e.clientX, e.clientY] : [0, 0]
                  );
                }}
              >
                <ReviewLike className="mb-2 w-[26px]" />
                <div className="mb-5 text-xs font-medium text-white">
                  {(reviewData?.likesNum || 255) > 1000
                    ? ((reviewData?.likesNum || 255) / 1000).toFixed(1) + "k"
                    : reviewData?.likesNum}
                </div>
                <ReviewSave className="mb-2 w-[22px]" />
                <div className="mb-5 text-xs font-medium text-white">
                  {(reviewData?.commentNum || 255) > 1000
                    ? ((reviewData?.commentNum || 255) / 1000).toFixed(1) + "k"
                    : reviewData?.commentNum}
                </div>
                <ReviewComment className="mb-2 w-6" />
                <div className="mb-5 text-xs font-medium text-white">
                  {(reviewData?.collectionNum || 255) > 1000
                    ? ((reviewData?.collectionNum || 255) / 1000).toFixed(1) +
                      "k"
                    : reviewData?.collectionNum}
                </div>
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
              bottom: restaurant ? "-0px" : "18px",
              borderRadius: restaurant ? "20px" : "24px",
              borderBottomLeftRadius: restaurant ? "0px" : "24px",
              borderBottomRightRadius: restaurant ? "0px" : "24px",
              height: restaurant ? "640px" : "48px",
            }}
            onClick={(e) => {
              e.stopPropagation();
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
              src="/ReviewRestaurantExpand.png"
              width={14}
              height={14}
              alt="See Restaurant"
              className="shrink-0 duration-0"
              style={{
                transform: restaurant ? "rotate(180deg) scale(3)" : "",
                paddingBottom: restaurant ? "24px" : "1px",
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
              <div className="text-[13px] font-black">
                {reviewData?.restaurantName}
              </div>
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
                src="/RestaurantStar.png"
                width={16}
                height={16}
                alt="Restaurant Rating"
                className="pb-[3px]"
              />
              <div className="ml-2 text-sm font-black text-main">
                {reviewData?.reviewRank}
              </div>
              <div className="ml-1 text-sm text-main">
                ({reviewData?.reviewNum})
              </div>
            </div>
          </div>
        </div>
        {next.map((e) => {
          return nextReview(e, setComing, restaurant, setRestaurant, setPage);
        })}
      </div>
    </div>
  );
};
