import Image from "next/image"
import React, { useRef, useState } from "react"
import { ReviewBack } from "~/svgs/ReviewBack"
import { ReviewComment } from "~/svgs/ReviewComment"
import { ReviewLike } from "~/svgs/ReviewLike"
import { ReviewSave } from "~/svgs/ReviewSave"
import { ReviewShare } from "~/svgs/ReviewShare"

export const Restaurant: React.FC<{
  page: string;
  setPage: React.Dispatch<React.SetStateAction<string>>;
}> = ({ page, setPage }) => {
  const mainRef = useRef<HTMLDivElement>(null);

  return (
    <div
      ref={mainRef}
      className="absolute z-[600] flex h-[640px] w-[360px] flex-col overflow-scroll bg-white duration-[300ms]"
      style={{
        top: /Restaurant/.test(page) ? "80px" : "700px",
        pointerEvents: /Restaurant/.test(page) ? "auto" : "none",
        opacity: /Restaurant/.test(page) ? 1 : 0.5,
      }}
    >
      <div className="relative h-[640px] w-[360px] shrink-0">
        
      </div>
    </div>
  );
};
