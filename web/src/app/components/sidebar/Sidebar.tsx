"use client"

import Link from "next/link"
import { usePathname } from "next/navigation"
import { CalendarBlank } from "@/app/components/icons/CalendarBlank"
import { ChartPie } from "@/app/components/icons/ChartPie"
import { CurrencyDollar } from "@/app/components/icons/CurrencyDollar"
import { House } from "@/app/components/icons/House"
import { Tag } from "@/app/components/icons/Tag"

export const Sidebar = () => {
  const pathname = usePathname()

  return (
    <>
      {/* Desktop Sidebar */}
      <aside className="hidden md:block w-14 h-screen fixed top-0 pt-24 z-0 bg-layout-spotlight">
        <nav className="py-6 px-3 h-full w-full relative">
          <ul className="flex flex-col items-center gap-y-8">
            <Link
              href="/"
              className={`${
                pathname === "/"
                  ? "bg-interactive-primary text-white"
                  : "hover:bg-layout-body"
              } rounded-[10px] p-1 transition-all ease-in-out cursor-pointer`}
            >
              <House />
            </Link>
            <Link
              href="/meus-eventos"
              className={`${
                pathname === "/meus-eventos"
                  ? "bg-interactive-primary text-white"
                  : "hover:bg-layout-body text-content-placeholder"
              } rounded-[10px] p-1 transition-all ease-in-out cursor-pointer`}
            >
              <CalendarBlank />
            </Link>
            <li className="rounded-[10px] p-1 transition-all ease-in-out cursor-pointer hover:bg-layout-body">
              <CurrencyDollar />
            </li>
            <li className="rounded-[10px] p-1 transition-all ease-in-out cursor-pointer hover:bg-layout-body">
              <ChartPie />
            </li>
            <li className="rounded-[10px] p-1 transition-all ease-in-out cursor-pointer hover:bg-layout-body">
              <Tag />
            </li>
          </ul>
        </nav>
      </aside>
      {/* Mobile Sidebar */}
      <aside className="md:hidden block h-14 w-screen fixed bottom-0 z-50 bg-layout-spotlight">
        <nav className="p-2 pt-3 h-14 w-full relative">
          <ul className="flex justify-center items-center gap-x-8">
            <Link
              href="/"
              className={`${
                pathname === "/"
                  ? "bg-interactive-primary text-white"
                  : "hover:bg-layout-body"
              } rounded-[10px] p-1 transition-all ease-in-out cursor-pointer`}
            >
              <House />
            </Link>
            <Link
              href="/meus-eventos"
              className={`${
                pathname === "/meus-eventos"
                  ? "bg-interactive-primary text-white"
                  : "hover:bg-layout-body text-content-placeholder"
              } rounded-[10px] p-1 transition-all ease-in-out cursor-pointer`}
            >
              <CalendarBlank />
            </Link>
            <li className="rounded-[10px] p-1 transition-all ease-in-out cursor-pointer hover:bg-layout-body">
              <CurrencyDollar />
            </li>
            <li className="rounded-[10px] p-1 transition-all ease-in-out cursor-pointer hover:bg-layout-body">
              <ChartPie />
            </li>
            <li className="rounded-[10px] p-1 transition-all ease-in-out cursor-pointer hover:bg-layout-body">
              <Tag />
            </li>
          </ul>
        </nav>
      </aside>
    </>
  )
}
