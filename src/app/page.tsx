import Link from "next/link";

export default function Home() {
  return (
    <>
      <header className="fixed top-0 z-50 w-full bg-white shadow-sm">
        <nav className="mx-auto flex h-[72px] max-w-[1440px] items-center justify-between px-6">
          {/* Left section */}
          <div className="flex items-center gap-8">
            <Link href="/" className="text-xl font-bold text-[#006241]">
              Starbucks Logo
            </Link>
            <ul className="flex gap-8">
              <li>
                <Link
                  href="#"
                  className="text-[13px] font-bold tracking-[.1em] text-black hover:text-[#00754a]"
                >
                  MENU
                </Link>
              </li>
              <li>
                <Link
                  href="#"
                  className="text-[13px] font-bold tracking-[.1em] text-black hover:text-[#00754a]"
                >
                  REWARDS
                </Link>
              </li>
              <li>
                <Link
                  href="#"
                  className="text-[13px] font-bold tracking-[.1em] text-black hover:text-[#00754a]"
                >
                  GIFT CARDS
                </Link>
              </li>
            </ul>
          </div>

          {/* Right section */}
          <div className="flex items-center gap-8">
            <div className="flex items-center gap-2">
              <i className="fa-solid fa-location-dot"></i>
              <Link
                href="#"
                className="text-[14px] font-semibold text-black hover:text-[#00754a]"
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
        </nav>
      </header>
      <main className="mt-[72px]">{/* Main content will go here */}</main>
    </>
  );
}
