import Image from "next/image"
import React, { useRef, useState } from "react"
import { main } from "tailwind.config"
import { HomeLike } from "~/svgs/HomeLike"
import data from "../data"

export const Home: React.FC<{
  setPage: React.Dispatch<React.SetStateAction<string>>;
}> = ({ setPage }) => {
  const [sort, setSort] = useState("Hot");
  const mainRef = useRef<HTMLDivElement>(null);
  const sortModes = ["Hot", "New", "Following", "Best"];
  const reviewPreview = (e: (typeof data.hot)[0], i: number) => (
    <div
      key={i}
      className="mb-6 flex w-full cursor-pointer flex-col bg-white"
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
        }, 100);
        setTimeout(() => {
          if (img.parentElement) img.parentElement.style.overflow = "clip";
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
        className="relative h-full w-full shrink-0 overflow-clip rounded-xl"
        style={{
          height: `${e.height}px`,
        }}
      >
        <Image
          src={e.img}
          alt="e.title"
          fill={true}
          style={{ objectFit: "cover" }}
        />
        <div
          id={`previewImg-${i}`}
          className="absolute left-0 top-0 h-full w-full ease-in-out"
        >
          <Image
            src={e.img}
            alt="e.title"
            fill={true}
            style={{ objectFit: "cover" }}
          />
        </div>
      </div>
      <div className="w-full shrink-0 px-3 pt-2.5 text-xs font-semibold">
        {e.title}
      </div>
      <div className="flex w-full shrink-0 flex-row items-center pl-2.5 pr-3.5 pt-2">
        <div className="relative h-[22px] w-[22px] shrink-0 overflow-clip rounded">
          <Image
            src="/Cindy.jpg"
            alt="e.title"
            fill={true}
            style={{ objectFit: "cover" }}
          />
        </div>
        <div className="ml-1.5 flex shrink-0 flex-col">
          <div className="text-[10px] font-semibold">{e.accountName}</div>
          <div className="text-[6px] opacity-50">{e.followingFlag? "Following" : "Follow"}</div>
        </div>
        <div className="flex h-6 w-full flex-row items-center justify-end">
          <HomeLike className="" />
          <div className="ml-1.5 text-[12px] text-main">{e.likesNum}</div>
        </div>
      </div>
    </div>
  );

  return (
    <div ref={mainRef} className="relative">
      <div className="absolute z-[120] h-12 w-full shrink-0 px-6">
        <div className="relative h-full w-full">
          <Image
            src="/status_bar_black.png"
            fill={true}
            alt="status bar"
            style={{ objectFit: "contain" }}
          />
        </div>
      </div>
      <div className="flex h-[720px] w-full flex-col overflow-scroll bg-white">
        <div className="sticky top-0 z-[100] flex h-20 shrink-0 flex-row items-center bg-white pl-4 pt-12">
          <Image
            src="/HomeLocation.svg"
            alt="Location"
            width={14}
            height={14}
            className="mt-[1px]"
          />
          <div className="ml-[11px] mr-3 mt-[1px] shrink-0 text-xs font-thin">
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
              className="ml-3 mr-2"
            />
            <div className="text-[10px] font-extralight text-main">
              People, places, reviews, anything
            </div>
          </div>
        </div>
        <div className="mx-2.5 flex h-24 shrink-0 flex-row items-center justify-center border-b-[0.4px] border-[#ffa88d] bg-white text-main">
          quick categories
        </div>
        <div className="sticky top-20 z-[50] flex h-16 shrink-0 flex-row items-center bg-white py-4 pl-[18px]">
          <Image
            src="HomeFilter.svg"
            width={22}
            height={22}
            alt="Filter"
            className="pt-0.5"
          />
          <div className="h-6 w-4 shrink-0 border-r-[0.5px] border-main bg-white" />
          <div className="flex flex-row overflow-scroll pl-3">
            {sortModes.map((e, i) => (
              <div
                key={i}
                className="mr-2.5 flex h-8 cursor-pointer flex-row items-center justify-center rounded-full border-[0.5px] border-main px-6 py-0.5 text-sm"
                style={{
                  color: sort === e ? "white" : main,
                  fontWeight: sort === e ? "700" : "400",
                  background: sort === e ? main : "white",
                }}
                onClick={() => {
                  setSort(e);
                }}
              >
                {e}
              </div>
            ))}
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
    </div>
  );
};
