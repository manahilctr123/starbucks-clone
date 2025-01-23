"use client";

import { useQuery } from "convex/react";
import { api } from "../../../convex/_generated/api";
import Link from "next/link";
import { Button } from "@/components/ui/button";
import { ChevronDown } from "lucide-react";

export default function MenuPage() {
  const categories = useQuery(api.categories.get);
  return (
    <>
      {/* Subnavigation */}
      <div
        className="w-full bg-[#F9F9F9] h-[53.5px] relative z-40 border-b border-[#dbd9d7]"
        style={{
          borderBottom: "1px solid #dbd9d7",
          position: "relative",
          width: "100%",
          zIndex: "inherit",
        }}
      >
        <div className="max-w-[1440px] mx-auto px-4 h-full">
          <nav className="flex items-center gap-8 h-full ml-[93px]">
            <Link
              href="/menu"
              className="text-[13px] text-[#000000DE] tracking-[.02em] relative after:absolute after:bottom-[-4px] after:left-0 after:w-full after:h-[1px] after:bg-[#202020]"
            >
              Menu
            </Link>
            <Link
              href="#"
              className="text-[13px] text-[#000000DE] tracking-[.02em]"
            >
              Featured
            </Link>
            <Link
              href="#"
              className="text-[13px] text-[#000000DE] tracking-[.02em]"
            >
              Previous
            </Link>
            <Link
              href="#"
              className="text-[13px] text-[#000000DE] tracking-[.02em]"
            >
              Favorites
            </Link>
          </nav>
        </div>
      </div>

      {/* Main Content */}
      <div className="max-w-[1440px] mx-auto px-4 py-8">
        {/* Left Column Menu */}
        <div className="w-[150px] ml-[90px] mt-[8px]">
          {categories?.map((category) => (
            <div key={category._id} className="mb-8">
              {/* Main category heading (Drinks) */}
              <h2 className="text-[19px] text-[#000000DE] font-medium mb-4">
                {category.name}
              </h2>

              {/* Subcategories */}
              <div className="flex flex-col space-y-4">
                {category.children.map((child) => (
                  <div
                    key={child._id}
                    className="text-[16px] text-[#6B6B6B] hover:text-[#6B6B6B] cursor-pointer tracking-[.01em]"
                  >
                    {child.name}
                  </div>
                ))}
              </div>
            </div>
          ))}
        </div>
      </div>

      {/* Bottom Drawer */}
      <div className="fixed bottom-0 left-0 right-0 h-[94px] bg-[#1E3932] z-50">
        <div className="max-w-[1440px] mx-auto px-[80px] h-full flex items-center justify-center relative">
          <div className="flex flex-col absolute left-[390px] -translate-y-[4px]">
            <div className="w-[240px] h-[104px] flex justify-between items-center">
              <div className="flex flex-col w-full relative after:absolute after:bottom-[-8px] after:left-0 after:w-full after:h-[1px] after:bg-[#627470]">
                <span className="text-[16px] text-[#FFFFFFB3] cursor-pointer">
                  For item availability
                </span>
                <div className="flex justify-between items-center w-full cursor-pointer">
                  <span className="text-[16px] text-white font-medium">
                    Choose a store
                  </span>
                  <ChevronDown className="text-white w-4 h-4 -translate-y-[11px]" />
                </div>
              </div>
            </div>
          </div>
          <Button
            variant="ghost"
            className="hover:bg-transparent p-0 absolute right-[260px]"
          >
            <svg
              xmlns="http://www.w3.org/2000/svg"
              width="16"
              height="16"
              fill="#BBC3C1"
              viewBox="0 0 16 16"
              className="w-8 h-8"
            >
              <path d="M8 1a2.5 2.5 0 0 1 2.5 2.5V4h-5v-.5A2.5 2.5 0 0 1 8 1m3.5 3v-.5a3.5 3.5 0 1 0-7 0V4H1v10a2 2 0 0 0 2 2h10a2 2 0 0 0 2-2V4zM2 5h12v9a1 1 0 0 1-1 1H3a1 1 0 0 1-1-1z" />
            </svg>
          </Button>
        </div>
      </div>
    </>
  );
}
