"use client"

import { useState } from "react"
import { useRouter } from "next/navigation"
import { DotsThree } from "@/app/components/icons/DotsThree"
import { Edit } from "@/app/components/icons/Edit"
import { Delete } from "@/app/components/icons/Delete"
import { IEvent } from "@/app/@interfaces/IEvent"
import { useFormDataContext } from "@/app/@context/FormContextProvider"

export const Operations = (props: IEvent) => {
  const router = useRouter()
  const { setFormData } = useFormDataContext()
  const [showDropdown, setShowDropdown] = useState(false)
  const [proceedToDeletion, setProceedToDeletion] = useState(false)

  async function deleteEvent(id: string) {
    setShowDropdown(false)
    setProceedToDeletion(false)
    await fetch(`${process.env.NEXT_SERVER_URL}/event?id=${id}`, {
      method: "DELETE",
      headers: {
        "Content-Type": "application/json",
      },
    })
      .then(() => location.reload())
      .catch((err) => {
        console.error(
          "an error occurred in the request to delete the Event:",
          err
        )
      })
  }

  async function proceedToEditEvent() {
    setFormData({
      selectedToEdit: {
        ...props,
        id: props.id!,
        eventName: props.name,
      },
    } as any)
    router.push("/editar-evento")
  }

  return (
    <div className="absolute right-0">
      {proceedToDeletion && (
        <div className="glassmorphism z-40 fixed inset-0 w-screen h-screen" />
      )}
      {proceedToDeletion && (
        <div className="w-screen h-screen  fixed inset-0 flex items-center justify-center z-50">
          <div className="bg-layout-spotlight p-8 rounded-2xl shadow-black/10 shadow-lg">
            <h2 className="text-2xl text-interactive-destructive font-medium text-center">
              Excluir Evento
            </h2>
            <p className="w-[350px] text-sm text-gray-500 text-center mt-4">
              Você realmente deseja excluir o evento: "{props.name}"? Esta ação
              não poderá ser desfeita!
            </p>
            <div className="flex items-center gap-x-4 w-fit mx-auto mt-8">
              <button
                onClick={() => deleteEvent(props.id!)}
                className="whitespace-nowrap cursor-pointer mt-4 md:mt-0 active:scale-95 transition-all duration-300 ease-in-out text-white font-bold bg-interactive-destructive rounded-full flex items-center justify-center py-2 px-4 w-fit"
              >
                Delete
              </button>
              <button
                className="whitespace-nowrap cursor-pointer mt-4 md:mt-0 active:scale-95 transition-all duration-300 ease-in-out text-white font-bold bg-gray-500 rounded-full flex items-center justify-center py-2 px-4 w-fit"
                onClick={() => {
                  setShowDropdown(false)
                  setProceedToDeletion(false)
                }}
              >
                Cancel
              </button>
            </div>
          </div>
        </div>
      )}
      <div
        onClick={() => setShowDropdown(!showDropdown)}
        className={`${
          showDropdown
            ? "bg-interactive-secundary"
            : "hover:bg-interactive-secundary"
        } cursor-pointer transition-all duration-100 ease-in-out rounded-full p-1`}
      >
        <DotsThree />
      </div>
      {showDropdown && (
        <>
          <div
            onClick={() => setShowDropdown(false)}
            className="z-20 fixed w-screen h-screen inset-0"
          />
          <ul className="absolute z-30 flex flex-col items-center overflow-hidden justify-center text-xs right-0 mt-1 w-[113px] bg-layout-spotlight rounded-lg shadow-black/10 shadow-lg">
            <li
              onClick={() => proceedToEditEvent()}
              className="flex text-medium hover:bg-gray-600/5 transition-all duration-300 ease-in-out cursor-pointer items-center justify-center gap-x-2 py-3 w-full"
            >
              <Edit /> Editar
            </li>
            <div className="w-full h-0 border-t border-t-layout-body" />
            <li
              onClick={() => setProceedToDeletion(true)}
              className="flex text-medium hover:bg-gray-600/5 transition-all duration-300 ease-in-out text-interactive-destructive cursor-pointer py-3 w-full items-center justify-center gap-x-2"
            >
              <Delete /> Excluir
            </li>
          </ul>
        </>
      )}
    </div>
  )
}
