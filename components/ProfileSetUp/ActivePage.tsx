import React from "react";

export default function ActivePage({ page }: { page: number }) {
  return (
    <div className="mt-10 mb-7 flex">
      <div
        className={`h-[2px] rounded-sm w-full ${
          page >= 1 ? "bg-[#0072CE]" : "bg-[#D9D9D9]"
        }`}
      />
      <div
        className={`h-[2px] rounded-sm w-full ${
          page >= 2 ? "bg-[#0072CE]" : "bg-[#D9D9D9]"
        }`}
      />
      <div
        className={`h-[2px] rounded-sm w-full ${
          page >= 3 ? "bg-[#0072CE]" : "bg-[#D9D9D9]"
        }`}
      />
    </div>
  );
}
