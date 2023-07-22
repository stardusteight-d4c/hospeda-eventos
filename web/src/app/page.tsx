import Link from "next/link"
import { Header } from "./components/header/Header"
import { MapPin } from "./components/icons/MapPin"
import { Sidebar } from "./components/sidebar/Sidebar"
import { Card } from "./components/home/Card"
import { homePageInfo } from "./data"

export default function Home() {
  return (
    <div className="relative bg-white max-w-[100vw] w-full overflow-x-hidden">
      <Header />
      <div className="flex max-w-7xl w-full mx-auto">
        <Sidebar />
        <main className="pb-8 mt-8 px-4 md:pl-[145px] md:pr-[89px] w-full">
          <h1 className="text-content-title leading-[37.5px] text-[32px] font-bold">
            Encontre sua Hospedagem!
          </h1>
          <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-x-4 gap-y-6 w-full mt-6">
            {homePageInfo.map((host, index) => (
              <Card key={index} {...host} />
            ))}
            {homePageInfo.map((host, index) => (
              <Card key={index} {...host} styles="hidden md:block" />
            ))}
          </div>
          <a
            href="https://hospedaeventos.com.br/todososhoteis/"
            target="_blank"
            className="w-full text-lg cursor-pointer font-medium hover:underline text-interactive-primary flex items-center justify-center mt-8"
          >
            Ver mais
          </a>
        </main>
      </div>
    </div>
  )
}
