"use client"

import { useFormDataContext } from "@/app/_context/FormContextProvider"
import { useRouter } from "next/navigation"

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
    <button
      onClick={() => proceedToCreateEvent()}
      className="whitespace-nowrap cursor-pointer mt-4 md:mt-0 active:scale-95 transition-all duration-300 ease-in-out text-white font-bold bg-interactive-primary rounded-full flex items-center justify-center py-3 px-2 w-full md:w-[223px]"
    >
      Criar evento
    </button>
  )
}
