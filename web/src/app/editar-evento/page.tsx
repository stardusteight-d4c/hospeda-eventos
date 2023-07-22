import React from "react"
import { Hospeda } from "@/app/components/icons/Hospeda"
import { CaretLeft } from "../components/icons/CaretLeft"
import Link from "next/link"

interface Props {}

export default function EditEventPage(props: Props) {
  return (
    <div className="w-screen min-h-screen bg-layout-body">
      <div className="max-w-7xl mx-auto">
        <div className="flex pt-24 items-center justify-between">
          <div>
            <h1 className="text-content-title flex items-center gap-x-4 leading-[37.5px] text-[32px] font-bold">
              <Link href="/meus-eventos" className="cursor-pointer">
                <CaretLeft />
              </Link>
              <span>Criar evento</span>
            </h1>
          </div>
          <h1 className="text-content-alt-brand cursor-pointer flex items-center gap-x-4">
            <Hospeda className="w-7 h-7" />
            <p className="leading-[18.75px] font-bold">Hospeda Eventos</p>
          </h1>
        </div>
        <section className="w-full bg-white p-12 rounded-2xl mt-6">
          <h2 className="text-2xl text-content-title font-bold">
            Informações do evento
          </h2>

          <div className="w-full flex flex-col gap-y-2">
            <label htmlFor="" className="text-content-base">
              Nome do evento
            </label>
            <input
              type="text"
              className="p-3 border border-input-border rounded-xl"
              placeholder="Placeholder"
            />
          </div>
          <div className="w-full flex flex-col gap-y-2">
            <label htmlFor="" className="text-content-base">
              Privacidade do evento
            </label>
            <div className="flex bg-layout-body items-center justify-center rounded-full w-fit p-1">
              <span className="block py-2 px-6 cursor-pointer text-white bg-interactive-primary rounded-full text-center">
                Publico
              </span>
              <span className="block py-2 px-6 cursor-pointer text-gray-500 rounded-full text-center">
                Privado
              </span>
            </div>
          </div>


          <div className="w-full flex flex-col gap-y-2">
            <label htmlFor="" className="text-content-base">
            Descrição
            </label>
          <textarea placeholder="Placeholder"></textarea>
          </div>
        </section>
      </div>
    </div>
  )
}
