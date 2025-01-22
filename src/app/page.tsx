"use client";

// import { motion } from "framer-motion";
// import Link from "next/link";
import Image from "next/image";
// import FacebookIcon from "../components/FacebookIcon";
// import InstagramIcon from "../components/InstagramIcon";
// import YoutubeIcon from "../components/YoutubeIcon";
// import LinkedinIcon from "../components/LinkedinIcon";
// import TwitchIcon from "../components/TwitchIcon";
// import DribbbleIcon from "../components/DribbbleIcon";

export default function Home() {
  return (
    <>
      <main>
        {/* First hero section */}
        <section className="bg-[#CEE6B5] mx-0 sm:mx-4 md:mx-2 mt-8">
          <div className="mx-auto max-w-[1440px]">
            <div className="flex flex-col md:flex-row">
              {/* Left side - Image container */}
              <div className="w-full md:w-1/2 h-[325.52px] md:h-full">
                <div className="relative h-full">
                  <Image
                    src="/starbucksimg1.jpg"
                    alt="A trio of drinks in clear glasses"
                    width={800}
                    height={325}
                    className="w-full h-full object-cover"
                  />
                </div>
              </div>

              {/* Right side - Content container */}
              <div className="w-full md:w-1/2 flex items-center justify-center bg-[#CEE6B5] py-8 md:py-0">
                <div className="max-w-[343px] md:max-w-[487.91px] text-center">
                  <h1 className="font-['SoDoSans','Helvetica_Neue',Helvetica,Arial,sans-serif] text-[28px] md:text-[50px] font-[515] text-[#1D3C34] mb-4 leading-[1.2] tracking-[.08em]">
                    The best of winter
                  </h1>
                  <p className="w-[343px] h-[165px] text-[22px] md:text-[24px] leading-[1.3] text-[#1e3932] mb-4 tracking-[.05em] flex items-center">
                    A new winter menu is here, featuring new Cortado alongside
                    Pistachio beverages and Matcha Latte—now customized to your
                    perfect level of sweetness.
                  </p>
                  <a
                    href="#"
                    className="inline-block rounded-[50px] border border-[#1e3932] bg-transparent px-4 py-[7px] text-[14px] font-medium text-[#1e3932] transition-all duration-200 hover:bg-[rgba(30,57,50,0.1)]"
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
                  <p className="w-[343px] h-[165px] text-[22px] md:text-[24px] leading-[1.3] text-[#1D3C34] mb-4 tracking-[.05em] flex items-center">
                    With distinctive floral, tangerine and lemon balm notes,
                    Single-Origin Ethiopia is a unique global favorite.
                  </p>
                  <a
                    href="#"
                    className="inline-block rounded-[50px] border border-[#1E3932] bg-transparent px-4 py-[7px] text-[14px] font-medium text-[#1E3932] transition-all duration-200 hover:bg-[rgba(0,0,0,0.06)]"
                  >
                    Add to order
                  </a>
                </div>
              </div>

              {/* Image container - First on mobile */}
              <div className="w-full md:w-1/2 h-[325.52px] md:h-full">
                <div className="relative h-full">
                  <Image
                    src="/st2img.jpg"
                    alt="Ethiopia Single-Origin Coffee"
                    width={800}
                    height={325}
                    className="w-full h-full object-cover"
                  />
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
                It&apos;s a great day for free coffee
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
      </main>
    </>
  );
}
