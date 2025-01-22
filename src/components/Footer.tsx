"use client";

import FacebookIcon from "./FacebookIcon";
import InstagramIcon from "./InstagramIcon";
import YoutubeIcon from "./YoutubeIcon";
import LinkedinIcon from "./LinkedinIcon";
import TwitchIcon from "./TwitchIcon";
import DribbbleIcon from "./DribbbleIcon";

export default function Footer() {
  return (
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
          <h3 className="text-[19px] font-normal mb-6">Order and Pick Up</h3>
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
  );
}
