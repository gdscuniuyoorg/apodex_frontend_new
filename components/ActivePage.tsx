import React from "react";

export default function ActivePage({ page }: { page: string}) {
  return (
    <div className="mt-10 mb-7 flex space-x-1">
      <div
        className={`h-[2px] rounded-sm w-full ${
          page == "page-one" ? "bg-[#0072CE]" : "bg-[#D9D9D9]"
        }`}
      />
      <div
        className={`h-[2px] rounded-sm w-full ${
          page == "page-two" ? "bg-[#0072CE]" : "bg-[#D9D9D9]"
        }`}
      />
      <div
        className={`h-[2px] rounded-sm w-full ${
          page == "page-three" ? "bg-[#0072CE]" : "bg-[#D9D9D9]"
        }`}
      />
    </div>
  );
}
