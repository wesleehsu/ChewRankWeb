import Image from "next/image";
import data from "./data";
import { ReviewComment } from "./svgs/ReviewComment";
import { ReviewLike } from "./svgs/ReviewLike";
import { ReviewSave } from "./svgs/ReviewSave";
import { ReviewShare } from "./svgs/ReviewShare";

export const nextReview = (
  i: number,
  setComing: React.Dispatch<React.SetStateAction<number[]>>,
  restaurant: boolean,
  setRestaurant: React.Dispatch<React.SetStateAction<boolean>>,
  setPage: React.Dispatch<React.SetStateAction<string>>
) => {
  return (
    <div
      key={i}
      className="relative h-[570px] w-[360px] shrink-0 snap-start snap-always"
    >
      {data.hot[i]?.imgFlag == true ? (
        <Image
          src={data.hot[i]?.img || "/Post1/Post.jpg"}
          alt={data.hot[i]?.title || ""}
          fill={true}
          style={{ objectFit: "cover" }}
        />
      ) : (
        <video
          autoPlay
          muted
          loop
          playsInline
          src={data.hot[i]?.img || "/Post2/Post.mp4"}
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
                  src={data.hot[i]?.accountPic || "/Cindy.jpg"}
                  fill={true}
                  style={{ objectFit: "cover" }}
                  alt="Reviewer"
                />
              </div>
              <div className="ml-2.5 flex shrink-0 flex-col text-white">
                <div className="text-[16px] font-extrabold">
                  {data.hot[i]?.accountName}
                </div>
                <div className="text-[12px] font-bold opacity-70">
                  {data.hot[i]?.followingFlag == true ? "Following" : "Follow"}
                </div>
              </div>
            </div>
            <div className="mb-[64px] pr-2 text-xs font-semibold text-white">
              {data.hot[i]?.description}
            </div>
          </div>
          <div
            className="flex h-full w-6 shrink-0 cursor-pointer flex-col items-center justify-end"
            style={{
              filter: "drop-shadow(0px 2px 14px rgba(0, 0, 0, 0.6))",
            }}
            onClick={(e) => {
              e.stopPropagation();
              setComing((p) => (p[0] === 0 ? [e.clientX, e.clientY] : [0, 0]));
            }}
          >
            <ReviewLike className="mb-2 w-[26px]" />
            <div className="mb-5 text-xs font-medium text-white">
              {(data.hot[i]?.likesNum || 255) > 1000
                ? ((data.hot[i]?.likesNum || 255) / 1000).toFixed(1) + "k"
                : data.hot[i]?.likesNum}
            </div>
            <ReviewSave className="mb-2 w-[22px]" />
            <div className="mb-5 text-xs font-medium text-white">
              {(data.hot[i]?.commentNum || 255) > 1000
                ? ((data.hot[i]?.commentNum || 255) / 1000).toFixed(1) + "k"
                : data.hot[i]?.commentNum}
            </div>
            <ReviewComment className="mb-2 w-6" />
            <div className="mb-5 text-xs font-medium text-white">
              {(data.hot[i]?.collectionNum || 255) > 1000
                ? ((data.hot[i]?.collectionNum || 255) / 1000).toFixed(1) + "k"
                : data.hot[i]?.collectionNum}
            </div>
            <ReviewShare className="mb-3 w-6" />
          </div>
        </div>
      </div>
      <div
        className="absolute z-[500] flex cursor-pointer flex-row items-center bg-white px-4 duration-[240ms]"
        style={{
          filter: "drop-shadow(0px 2px 14px rgba(0, 0, 0, 0.3))",
          width: restaurant ? "360px" : "270px",
          left: restaurant ? "0px" : "16px",
          bottom: restaurant ? "0px" : "24px",
          borderRadius: restaurant ? "20px" : "24px",
          borderBottomLeftRadius: restaurant ? "0px" : "24px",
          borderBottomRightRadius: restaurant ? "0px" : "24px",
          height: restaurant ? "580px" : "48px",
        }}
        onClick={(e) => {
          e.stopPropagation();
          setRestaurant((p) => !p);
          //   console.log(page.substring(0, page.length - 11));
          setPage((p) =>
            /Restaurant/.test(p)
              ? p.substring(0, p.length - 11)
              : `Review ${i} Restaurant`
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
            {data.hot[i]?.restaurantName}
          </div>
          <div className="flex flex-row text-[10px] font-bold opacity-50">
            <div>{data.hot[i]?.category}</div>
            <div className="mx-1">•</div>
            <div>{data.hot[i]?.distance}</div>
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
            {data.hot[i]?.reviewRank}
          </div>
          <div className="ml-1 text-sm text-main">
            ({data.hot[i]?.reviewNum})
          </div>
        </div>
      </div>
    </div>
  );
};
