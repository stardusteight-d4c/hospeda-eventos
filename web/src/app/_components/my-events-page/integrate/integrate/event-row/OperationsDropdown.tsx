"use client"

import { Dispatch, Fragment, SetStateAction } from "react"
import { useRouter } from "next/navigation"
import { Delete, Edit } from "@/app/_components/@globals/icons"
import { IEvent } from "@/app/_interfaces/IEvent"
import { useFormDataContext } from "@/app/_context/FormContextProvider"
import { operationsDropdownStyles as css } from "./styles"

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
            className={css.invisibleOverlay}
          />
          <ul className={css.wrapper}>
            <li onClick={() => proceedToEdit()} className={css.editItem}>
              <Edit /> Editar
            </li>
            <div className={css.divider} />
            <li
              onClick={() => setProceedToDelete(true)}
              className={css.deleteItem}
            >
              <Delete /> Excluir
            </li>
          </ul>
        </Fragment>
      )}
    </Fragment>
  )
}
