import React from "react"
import { MapPin } from "../icons/MapPin"
import Link from "next/link"

export interface CardProps {
  name: string
  coverImage: string
  minPrice?: number
  location: string
  link: string
  soldOff?: boolean
}

export const Card = ({
  name,
  coverImage,
  minPrice,
  location,
  link,
  soldOff = false,
}: CardProps) => {
  return (
    <div className="col-span-1 relative border transition-all duration-300 ease-in-out border-input-border overflow-hidden h-[355px] rounded-xl shadow-sm shadow-black/20 w-fit">
      <img
        src={coverImage}
        alt={name}
        className={`${soldOff ? "brightness-50" : "brightness-100"}  bg-cover select-none pointer-events-none`}
      />
      <div className="p-2 w-full ">
        <h2
          title="Nacional assasd Inn Sorocaba assssss asssssss adsssssss"
          className="text-lg border-b h-[54px] border-dashed border-b-input-border pb-1 mb-1 flex items-center justify-center text-center cursor-default font-semibold leading-snug"
        >
          <p className="line-clamp-2">{name}</p>
        </h2>
        <div className="absolute bottom-2 w-full inset-x-0">
          <div className="flex flex-col items-center justify-center">
            {minPrice ? (
              <p className="text-sm text-success-dark font-medium py-1">
                A partir de: R${minPrice}
              </p>
            ) : (
              <p className="text-sm text-content-base font-medium py-1">
                Não informado
              </p>
            )}
            <span className="flex items-center gap-x-1">
              <MapPin />
              <p className="text-content-base text-sm">{location}</p>
            </span>
          </div>
          {soldOff ? (
            <a
              href={link}
              target="_blank"
              className="whitespace-nowrap tracking-wide mx-auto cursor-pointer active:scale-100 hover:scale-105 transition-all duration-300 ease-in-out text-white font-bold bg-interactive-destructive rounded-full flex items-center justify-center py-2 px-5 mt-2 w-fit"
            >
              Esgotado
            </a>
          ) : (
            <a
              href={link}
              target="_blank"
              className="whitespace-nowrap tracking-wide mx-auto cursor-pointer active:scale-100 hover:scale-105 transition-all duration-300 ease-in-out text-white font-bold bg-interactive-primary rounded-full flex items-center justify-center py-2 px-5 mt-2 w-fit"
            >
              Confira
            </a>
          )}
        </div>
      </div>
    </div>
  )
}
