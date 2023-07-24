"use client"

import { useRouter } from "next/navigation"
import { useFormDataContext } from "@/app/_context/FormContextProvider"
import { createEventButtonSytles as css } from "./styles"

export const CreateEventButton = () => {
  const router = useRouter()
  const { setFormData } = useFormDataContext()

  async function proceedToCreateEvent() {
    setFormData({
      selectedToEdit: null,
    } as any)
    router.push("/editar-evento")
  }

  return (
    <button onClick={proceedToCreateEvent} className={css.wrapper}>
      Criar evento
    </button>
  )
}
