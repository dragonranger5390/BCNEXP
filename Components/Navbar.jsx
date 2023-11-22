"use client";
import Image from "next/image";
import Link from "next/link";
import { useState } from "react";

function NavBar() {
  const [navbar, setNavbar] = useState(false);
  return (
      <nav className="w-full bg-slate-900 top-0 left-0 right-0">
        <div className="justify-between px-4 mx-auto lg:max-w-7xl md:min-w-min md:items-center md:flex md:justify- md:px-4 lg:px-8">
            <div>
              <div className="flex items-center justify-between py-3 md:py-0 md:block">
                {/* LOGO */}
                <Link href="/" className="flex gap-2">
                  <Image src="/logo.svg" width={30} height={30} alt="logo" />
                  <h2 className="text-xl text-sky-50 font-semibold whitespace-nowrap pt-1">BCN <br/> EXP</h2>
                </Link>
                {/* HAMBURGER BUTTON FOR MOBILE */}
                <div className="md:hidden">
                  <button
                    className="p-2 text-gray-700 rounded-md outline-none focus:border-gray-400 focus:border"
                    onClick={() => setNavbar(!navbar)}
                  >
                    {navbar ? (
                      <Image src="/close.svg" width={30} height={30} alt="logo" />
                    ) : (
                      // <Image
                      //   src="https://img.icons8.com/ios/50/FFFFFF/menu-squared-2.png"
                      //   width={50}
                      //   height={50}
                      //   alt="menu-squared-2"
                      //   className="focus:border-none active:border-none fill-blue-500"
                      // />
                      <Image
                        src="/burger-menu.svg"
                        width={30}
                        height={30}
                        alt="logo"
                        className="focus:border-none active:border-none active:fill-blue-500"
                      />
                    )}
                  </button>
                </div>
              </div>
            </div>
            <div className="flex justify-self-start">
              <div
                className={`flex-1 justify-self-center pb-3 mt-8 md:block md:pb-0 md:mt-0 md:justify-between ${
                  navbar ? "p-12 md:p-0 block" : "hidden"
                }`}
              >
                <ul className="h-screen md:h-auto items-center justify-center md:flex md:ps-6 ">
                  <li className="whitespace-nowrap py-5 text-tmain text-base  md:px-3 text-center border-b-2 md:border-b-0  hover:bg-green-500  border-[#24D3C8]  md:hover:text-green-500 md:hover:bg-transparent">
                    <Link href="/about" onClick={() => setNavbar(!navbar)}>
                      Почему BCN EXP
                    </Link>
                  </li>
                  <li className="whitespace-nowrap py-5 text-tmain text-base px-3 text-center  border-b-2 md:border-b-0  hover:bg-green-500 hover:duration-300  border-[#25D698]  md:hover:text-green-500 md:hover:bg-transparent">
                    <Link href="/Links" onClick={() => setNavbar(!navbar)}>
                      Продукты
                    </Link>
                  </li>
                  <li className="whitespace-nowrap py-5 text-tmain text-base px-3 text-center  border-b-2 md:border-b-0  hover:bg-green-500  border-[#25D773]  md:hover:text-green-500 md:hover:bg-transparent">
                    <Link href="/global-error" onClick={() => setNavbar(!navbar)}>
                      Партнерство
                    </Link>
                  </li>
                  <li className="whitespace-nowrap py-5 text-tmain text-base px-3 text-center  border-b-2 md:border-b-0  hover:bg-green-500  border-[#26DA43]  md:hover:text-green-500 md:hover:bg-transparent">
                    <Link href="/prices" onClick={() => setNavbar(!navbar)}>
                      Цены
                    </Link>
                  </li>
                  <li className="py-5 text-base md:hidden text-white pt-8 text-center md:border-b-0">
                    <Link href="/registration" onClick={() => setNavbar(!navbar)}
                    className="border break-keep text-lg font-semibold border-transparent text-stale-300 flex-nowrap px-4 py-2 rounded hover:bg-slate-700 focus-within:bg-slate-700 outline-none bg-gradient-to-r from-grad-blueish to-grad-greenish ">
                      Попробовать сейчас
                    </Link>
                  </li>
                </ul>
              </div>
            </div>
          <div className="hidden md:flex">
            <div
              className={`flex-1 justify-self-end pb-3 mt-8 md:block md:pb-0 md:mt-0 ${
                navbar ? "p-12 md:p-0 block" : "hidden"
              }`}
            >
                  <Link href="/registration" className="border break-keep text-white font-semibold border-transparent text-stale-300 flex-nowrap px-4 py-2 rounded hover:bg-slate-700 focus-within:bg-slate-700 outline-none bg-gradient-to-r from-grad-blueish to-grad-greenish whitespace-nowrap">
                    Попробовать сейчас
                  </Link>
            </div>
          </div>
        </div>
      </nav>
  );
}

export default NavBar;
