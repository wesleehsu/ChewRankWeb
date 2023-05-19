import Image from "next/image";
import React, { useRef, useState } from "react";
import { main } from "tailwind.config";
import { RestaurantExpand } from "~/svgs/RestaurantExpand";
import { RestaurantSave } from "~/svgs/RestaurantSave";
import { RestaurantShare } from "~/svgs/RestaurantShare";

export const Restaurant: React.FC<{
  page: string;
  setPage: React.Dispatch<React.SetStateAction<string>>;
}> = ({ page, setPage }) => {
  const mainRef = useRef<HTMLDivElement>(null);
  const tabs = ["Overview", "Reviews", "Menu", "Official", "Similar Places"];
  const [tab, setTab] = useState("Overview");
  const [tabUI, setTabUI] = useState([92.3, 24]);

  return (
    <div
      ref={mainRef}
      className="absolute z-[600] flex h-[640px] w-[360px] flex-col overflow-scroll bg-white"
      style={{
        top: /Restaurant/.test(page) ? "84px" : "700px",
        pointerEvents: /Restaurant/.test(page) ? "auto" : "none",
        opacity: /Restaurant/.test(page) ? 1 : 0.5,
        transitionDelay: /Restaurant/.test(page) ? "700ms" : "0ms",
      }}
    >
      <div className="flex h-[640px] w-[360px] flex-col">
        <div className="flex flex-row">
          <div className="ml-6 flex w-full flex-col">
            <div className="pb-1 text-xl font-extrabold">Restaurant Name</div>
            <div className="flex flex-row items-center pb-1">
              <div className="text-[11px] font-semibold opacity-60">
                Cafe & BBQ
              </div>
              <div className="px-2 pb-[1px] text-[8px] font-semibold opacity-60">
                •
              </div>
              <div className="text-[11px] font-semibold opacity-60">8.8</div>
              <div className="px-1 text-[11px] font-semibold opacity-60">
                mil
              </div>
            </div>
            <div className="flex flex-row items-center pb-1">
              <div className="text-[13px] font-bold text-lime-500">Open</div>
              <div className="px-2 text-[8px] font-semibold opacity-60">•</div>
              <div className="text-[13px] font-light opacity-60">
                Closes 12 AM
              </div>
              <RestaurantExpand className="mb-[1px] ml-1.5 w-2" />
            </div>
            <div className="flex h-6 flex-row items-center pt-1">
              <Image
                src="/RestaurantStar.svg"
                width={18}
                height={18}
                alt="Rating"
                className="mb-[3px]"
              />
              <div className="ml-2 text-xs font-extrabold text-main">4.3</div>
              <div className="ml-1 text-xs font-extralight text-main">
                (677)
              </div>
              <div className="ml-3 flex h-5 cursor-pointer flex-row items-center justify-center rounded-full border-[0.5px] border-main bg-main px-4 py-0.5 text-xs text-white">
                Rate
              </div>
            </div>
          </div>
          <div className="mr-6 flex w-8 shrink-0 flex-col items-center">
            <RestaurantSave className="mb-1 w-5" />
            <div className="mb-3 text-[10px] font-medium text-main">Save</div>
            <RestaurantShare className="mb-1 w-5" />
            <div className="mb-3 mt-[-8px] text-[10px] font-medium text-main">
              Share
            </div>
          </div>
        </div>
        <div className="h-24">discount wow</div>
        <div className="overflow-scroll">
          <div className="relative flex flex-row">
            <div
              className="absolute h-10 shrink-0 border-b-4 border-main duration-100 ease-in-out"
              style={{
                width: `${tabUI[0] || 0}px`,
                left: `${tabUI[1] || 0}px`,
              }}
            />
            <div className="h-10 w-6 shrink-0 border-b-4 border-[#FFF6F3]" />
            {tabs.map((e, i) => (
              <div
                key={i}
                className="h-10 cursor-pointer border-b-4 border-[#FFF6F3] px-4 py-2 text-sm text-main"
                style={{
                  fontWeight: tab === e ? "800" : "300",
                }}
                onClick={(e_1) => {
                  setTab(e);
                  if (
                    !mainRef.current ||
                    !e_1.currentTarget.parentElement ||
                    !e_1.currentTarget.parentElement.parentElement
                  )
                    return;
                  setTabUI([
                    e_1.currentTarget.getBoundingClientRect().width,
                    e_1.currentTarget.getBoundingClientRect().x -
                      mainRef.current.getBoundingClientRect().x +
                      e_1.currentTarget.parentElement.parentElement.scrollLeft,
                  ]);
                }}
              >
                {e}
              </div>
            ))}
          </div>
        </div>
        <div className="m-6 border">
          <div className="flex flex-row">
            <div className="flex flex-col"></div>
          </div>
        </div>
      </div>
    </div>
  );
};
