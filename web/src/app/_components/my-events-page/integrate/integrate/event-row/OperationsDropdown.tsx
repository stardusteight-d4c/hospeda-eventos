"use client"

import { Dispatch, Fragment, SetStateAction } from "react"
import { useRouter } from "next/navigation"
import { Delete, Edit } from "@/app/_components/@globals/icons"
import { IEvent } from "@/app/_interfaces/IEvent"
import { useFormDataContext } from "@/app/_context/FormContextProvider"

interface Props {
  showDropdown: boolean
  setShowDropdown: Dispatch<SetStateAction<boolean>>
  setProceedToDelete: Dispatch<SetStateAction<boolean>>
  eventData: IEvent
}

export const OperationsDropdown = ({
  showDropdown,
  setShowDropdown,
  setProceedToDelete,
  eventData,
}: Props) => {
  const router = useRouter()
  const { setFormData } = useFormDataContext()

  async function proceedToEdit() {
    setFormData({
      selectedToEdit: {
        ...eventData,
        id: eventData.id!,
        eventName: eventData.name,
      },
    } as any)
    router.push("/editar-evento")
  }

  return (
    <Fragment>
      {showDropdown && (
        <Fragment>
          <div
            onClick={() => setShowDropdown(false)}
            className="z-20 fixed w-screen h-screen inset-0"
          />
          <ul className="absolute z-30 flex flex-col items-center overflow-hidden justify-center text-xs right-0 mt-1 w-[113px] bg-layout-spotlight rounded-lg shadow-black/10 shadow-lg">
            <li
              onClick={() => proceedToEdit()}
              className="flex text-medium hover:bg-gray-600/5 transition-all duration-300 ease-in-out cursor-pointer items-center justify-center gap-x-2 py-3 w-full"
            >
              <Edit /> Editar
            </li>
            <div className="w-full h-0 border-t border-t-layout-body" />
            <li
              onClick={() => setProceedToDelete(true)}
              className="flex text-medium hover:bg-gray-600/5 transition-all duration-300 ease-in-out text-interactive-destructive cursor-pointer py-3 w-full items-center justify-center gap-x-2"
            >
              <Delete /> Excluir
            </li>
          </ul>
        </Fragment>
      )}
    </Fragment>
  )
}
