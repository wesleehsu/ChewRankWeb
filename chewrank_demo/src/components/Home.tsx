import Image from "next/image";
import React, { useRef, useState } from "react";
import { main } from "tailwind.config";
import { HomeLike } from "~/svgs/HomeLike";
import data from "../data";

export const Home: React.FC<{
  setPage: React.Dispatch<React.SetStateAction<string>>;
  setComing: React.Dispatch<React.SetStateAction<number[]>>;
  setSeed: React.Dispatch<React.SetStateAction<number>>;
}> = ({ setPage, setComing, setSeed }) => {
  const currentSort = "";
  const [sort, setSort] = useState("Hot");
  const mainRef = useRef<HTMLDivElement>(null);
  const sortModes = ["Hot", "Following", "New", "Best"];
  const reviewPreview = (e: (typeof data.hot)[0], i: number) => (
    <div
      key={i}
      className="mb-4 flex w-full cursor-pointer flex-col bg-white"
      onClick={() => {
        const img: HTMLElement | null = document.querySelector(
          `#previewImg-${i}`
        );
        if (!img || !img.parentElement || !mainRef.current) return;
        const mp = mainRef.current.getBoundingClientRect();
        const pp = img.parentElement.getBoundingClientRect();

        setTimeout(() => {
          if (img.parentElement) img.parentElement.style.overflow = "visible";
          img.style.transitionDuration = "200ms";
          img.style.position = "absolute";
          img.style.left = `${mp.x - pp.x}px`;
          img.style.top = `${mp.y - pp.y}px`;
          img.style.zIndex = "200";
          img.style.width = "360px";
          img.style.height = "640px";
        }, 1);
        setTimeout(() => {
          setPage("Review" + " " + i.toString());
          setSeed(i)
        }, 50);
        setTimeout(() => {
          if (img.parentElement) img.parentElement.style.overflow = "hidden";
          img.style.transitionDuration = "0ms";
          img.style.position = "absolute";
          img.style.left = "0";
          img.style.top = "0";
          img.style.zIndex = "10";
          img.style.width = "168px";
          img.style.height = `${e.height}px`;
        }, 800);
      }}
    >
      <div
        className="relative h-full w-full shrink-0 overflow-hidden rounded-xl"
        style={{
          height: `${e.height}px`,
        }}
      >
        {e.imgFlag == true ? (
          <Image
            src={e.img}
            alt="e.title"
            fill={true}
            style={{ objectFit: "cover" }}
          />
        ) : (
          <video
            autoPlay
            muted
            loop
            //   webkit-playsinline
            playsInline
            src={e.img}
          />
        )}
        {
          <div
            id={`previewImg-${i}`}
            className="absolute left-0 top-0 h-full w-full ease-in-out"
            style={{
              height: `${e.height}px`,
            }}
          >
            {e.imgFlag == true ? (
              <Image
                src={e.img}
                alt="e.title"
                fill={true}
                style={{ objectFit: "cover" }}
              />
            ) : (
              <video
                autoPlay
                muted
                loop
                //   webkit-playsinline
                playsInline
                src={e.img}
              />
            )}
          </div>
        }
      </div>
      <div className="w-full shrink-0 px-3 pt-2.5 text-[11px] font-semibold">
        {e.title}
      </div>
      <div className="flex w-full shrink-0 flex-row items-center pl-2.5 pr-3.5 pt-1">
        <div className="relative h-[20px] w-[20px] shrink-0 overflow-hidden rounded">
          <Image
            src={e.accountPic}
            alt={e.title}
            fill={true}
            style={{ objectFit: "cover" }}
          />
        </div>
        <div className="ml-2 flex shrink-0 flex-col">
          <div className="text-[10px] font-semibold">{e.accountName}</div>
          {e.followingFlag && (
            <div className="text-[8px] opacity-50">Following</div>
          )}
        </div>
        <div className="flex h-6 w-full flex-row items-center justify-end">
          <HomeLike className="" />
          <div className="ml-1.5 text-[12px] text-main">
            {(e.likesNum || 255) > 1000
              ? ((e.likesNum || 255) / 1000).toFixed(1) + "k"
              : e.likesNum}
          </div>
        </div>
      </div>
    </div>
  );

  return (
    <div ref={mainRef} className="relative">
      <div className="absolute z-[110] h-12 w-full shrink-0 px-6">
        <div className="relative h-full w-full">
          <Image
            src="/status_bar_black.png"
            fill={true}
            alt="status bar"
            style={{ objectFit: "contain" }}
          />
        </div>
      </div>
      <div className="flex h-[720px] w-full flex-col overflow-y-scroll bg-white">
        <div
          className="sticky top-0 z-[100] flex h-20 shrink-0 cursor-pointer flex-row items-center bg-white pl-4 pt-12"
          onClick={(e) => {
            e.stopPropagation();
            setComing((p) => (p[0] === 0 ? [e.clientX, e.clientY] : [0, 0]));
          }}
        >
          <Image
            src="/HomeLocation.png"
            alt="Location"
            width={14}
            height={14}
            className="mt-[1px]"
          />
          <div className="ml-[11px] mr-3 mt-[1px] shrink-0 text-xs font-thin">
            Irvine
          </div>
          <Image
            src="/HomeLocationSelect.png"
            alt="Select Location"
            width={12}
            height={12}
            className="mt-[1px]"
          />
          <div className="ml-4 mr-3 flex h-full w-full flex-row items-center rounded-full border-[0.5px] border-main py-0.5 text-xs font-light">
            <Image
              src="/HomeSearch.png"
              alt="Search"
              width={12}
              height={12}
              className="ml-3 mr-2"
            />
            <div className="text-[10px] font-extralight text-main">
              People, places, reviews, anything
            </div>
          </div>
        </div>
        <div
          className="my-1 flex h-24 w-full shrink-0 cursor-pointer flex-row items-center justify-start overflow-scroll border-b-[0.4px] border-[#ffa88d] bg-white px-3 text-main"
          onClick={(e) => {
            e.stopPropagation();
            setComing((p) => (p[0] === 0 ? [e.clientX, e.clientY] : [0, 0]));
          }}
        >
          <div className="flex shrink-0 cursor-pointer flex-row items-center pr-5">
            <div className="ml-[12px] flex cursor-pointer flex-col items-center">
              <div className="m-[0px] border-[0.4px] border-main">
                <div className="m-[5px] border-[0.4px] border-main">
                  <Image
                    src="/HomeQuickFilter0.png"
                    width={30}
                    height={30}
                    alt="Korean Food"
                    className="m-[5px]"
                  />
                </div>
              </div>
              <div className="mt-2 text-xs font-bold text-main">Get Now!</div>
            </div>
            <div className="ml-[24px] flex cursor-pointer flex-col items-center">
              <Image
                src="/HomeQuickFilter1.png"
                width={56}
                height={56}
                alt="Korean Food"
              />
              <div className="mt-1 text-xs font-bold text-main">Korean</div>
            </div>
            <div className="ml-[24px] flex cursor-pointer flex-col items-center">
              <Image
                src="/HomeQuickFilter3.png"
                width={56}
                height={56}
                alt="Party Vibes"
              />
              <div className="mt-1 text-xs font-bold text-main">
                Party Vibes
              </div>
            </div>
            <div className="ml-[25px] flex shrink-0 cursor-pointer flex-col items-center">
              <Image
                src="/HomeQuickFilter2.png"
                width={56}
                height={56}
                alt="Boba"
              />
              <div className="mt-1 text-xs font-bold text-main">Boba</div>
            </div>
            <div className="ml-[20px] flex shrink-0 cursor-pointer flex-col items-center">
              <Image
                src="/HomeQuickFilter4.png"
                width={56}
                height={56}
                alt="Perfect Date"
                className="brightness-125"
              />
              <div className="mt-1 text-xs font-bold text-main">
                Perfect Date
              </div>
            </div>
          </div>
        </div>
        <div className="sticky top-20 z-[50] flex h-[56px] shrink-0 cursor-pointer flex-row items-center bg-white py-1 pl-[26px]">
          <Image
            src="HomeFilter.png"
            width={22}
            height={22}
            alt="Filter"
            className="pt-0.5"
            onClick={(e) => {
              e.stopPropagation();
              setComing((p) => (p[0] === 0 ? [e.clientX, e.clientY] : [0, 0]));
            }}
          />
          <div className="h-6 w-4 shrink-0 border-r-[0.5px] border-main bg-white" />
          <div className="flex flex-row overflow-scroll pl-4">
            {sortModes.map((e, i) => (
              <div
                key={i}
                className="my-2 mr-3 flex h-8 cursor-pointer flex-row items-center justify-center rounded-full border-[0.5px] border-main px-6 py-0.5 text-sm"
                style={{
                  color: sort === e ? "white" : main,
                  fontWeight: sort === e ? "700" : "400",
                  background: sort === e ? main : "white",
                }}
                onClick={(e_1) => {
                  // e_1.currentTarget.scrollIntoView();
                  setSort(e);
                }}
              >
                {e}
              </div>
            ))}
            <div className="h-1 w-6 shrink-0" />
          </div>
        </div>
        <div className="mx-2 mb-12 flex flex-row items-start justify-center bg-white">
          <div className="mr-1 flex w-full flex-col">
            {data.hot.map(
              (e, i) => i % 2 === 0 && e.feature == sort && reviewPreview(e, i)
            )}
          </div>
          <div className="ml-1 flex w-full flex-col">
            {data.hot.map(
              (e, i) => i % 2 === 1 && e.feature == sort && reviewPreview(e, i)
            )}
          </div>
        </div>
        <div className="mb-48 self-center text-sm text-main opacity-60">
          More will be coming very soon!
        </div>
      </div>
    </div>
  );
};
