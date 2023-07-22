import React from "react"
import { MapPin } from "../icons/MapPin"
import Link from "next/link"

interface Props {
  name: string
  coverImage: string
  minPrice: number
  location: string
  link: string
}

export const Card = ({ name, coverImage, minPrice, location, link }: Props) => {
  return (
    <div className="col-span-1 border transition-all duration-300 ease-in-out border-input-border overflow-hidden relative h-[375px] rounded-xl shadow-sm shadow-black/20 w-fit">
      <img
        src="https://hospedaeventos.com.br/wp-content/uploads/2023/06/NacionalInnSorocaba_Hotel01-400x300.jpg"
        alt=""
        className="bg-cover"
      />
      <div className="p-2 w-full relative">
        <h2
          title="Nacional assasd Inn Sorocaba assssss asssssss adsssssss"
          className="text-lg flex items-center justify-center h-full text-center cursor-default font-semibold leading-snug"
        >
          <p className="line-clamp-2">
            Nacional Inn Sorocaba Nacional Inn Sorocaba Nacional Inn Sorocaba
            Nacional Inn Sorocaba aaaaaaaaaaaaaaaaa
          </p>
        </h2>
        <div className="absolute top-full w-full inset-x-0">
          <div className="flex flex-col items-center justify-center border-t border-dashed border-t-input-border py-1 my-1">
            <p className="text-sm text-success-dark font-medium py-1">
              A partir de: R$211
            </p>
            <span className="flex items-center gap-x-1">
              <MapPin />
              <p className="text-content-base text-sm">Sorocaba | SP</p>
            </span>
          </div>
          <Link
            href="/editar-evento"
            className="whitespace-nowrap tracking-wide mx-auto cursor-pointer active:scale-95 transition-all duration-300 ease-in-out text-white font-bold bg-interactive-primary rounded-full flex items-center justify-center py-2 px-4 w-fit"
          >
            Confira
          </Link>
        </div>
      </div>
    </div>
  )
}
