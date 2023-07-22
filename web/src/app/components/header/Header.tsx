import Image from "next/image"
import userPlaceholder from "@/app/assets/user-placeholder.svg"
import { Hospeda } from "@/app/components/icons/Hospeda"
import Link from "next/link"

export const Header = () => {
  return (
    <header className="bg-layout-body h-24 w-screen relative z-20">
      <div className="py-7 px-8 max-w-7xl mx-auto flex items-center justify-between">
        <Link href="/">
        <h1 className="text-content-alt-brand cursor-pointer flex items-center gap-x-4">
          <Hospeda className="w-7 h-7" />
          <p className="leading-[18.75px] font-bold">Hospeda Eventos</p>
        </h1>
        </Link>
        <Image
          src={userPlaceholder}
          width={40}
          height={40}
          alt="account"
          className="w-10 h-10 cursor-pointer"
        />
      </div>
    </header>
  )
}
