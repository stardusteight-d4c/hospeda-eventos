"use client"

import { TextAa } from "@/app/_components/@globals/icons/TextAa"
import { TextB } from "@/app/_components/@globals/icons/TextB"
import { TextItalic } from "@/app/_components/@globals/icons/TextItalic"
import { ListBullets } from "@/app/_components/@globals/icons/ListBullets"
import { ListNumbers } from "@/app/_components/@globals/icons/ListNumbers"
import { Paperclip } from "@/app/_components/@globals/icons/Paperclip"
import { useRouter } from "next/navigation"
import { TrashSimple } from "@/app/_components/@globals/icons/TrashSimple"
import { InputForm } from "./integrate/InputForm"
import { Uploader } from "./integrate/Uploader"
import { useEffect, useState } from "react"
import { makeInputData } from "./integrate/data"
import { useFormDataContext } from "@/app/_context/FormContextProvider"
import { TogglePrivacy } from "./integrate/TogglePrivacy"
import { handleSubmit } from "@/app/_utils/handleSubmit"

interface Props {}

export const Form = (props: Props) => {
  const router = useRouter()
  const { setFormData, formData } = useFormDataContext()
  const [privacy, setPrivacy] = useState<"public" | "private">("public")
  useEffect(() => {
    if (formData.selectedToEdit?.privacy) {
      setPrivacy(formData.selectedToEdit?.privacy)
    }
  }, [])
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

  function formatDateToYYYYMMDD(date: Date) {
    const year = date.getFullYear()
    const month = String(date.getMonth() + 1).padStart(2, "0")
    const day = String(date.getDate()).padStart(2, "0")
    return `${year}-${month}-${day}`
  }

  const inputData = makeInputData(inputValues, setInputValues)
  return (
    <form className="w-full bg-white shadow-black/20 shadow-md p-4 md:p-12 pb-[84px] rounded-2xl mt-6">
    <h2 className="text-2xl text-content-title font-bold">
      Informações do evento
    </h2>

    <div className="mt-[46px] ">
      <InputForm
        {...inputData.eventName}
        selectedToEditFieldValue={formData.selectedToEdit?.eventName}
      />
    </div>
    <div>
      <Uploader />
    </div>
    <div className="w-full mt-[18px] flex flex-col gap-y-2">
      <label htmlFor="" className="text-content-base">
        Privacidade do evento
      </label>
      <TogglePrivacy privacy={privacy} setPrivacy={setPrivacy} />
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
          defaultValue={formData.selectedToEdit?.description}
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
    <div className="grid grid-cols-2 gap-x-4 w-full mb-4">
      <div className="col-span-1">
        <InputForm
          {...inputData.cep}
          selectedToEditFieldValue={formData.selectedToEdit?.cep}
        />
      </div>
      <div className="col-span-1">
        <InputForm
          {...inputData.number}
          selectedToEditFieldValue={formData.selectedToEdit?.number}
        />
      </div>
    </div>
    <InputForm
      {...inputData.address}
      selectedToEditFieldValue={formData.selectedToEdit?.address}
    />
    <div className="grid grid-cols-2 gap-4 mt-4">
      <div className="col-span-1">
        <InputForm
          {...inputData.complement}
          selectedToEditFieldValue={formData.selectedToEdit?.complement}
        />
      </div>
      <div className="col-span-1">
        <InputForm
          {...inputData.neighborhood}
          selectedToEditFieldValue={formData.selectedToEdit?.neighborhood}
        />
      </div>
      <div className="col-span-1">
        <InputForm
          {...inputData.city}
          selectedToEditFieldValue={formData.selectedToEdit?.city}
        />
      </div>
      <div className="col-span-1">
        <InputForm
          {...inputData.state}
          selectedToEditFieldValue={formData.selectedToEdit?.state}
        />
      </div>
    </div>
    <div className="w-full h-0 border-t border-t-layout-body my-8" />
    <h3 className="text-content-title text-xl font-bold mb-5">
      Data e horário
    </h3>
    <div className="flex items-center gap-x-4">
      <InputForm
        {...inputData.startDate}
        selectedToEditFieldValue={formatDateToYYYYMMDD(
          new Date(formData.selectedToEdit?.startDate!)
        )}
      />
      <InputForm
        {...inputData.startTime}
        selectedToEditFieldValue={formData.selectedToEdit?.startTime}
      />
    </div>
    <div className="w-full flex justify-end">
      {formData.selectedToEdit !== null ? (
        <button
          onClick={() => handleSubmit({ formData, router })}
          className="w-[223px] py-4 rounded-full active:scale-95 transition-all duration-300 ease-in-out bg-success-light text-content-title mt-8 ml-auto"
        >
          Salvar alterações
        </button>
      ) : (
        <button
          onClick={() => handleSubmit({ formData, router })}
          className="w-[223px] py-4 rounded-full active:scale-95 transition-all duration-300 ease-in-out bg-interactive-primary text-white mt-8 ml-auto"
        >
          Cadastrar
        </button>
      )}
    </div>
  </form>
  )
}