"use client";

import { SignInButton, SignUpButton, UserButton } from "@clerk/nextjs";
import Link from "next/link";
import { usePathname } from "next/navigation";
import { Authenticated, Unauthenticated, AuthLoading } from "convex/react";
import Image from "next/image";

function Header() {
  const pathname = usePathname();

  return (
    <header
      className={`
    w-full bg-white z-50 relative
    shadow-[0_1px_3px_rgba(0,0,0,.1),0_2px_2px_rgba(0,0,0,.06),0_0_2px_rgba(0,0,0,.07)]
  `}
    >
      <nav className="mx-auto flex h-[82px] sm:h-[95px] max-w-[1440px] items-center justify-between px-6">
        {/* Left section - Logo */}
        <div className="flex items-center gap-8">
          <Link href="/" className="flex items-center">
            <div className="w-[45px] h-[45px] sm:w-[51px] sm:h-[51px]">
              <Image
                src="/starbuckslogo.png"
                alt="Starbucks"
                width={49}
                height={49}
                className="w-full h-full"
                priority
              />
            </div>
          </Link>
          {/* Menu items - Hidden on mobile */}
          <ul className="hidden sm:flex gap-8">
            <li>
              <Link
                href="/menu"
                className={`text-[13px] font-extrabold tracking-[.1em] text-black hover:text-[#00754a] relative
                  ${
                    pathname === "/menu"
                      ? "after:absolute after:bottom-[-39px] after:left-[-2px] after:w-full after:h-[6px] after:bg-[#00754a]"
                      : ""
                  }`}
              >
                MENU
              </Link>
            </li>
            <li>
              <Link
                href="#"
                className="text-[13px] font-extrabold tracking-[.1em] text-black hover:text-[#00754a]"
              >
                REWARDS
              </Link>
            </li>
            <li>
              <Link
                href="#"
                className="text-[13px] font-extrabold tracking-[.1em] text-black hover:text-[#00754a]"
              >
                GIFT CARDS
              </Link>
            </li>
          </ul>
        </div>

        {/* Right section - Hidden on mobile */}
        <div className="hidden sm:flex items-center gap-8">
          <div className="flex items-center gap-2">
            <i className="fa-solid fa-location-dot"></i>
            <Link
              href="#"
              className="text-[14px] font-medium text-black hover:text-[#00754a]"
            >
              Find a store
            </Link>
          </div>
          <div className="flex items-center gap-4">
            <Unauthenticated>
              <SignInButton mode="modal">
                <button className="rounded-[30px] border border-black px-4 py-1.5 text-[13px] font-semibold text-black transition-all hover:bg-[#f1f1f1]">
                  Sign in
                </button>
              </SignInButton>
              <SignUpButton mode="modal">
                <button className="rounded-[30px] bg-black px-4 py-1.5 text-[13px] font-semibold text-white transition-all hover:bg-[#333]">
                  Join now
                </button>
              </SignUpButton>
            </Unauthenticated>
            <Authenticated>
              <UserButton />
            </Authenticated>
          </div>
        </div>

        {/* Mobile Menu Icon - Shown only on mobile */}
        <button className="sm:hidden text-black">
          <svg
            width="24"
            height="24"
            viewBox="0 0 24 24"
            fill="none"
            stroke="currentColor"
            strokeWidth="2"
          >
            <path d="M4 6h16M4 12h16M4 18h16" />
          </svg>
        </button>
      </nav>
    </header>
  );
}

export default Header;
