"use client"

import { Hospeda } from "@/app/components/icons/Hospeda"
import { CaretLeft } from "../components/icons/CaretLeft"
import Link from "next/link"
import { TextAa } from "../components/icons/TextAa"
import { TextB } from "../components/icons/TextB"
import { TextItalic } from "../components/icons/TextItalic"
import { ListBullets } from "../components/icons/ListBullets"
import { ListNumbers } from "../components/icons/ListNumbers"
import { Paperclip } from "../components/icons/Paperclip"
import { TrashSimple } from "../components/icons/TrashSimple"
import { InputForm } from "./integrate/InputForm"
import { Uploader } from "./integrate/Uploader"
import { useState } from "react"
import { makeInputData } from "./integrate/data"
import { useFormDataContext } from "../@context/FormContextProvider"
import { log } from "console"

interface Props {}

export default function EditEventPage(props: Props) {
  const { setFormData, formData } = useFormDataContext()
  const [inputValues, setInputValues] = useState<InputValues>({
    eventName: "",
    cep: "",
    number: "",
    address: "",
    complement: "",
    description: "",
    neighborhood: "",
    city: "",
    state: "",
    startDate: new Date(),
    startTime: "",
  })

  function handleSubmit() {
    console.log(formData)
  }

  const inputData = makeInputData(inputValues, setInputValues)

  return (
    <div className="max-w-[100vw] w-full overflow-x-hidden min-h-screen pb-12 bg-layout-body">
      <div className="max-w-7xl mx-auto">
        <div className="pl-4 md:pl-0 grid grid-rows-2 w-full md:flex pt-24 items-center justify-between">
          <div className="row-start-2 mt-4 md:mt-0">
            <h1 className="text-content-title flex items-center gap-x-4 leading-[37.5px] text-[32px] font-bold">
              <Link href="/meus-eventos" className="cursor-pointer">
                <CaretLeft />
              </Link>
              <span>Criar evento</span>
            </h1>
          </div>
          <Link
            href="/"
            className="row-start-1 w-fit text-content-alt-brand cursor-pointer flex items-center gap-x-4"
          >
            <Hospeda className="w-7 h-7" />
            <p className="leading-[18.75px] font-bold">Hospeda Eventos</p>
          </Link>
        </div>
        <section className="w-full bg-white p-4 md:p-12 pb-[84px] rounded-2xl mt-6">
          <h2 className="text-2xl text-content-title font-bold">
            Informações do evento
          </h2>

          <div className="mt-[46px] ">
            <InputForm {...inputData.eventName} />
          </div>
          <div>
            <Uploader />
          </div>
          <div className="w-full mt-[18px] flex flex-col gap-y-2">
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

          <div className="w-full mt-[18px] flex flex-col gap-y-2">
            <label htmlFor="" className="text-content-base">
              Descrição
            </label>
            <div>
              <div className="bg-interactive-secundary border border-input-border p-3 flex items-center justify-between rounded-t-xl">
                <div className="cursor-pointer p-1 rounded-md hover:bg-layout-body">
                  <TextAa />
                </div>
                <ul className="flex items-center gap-x-3">
                  <li className="cursor-pointer p-1 rounded-md hover:bg-layout-body">
                    <TextB />
                  </li>
                  <li className="cursor-pointer p-1 rounded-md hover:bg-layout-body">
                    <TextItalic />
                  </li>
                  <li className="cursor-pointer p-1 rounded-md hover:bg-layout-body">
                    <ListBullets />
                  </li>
                  <li className="cursor-pointer p-1 rounded-md hover:bg-layout-body">
                    <ListNumbers />
                  </li>
                  <li className="cursor-pointer p-1 rounded-md hover:bg-layout-body">
                    <Paperclip />
                  </li>
                  <li className="cursor-pointer p-1 rounded-md hover:bg-layout-body">
                    <TrashSimple />
                  </li>
                </ul>
              </div>
              <textarea
                id="description"
                onChange={(event: React.ChangeEvent<HTMLTextAreaElement>) => {
                  const { id, value } = event.target
                  setFormData((prevFormData) => ({
                    ...prevFormData,
                    [id]: value,
                  }))
                }}
                placeholder="Placeholder"
                spellCheck="false"
                className="p-3 w-full text-content-title min-h-[108px] max-h-[108px] resize-none outline-none border border-input-border rounded-b-xl"
              />
            </div>
          </div>
          <div className="w-full h-0 border-t border-t-layout-body my-8" />
          <h3 className="text-content-title text-xl font-bold mb-5">
            Local do evento
          </h3>
          <div className="grid grid-cols-2 gap-x-4 w-full mt-[46px] mb-4">
            <div className="col-span-1">
              <InputForm {...inputData.cep} />
            </div>
            <div className="col-span-1">
              <InputForm {...inputData.number} />
            </div>
          </div>
          <InputForm {...inputData.address} />
          <div className="grid grid-cols-2 gap-4 mt-4">
            <div className="col-span-1">
              <InputForm {...inputData.complement} />
            </div>
            <div className="col-span-1">
              <InputForm {...inputData.neighborhood} />
            </div>
            <div className="col-span-1">
              <InputForm {...inputData.city} />
            </div>
            <div className="col-span-1">
              <InputForm {...inputData.state} />
            </div>
          </div>
          <div className="w-full h-0 border-t border-t-layout-body my-8" />
          <h3 className="text-content-title text-xl font-bold mb-5">
            Data e horário
          </h3>
          <div className="flex items-center gap-x-4">
            <InputForm {...inputData.startDate} />
            <InputForm {...inputData.startTime} />
          </div>
          <div className="w-full flex justify-end">
            <button
              onClick={handleSubmit}
              className="w-[223px] py-4 rounded-full active:scale-95 transition-all duration-300 ease-in-out bg-interactive-primary text-white mt-8 ml-auto"
            >
              Cadastrar
            </button>
          </div>
        </section>
      </div>
    </div>
  )
}