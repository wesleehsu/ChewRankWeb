import Image from "next/image";
import React, { useRef, useState } from "react";
import seedrandom from "seedrandom";
import { RestaurantExpand } from "~/svgs/RestaurantExpand";
import { RestaurantSave } from "~/svgs/RestaurantSave";
import { RestaurantShare } from "~/svgs/RestaurantShare";
import data from "../data";

export const Restaurant: React.FC<{
  page: string;
  setPage: React.Dispatch<React.SetStateAction<string>>;
  setComing: React.Dispatch<React.SetStateAction<number[]>>;
}> = ({ page, setPage, setComing }) => {
  const tempStr = page.split(" ")[1];
  const restaurantData = data.hot[parseInt(String(tempStr))];
  // console.log(restaurantData);
  const mainRef = useRef<HTMLDivElement>(null);
  const tabs = ["Overview", "Reviews", "Menu", "Official", "Similar Places"];
  const [tab, setTab] = useState("Overview");
  const [tabUI, setTabUI] = useState([92.3, 24]);
  const labels = [
    "Vegetarian-Friendly",
    "Vegetarian",
    "Child-Friendly",
    "Korean",
    "BBQ",
    "Boba",
    "Steak House",
    "Chinese",
    "Party Vibe",
    "High End",
    "Brunch",
    "Free Parking",
    "Eco-Friendly",
    "Pet-Friendly",
  ];

  return (
    <div
      ref={mainRef}
      className="absolute z-[600] flex h-[600px] w-[360px] flex-col overflow-scroll bg-white"
      style={{
        top: /Restaurant/.test(page) ? "84px" : "700px",
        pointerEvents: /Restaurant/.test(page) ? "auto" : "none",
        opacity: /Restaurant/.test(page) ? 1 : 0.5,
        transitionDelay: /Restaurant/.test(page) ? "500ms" : "0ms",
      }}
    >
      <div className="flex w-full flex-col">
        <div className="flex flex-row">
          <div className="ml-6 flex w-full flex-col">
            <div className="pb-1 text-xl font-extrabold">
              {restaurantData?.restaurantName}
            </div>
            <div className="flex flex-row items-center pb-1">
              <div className="text-[11px] font-semibold opacity-60">
                {restaurantData?.category}
              </div>
              <div className="px-2 pb-[1px] text-[8px] font-semibold opacity-60">
                •
              </div>
              <div className="text-[11px] font-semibold opacity-60">
                {restaurantData?.distance}
              </div>
              <div className="px-1 text-[11px] font-semibold opacity-60">
                mil
              </div>
            </div>
            <div
              className="flex cursor-pointer flex-row items-center pb-1"
              onClick={(e) => {
                e.stopPropagation();
                setComing((p) =>
                  p[0] === 0 ? [e.clientX, e.clientY] : [0, 0]
                );
              }}
            >
              <div className="text-[13px] font-bold text-lime-500">Open</div>
              <div className="px-2 text-[8px] font-semibold opacity-60">•</div>
              <div className="text-[13px] font-light opacity-60">
                Closes {restaurantData?.closeTime}
              </div>
              <RestaurantExpand className="mb-[1px] ml-1.5 w-2" />
            </div>
            <div className="flex h-6 flex-row items-center pt-1">
              <Image
                src="/RestaurantStar.png"
                width={18}
                height={18}
                alt="Rating"
                className="mb-[3px]"
              />
              <div className="ml-2 text-xs font-extrabold text-main">
                {restaurantData?.reviewRank}
              </div>
              <div className="ml-1 text-xs font-extralight text-main">
                ({restaurantData?.reviewNum})
              </div>
              <div
                className="ml-3 flex h-5 cursor-pointer flex-row items-center justify-center rounded-full border-[0.5px] border-main bg-main px-4 py-0.5 text-xs text-white"
                onClick={(e) => {
                  e.stopPropagation();
                  setComing((p) =>
                    p[0] === 0 ? [e.clientX, e.clientY] : [0, 0]
                  );
                }}
              >
                Rate
              </div>
            </div>
          </div>
          <div className="mr-6 flex shrink-0 cursor-pointer flex-col items-center self-center">
            <Image
              src="/RestaurantReview.png"
              width={48}
              height={48}
              alt="Review"
              onClick={(e) => {
                e.stopPropagation();
                setComing((p) =>
                  p[0] === 0 ? [e.clientX, e.clientY] : [0, 0]
                );
              }}
            />
            {/* <div className="mt-1 pb-4 text-[80px] leading-8 text-main">+</div> */}
            {/* <div className="mt-1 px-2 py-1 text-xs text-main">Review</div> */}
          </div>
          <div
            className="mr-6 flex w-8 shrink-0 cursor-pointer flex-col items-center"
            onClick={(e) => {
              e.stopPropagation();
              setComing((p) => (p[0] === 0 ? [e.clientX, e.clientY] : [0, 0]));
            }}
          >
            <RestaurantSave className="mb-0.5 w-5" />
            <div className="mb-3 text-[10px] font-medium text-main">Save</div>
            <RestaurantShare className="mb-0.5 w-5" />
            <div className="mb-3 mt-[-1px] text-[10px] font-medium text-main">
              Share
            </div>
          </div>
        </div>
        {/* <div className="h-20"></div> */}
        <div className="overflow-scroll">
          <div className="align-center relative flex h-11 w-[480px] flex-row">
            <div
              className="absolute top-[2px] h-10 shrink-0 border-b-4 border-main duration-100 ease-in-out"
              style={{
                width: `${tabUI[0] || 0}px`,
                left: `${tabUI[1] || 0}px`,
              }}
            />
            <div className="h-10 w-6 shrink-0 border-b-[0.4px] border-[#ffa88d]" />
            {tabs.map((e, i) => (
              <div
                key={i}
                className="h-10 shrink-0 cursor-pointer justify-self-center border-b-[0.4px] border-[#ffa88d] px-3 py-2 text-sm text-main"
                style={
                  {
                    // fontWeight: tab === e ? "900" : "200",
                    // opacity: tab === e ? 1 : 0.6
                  }
                }
                onClick={(e_1) => {
                  if (i !== 0) {
                    e_1.stopPropagation();
                    setComing((p) =>
                      p[0] === 0 ? [e_1.clientX, e_1.clientY] : [0, 0]
                    );
                  }
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
            <div className="h-10 w-32 shrink-0 border-b-[0.4px] border-[#ffa88d]" />
          </div>
        </div>
        <div className="mx-6 my-6">
          <div className="flex flex-col">
            <div
              className="mb-5 flex w-full cursor-pointer flex-row justify-around"
              onClick={(e) => {
                e.stopPropagation();
                setComing((p) =>
                  p[0] === 0 ? [e.clientX, e.clientY] : [0, 0]
                );
              }}
            >
              <div className="relative flex w-14 shrink-0 cursor-pointer flex-col items-center">
                <Image
                  src="/RestaurantHours.png"
                  width={24}
                  height={24}
                  alt="Hours"
                  className="my-1 shrink-0"
                />
                <div className="py-1 text-sm text-main">Hours</div>
              </div>
              <div className="h-8 border-l-[0.4px] border-[#ffa88d]" />
              <div className="relative flex w-14 shrink-0 cursor-pointer flex-col items-center">
                <Image
                  src="/RestaurantCall.png"
                  width={24}
                  height={24}
                  alt="Call"
                  className="mb-1 shrink-0"
                />
                <div className="py-1 text-sm text-main">Call</div>
              </div>
              <div className="h-8 border-l-[0.4px] border-[#ffa88d]" />
              <div className="relative flex w-14 shrink-0 cursor-pointer flex-col items-center">
                <Image
                  src="/RestaurantLinks.png"
                  width={24}
                  height={24}
                  alt="Links"
                  className="mb-1 shrink-0"
                />
                <div className="py-1 text-sm text-main">Links</div>
              </div>
            </div>
            <div
              className="flex w-full cursor-pointer flex-row justify-around"
              onClick={(e) => {
                e.stopPropagation();
                setComing((p) =>
                  p[0] === 0 ? [e.clientX, e.clientY] : [0, 0]
                );
              }}
            >
              <div className="relative flex w-14 shrink-0 cursor-pointer flex-col items-center">
                <Image
                  src="/RestaurantReserve.png"
                  width={24}
                  height={24}
                  alt="Reserve"
                  className="mb-1 shrink-0"
                />
                <div className="py-1 text-sm text-main">Reserve</div>
              </div>
              <div className="h-8 border-l-[0.4px] border-[#ffa88d]" />
              <div className="relative flex w-14 shrink-0 cursor-pointer flex-col items-center">
                <Image
                  src="/RestaurantOrder.png"
                  width={24}
                  height={24}
                  alt="Order"
                  className="mb-1 shrink-0"
                />
                <div className="py-1 text-sm text-main">Order</div>
              </div>
              <div className="h-8 border-l-[0.4px] border-[#ffa88d]" />
              <div className="relative flex w-14 shrink-0 cursor-pointer flex-col items-center">
                <Image
                  src="/RestaurantDelivery.png"
                  width={24}
                  height={24}
                  alt="Delivery"
                  className="mb-1 shrink-0"
                />
                <div className="py-1 text-sm text-main">Delivery</div>
              </div>
            </div>
            <div className="mt-5 flex flex-col">
              <div className="w-[60%] flex-col self-center border-t-[0.4px] border-[#ffa88d] pt-6"></div>
              {/* <div className="mt-6 flex flex-col border-t-[0.4px] border-[#ffa88d] pt-6"> */}
              <div className="flex flex-row items-baseline">
                <Image
                  src="/RestaurantDrive.png"
                  alt="Drive"
                  width={20}
                  height={20}
                  className="mr-2 self-center"
                />
                <div className="text-[16px] font-bold">9 minutes drive</div>
                <div className="mx-3 text-[14px] opacity-50">—</div>
                <div className="text-[14px] opacity-50">5.5 mil away</div>
              </div>
              <div className="mb-4 text-[12px] opacity-50">
                Address Address Address Address Address Address
              </div>
              <div className="relative mb-8 h-48 cursor-pointer overflow-hidden rounded-lg">
                <Image
                  src="/RestaurantMap.png"
                  alt="Map"
                  fill={true}
                  style={{ objectFit: "cover" }}
                  onClick={(e) => {
                    e.stopPropagation();
                    setComing((p) =>
                      p[0] === 0 ? [e.clientX, e.clientY] : [0, 0]
                    );
                  }}
                />
              </div>
            </div>
            <div className="mb-6 w-[60%] flex-col self-center border-t-[0.4px] border-[#ffa88d]"></div>
            <div className="mb-8 flex w-full flex-row flex-wrap">
              {labels
                .filter((e) => {
                  // eslint-disable-next-line @typescript-eslint/no-unsafe-assignment, @typescript-eslint/no-unsafe-call
                  const r = seedrandom(
                    `${restaurantData?.restaurantName || ""}${e}`
                  );
                  // eslint-disable-next-line @typescript-eslint/no-unsafe-call
                  return r() > 0.5;
                })
                .map((e, i) => (
                  <div
                    key={i}
                    className="my-1.5 mr-3 flex cursor-pointer flex-row items-center justify-center break-normal rounded-full border-[0.5px] border-main bg-main px-5 py-1 text-[13px] text-white"
                    onClick={(e) => {
                      e.stopPropagation();
                      setComing((p) =>
                        p[0] === 0 ? [e.clientX, e.clientY] : [0, 0]
                      );
                    }}
                  >
                    {e}
                  </div>
                ))}
            </div>
            <div className="mb-16 w-[60%] flex-col self-center border-t-[0.4px] border-[#ffa88d] pt-6"></div>
          </div>
        </div>
      </div>
    </div>
  );
};
