"use client";

import { motion } from "framer-motion";
import Link from "next/link";
import Image from "next/image";
import FacebookIcon from "../components/FacebookIcon";
import InstagramIcon from "../components/InstagramIcon";
import YoutubeIcon from "../components/YoutubeIcon";
import LinkedinIcon from "../components/LinkedinIcon";
import TwitchIcon from "../components/TwitchIcon";
import DribbbleIcon from "../components/DribbbleIcon";

export default function Home() {
  return (
    <>
      <header
        className={`
          w-full bg-white
          shadow-[0_1px_3px_rgba(0,0,0,.1),0_2px_2px_rgba(0,0,0,.06),0_0_2px_rgba(0,0,0,.07)]
        `}
      >
        <nav className="mx-auto flex h-[72px] sm:h-[95px] max-w-[1440px] items-center justify-between px-6">
          {/* Left section - Logo */}
          <div className="flex items-center gap-8">
            <Link href="/" className="flex items-center">
              <img
                src="/starbuckslogo.png"
                alt="Starbucks"
                className="h-[40px] w-[40px]"
              />
            </Link>
            {/* Menu items - Hidden on mobile */}
            <ul className="hidden sm:flex gap-8">
              <li>
                <Link
                  href="/menu"
                  className="text-[13px] font-extrabold tracking-[.01em] text-black hover:text-[#00754a]"
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
              <Link
                href="#"
                className="rounded-[30px] border border-black px-4 py-1.5 text-[13px] font-semibold text-black transition-all hover:bg-[#f1f1f1]"
              >
                Sign in
              </Link>
              <Link
                href="#"
                className="rounded-[30px] bg-black px-4 py-1.5 text-[13px] font-semibold text-white transition-all hover:bg-[#333]"
              >
                Join now
              </Link>
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
      <main>
        {/* First hero section */}
        <section className="bg-[#CEE6B5] mx-0 sm:mx-4 md:mx-2 mt-8">
          <div className="mx-auto max-w-[1440px]">
            <div className="flex flex-col md:flex-row">
              {/* Left side - Image container */}
              <div className="w-full md:w-1/2 h-[325.52px] md:h-full">
                <div className="relative h-full">
                  <img
                    src="/starbucksimg1.jpg"
                    alt="A trio of drinks in clear glasses"
                    className="w-full h-full object-cover"
                  />
                </div>
              </div>

              {/* Right side - Content container */}
              <div className="w-full md:w-1/2 flex items-center justify-center bg-[#CEE6B5] py-8 md:py-0">
                <div className="max-w-[343px] md:max-w-[487.91px] text-center">
                  <h1 className="font-['SoDoSans','Helvetica_Neue',Helvetica,Arial,sans-serif] text-[28px] md:text-[50px] font-[500] text-[#1D3C34] mb-8 leading-[1.1] whitespace-nowrap tracking-[.08em]">
                    The best of winter
                  </h1>
                  <p className="w-[343px] h-[165px] text-[22px] md:text-[24px] text-center leading-[1.3] text-[#1e3932] mb-8 tracking-[.05em] flex items-center">
                    A new winter menu is here, featuring new <br />
                    Cortado alongside Pistachio beverages and <br />
                    Matcha Latte—now customized to your <br />
                    perfect level of sweetness.
                  </p>
                  <a
                    href="#"
                    className="inline-block rounded-[50px] border border-[#1e3932] 
                      bg-transparent px-4 py-[7px] text-[14px] font-medium 
                      text-[#1e3932] transition-all duration-200
                      hover:bg-[rgba(30,57,50,0.1)]"
                  >
                    Add to order
                  </a>
                </div>
              </div>
            </div>
          </div>
        </section>

        {/* Second hero section */}
        <section className="bg-[#1e3932] mx-0 sm:mx-4 md:mx-2 mt-8 md:mt-8">
          <div className="mx-auto max-w-[1440px]">
            <div className="flex flex-col md:flex-row">
              {/* Image container - First on mobile */}
              <div className="w-full md:w-1/2 h-[325.52px] md:h-full">
                <div className="relative h-full">
                  <img
                    src="/st2img.jpg"
                    alt="Ethiopia Single-Origin Coffee"
                    className="w-full h-full object-cover"
                  />
                </div>
              </div>

              {/* Content container - Second on mobile */}
              <div className="w-full md:w-1/2 flex items-center justify-center bg-[#CEE6B5] py-8 md:py-0">
                <div className="max-w-[343px] md:max-w-[487.91px] text-center">
                  <div className="w-[327.04px] h-[70.09px] md:w-auto md:h-auto flex items-center justify-center">
                    <h1 className="font-['SoDoSans','Helvetica_Neue',Helvetica,Arial,sans-serif] text-[28px] md:text-[50px] font-[500] text-[#1D3C34] mb-4 leading-[1.2] tracking-[.08em] text-center">
                      From the
                      <br />
                      birthplace of coffee
                    </h1>
                  </div>
                  <p className="w-[343px] h-[165px] text-[22px] md:text-[24px] text-center leading-[1.3] text-[#1D3C34] mb-4 tracking-[.05em] flex items-center">
                    With distinctive floral, tangerine and lemon <br />
                    balm notes, Single-Origin Ethiopia is a <br />
                    unique global favorite.
                  </p>
                  <a
                    href="#"
                    className="inline-block rounded-[50px] border border-[#1E3932] 
                      bg-transparent px-4 py-[7px] text-[14px] font-medium 
                      text-[#1E3932] transition-all duration-200
                      hover:bg-[rgba(0,0,0,0.06)]"
                  >
                    Add to order
                  </a>
                </div>
              </div>
            </div>
          </div>
        </section>

        {/* Third Hero Section */}
        <section className="flex flex-col md:flex-row mt-8 md:mt-8">
          {/* Left Image Container */}
          <div className="flex-1">
            <Image
              src="/st3img.webp"
              alt="Starbucks Rewards"
              width={800}
              height={600}
              className="w-full h-full object-cover"
            />
          </div>

          {/* Right Text Container */}
          <div className="flex-1 bg-[#FBF5E7] flex flex-col justify-center items-center text-center px-4 py-8 md:py-0">
            <div>
              <h1 className="text-[24px] font-medium text-[#1E3932] mb-6 tracking-[.03em]">
                It's a great day for free coffee
              </h1>
              <p className="mb-8 text-[19px] text-[#1E3932] tracking-[.02em]">
                Start your Starbucks® Rewards journey with a coffee on <br />
                us. Join now and enjoy a free handcrafted drink with a <br />
                qualifying purchase during your first week.*
              </p>
              <button className="border border-[#1E3932] text-[#1E3932] px-4 py-1.5 rounded-full hover:bg-[rgba(0,0,0,0.06)] transition duration-200 font-medium">
                Join now
              </button>
            </div>
          </div>
        </section>

        {/* Disclaimer Text Section */}
        <section className="px-8 md:px-16 pt-12 pb-6">
          <p className="text-[14px] text-black leading-[1.8] text-center max-w-[800px] mx-auto box-inherit">
            *Valid for new Starbucks Rewards members for 7 days from sign up.
            Coupon will be available in the <br />
            offers tab of your Starbucks app following sign up and may take up
            to 48 hours to arrive. Good at <br />
            participating U.S. stores for a handcrafted menu-sized beverage with
            qualifying purchase ($8 max <br />
            value). Qualifying purchase excludes alcohol, Starbucks Card and
            Card reloads. Limit one. Cannot <br />
            be combined with other offers or discounts. Excludes delivery
            services. Sign up before 3/30/2025.
          </p>
        </section>

        {/* Footer */}
        <footer
          className={`
            bg-white px-8 md:px-16 py-12
            shadow-[0_-1px_3px_rgba(0,0,0,.1),0_-2px_2px_rgba(0,0,0,.06),0_0_2px_rgba(0,0,0,.07),0_1px_3px_rgba(0,0,0,.1),0_2px_2px_rgba(0,0,0,.06),0_0_2px_rgba(0,0,0,.07),0_1px_3px_rgba(0,0,0,.1),0_2px_2px_rgba(0,0,0,.06),0_0_2px_rgba(0,0,0,.07)]
          `}
        >
          {/* Footer Links Grid */}
          <div className="grid grid-cols-1 md:grid-cols-5 gap-8 mb-12">
            {/* About Us Column */}
            <div>
              <h3 className="text-[19px] font-normal mb-6">About Us</h3>
              <ul className="space-y-4">
                <li>
                  <a
                    href="#"
                    className="text-[16px] text-gray-600 hover:text-black"
                  >
                    Our Company
                  </a>
                </li>
                <li>
                  <a
                    href="#"
                    className="text-[16px] text-gray-600 hover:text-black"
                  >
                    Our Coffee
                  </a>
                </li>
                <li>
                  <a
                    href="#"
                    className="text-[16px] text-gray-600 hover:text-black"
                  >
                    About Starbucks
                  </a>
                </li>
                <li>
                  <a
                    href="#"
                    className="text-[16px] text-gray-600 hover:text-black"
                  >
                    Starbucks Archive
                  </a>
                </li>
                <li>
                  <a
                    href="#"
                    className="text-[16px] text-gray-600 hover:text-black"
                  >
                    Investor Relations
                  </a>
                </li>
                <li>
                  <a
                    href="#"
                    className="text-[16px] text-gray-600 hover:text-black"
                  >
                    Customer Service
                  </a>
                </li>
                <li>
                  <a
                    href="#"
                    className="text-[16px] text-gray-600 hover:text-black"
                  >
                    Contact Us
                  </a>
                </li>
              </ul>
            </div>

            {/* Careers Column */}
            <div>
              <h3 className="text-[19px] font-normal mb-6">Careers</h3>
              <ul className="space-y-4">
                <li>
                  <a
                    href="#"
                    className="text-[16px] text-gray-600 hover:text-black"
                  >
                    Culture and Values
                  </a>
                </li>
                <li>
                  <a
                    href="#"
                    className="text-[16px] text-gray-600 hover:text-black"
                  >
                    Inclusion, Diversity, & Belonging
                  </a>
                </li>
                <li>
                  <a
                    href="#"
                    className="text-[16px] text-gray-600 hover:text-black"
                  >
                    College Achievement Plan
                  </a>
                </li>
                <li>
                  <a
                    href="#"
                    className="text-[16px] text-gray-600 hover:text-black"
                  >
                    Alumni Community
                  </a>
                </li>
                <li>
                  <a
                    href="#"
                    className="text-[16px] text-gray-600 hover:text-black"
                  >
                    U.S. Careers
                  </a>
                </li>
                <li>
                  <a
                    href="#"
                    className="text-[16px] text-gray-600 hover:text-black"
                  >
                    International Careers
                  </a>
                </li>
              </ul>
            </div>

            {/* Social Impact Column */}
            <div>
              <h3 className="text-[19px] font-normal mb-6">Social Impact</h3>
              <ul className="space-y-4">
                <li>
                  <a
                    href="#"
                    className="text-[16px] text-gray-600 hover:text-black"
                  >
                    Communities
                  </a>
                </li>
                <li>
                  <a
                    href="#"
                    className="text-[16px] text-gray-600 hover:text-black"
                  >
                    Starbucks Foundation
                  </a>
                </li>
                <li>
                  <a
                    href="#"
                    className="text-[16px] text-gray-600 hover:text-black"
                  >
                    Sustainability
                  </a>
                </li>
                <li>
                  <a
                    href="#"
                    className="text-[16px] text-gray-600 hover:text-black"
                  >
                    Environmental and Social Impact Reporting
                  </a>
                </li>
              </ul>
            </div>

            {/* For Business Partners Column */}
            <div>
              <h3 className="text-[19px] font-normal mb-6">
                For Business Partners
              </h3>
              <ul className="space-y-4">
                <li>
                  <a
                    href="#"
                    className="text-[16px] text-gray-600 hover:text-black"
                  >
                    Landlord Support Center
                  </a>
                </li>
                <li>
                  <a
                    href="#"
                    className="text-[16px] text-gray-600 hover:text-black"
                  >
                    Suppliers
                  </a>
                </li>
                <li>
                  <a
                    href="#"
                    className="text-[16px] text-gray-600 hover:text-black"
                  >
                    Corporate Gift Card Sales
                  </a>
                </li>
                <li>
                  <a
                    href="#"
                    className="text-[16px] text-gray-600 hover:text-black"
                  >
                    Office and Foodservice Coffee
                  </a>
                </li>
              </ul>
            </div>

            {/* Order and Pick Up Column */}
            <div>
              <h3 className="text-[19px] font-normal mb-6">
                Order and Pick Up
              </h3>
              <ul className="space-y-4">
                <li>
                  <a
                    href="#"
                    className="text-[16px] text-gray-600 hover:text-black"
                  >
                    Order on the App
                  </a>
                </li>
                <li>
                  <a
                    href="#"
                    className="text-[16px] text-gray-600 hover:text-black"
                  >
                    Order on the Web
                  </a>
                </li>
                <li>
                  <a
                    href="#"
                    className="text-[16px] text-gray-600 hover:text-black"
                  >
                    Delivery
                  </a>
                </li>
                <li>
                  <a
                    href="#"
                    className="text-[16px] text-gray-600 hover:text-black"
                  >
                    Order and Pick Up Options
                  </a>
                </li>
                <li>
                  <a
                    href="#"
                    className="text-[16px] text-gray-600 hover:text-black"
                  >
                    Explore and Find Coffee for Home
                  </a>
                </li>
              </ul>
            </div>
          </div>
          {/* Divider */}
          <div className="border-t border-gray-300 my-8" />
          {/* Social Links and Legal */}
          <div className="space-y-8">
            {/* Social Media Icons */}
            <div className="flex gap-4">
              <YoutubeIcon />
              <FacebookIcon />
              <LinkedinIcon />
              <InstagramIcon />
              <TwitchIcon />
              <DribbbleIcon />
            </div>

            {/* Legal Links */}
            <div className="flex flex-col space-y-8">
              <div className="flex flex-col space-y-4">
                <a href="#" className="text-[16px] text-[#212121] py-2">
                  Privacy Notice
                </a>
                <a href="#" className="text-[16px] text-[#212121] py-2">
                  Consumer Health Privacy Notice
                </a>
                <a href="#" className="text-[16px] text-[#212121] py-2">
                  Terms of Use
                </a>
                <a href="#" className="text-[16px] text-[#212121] py-2">
                  Do Not Share My Personal Information
                </a>
                <a href="#" className="text-[16px] text-[#212121] py-2">
                  CA Supply Chain Act
                </a>
                <a href="#" className="text-[16px] text-[#212121] py-2">
                  Accessibility
                </a>
                <a href="#" className="text-[16px] text-[#212121] py-2">
                  Cookie Preferences
                </a>
              </div>

              {/* Copyright */}
              <p className="text-[13px] text-[#00000094]">
                © 2025 Starbucks Coffee Company. All rights reserved.
              </p>
            </div>
          </div>
        </footer>
      </main>
    </>
  );
}
