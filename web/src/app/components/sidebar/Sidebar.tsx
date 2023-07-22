import { CalendarBlank } from "@/app/components/icons/CalendarBlank"
import { ChartPie } from "@/app/components/icons/ChartPie"
import { CurrencyDollar } from "@/app/components/icons/CurrencyDollar"
import { House } from "@/app/components/icons/House"
import { Tag } from "@/app/components/icons/Tag"

export const Sidebar = () => {
  return (
    <aside className="w-14 h-screen fixed top-0 pt-24 z-0 bg-layout-spotlight">
      <nav className="py-6 px-3 h-full w-full relative">
        <ul className="flex flex-col items-center gap-y-8">
          <li className="rounded-[10px] p-1 transition-all ease-in-out cursor-pointer hover:bg-layout-body">
            <House />
          </li>
          <li className="bg-interactive-primary text-white rounded-[10px] p-1 transition-all ease-in-out cursor-pointer">
            <CalendarBlank />
          </li>
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
  )
}
