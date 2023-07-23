"use client"

import { useFormDataContext } from "@/app/@context/FormContextProvider"
import { MagnifyingGlass } from "@/app/components/@globals/icons/MagnifyingGlass"
import { useRouter } from "next/navigation"

export const Header = () => {
  const router = useRouter()
  const { setFormData } = useFormDataContext()

  async function proceedToCreateEvent() {
    setFormData({
      selectedToEdit: null,
    } as any)
    router.push("/editar-evento")
  }

  return (
    <>
      <h1 className="text-content-title leading-[37.5px] text-[32px] font-bold">
        Meus Eventos
      </h1>
      <div className="flex flex-col md:flex-row items-center justify-between w-full mt-6">
        <div className="relative w-full">
          <input
            type="text"
            placeholder="Buscar eventos"
            className="block bg-interactive-secundary border border-input-border rounded-xl w-full md:w-[470px] pl-10 leading-[18.75px] p-3 placeholder:text-content-placeholder"
          />
          <MagnifyingGlass className="absolute top-1/2 -translate-y-1/2 left-3" />
        </div>
        <button
          onClick={() => proceedToCreateEvent()}
          className="whitespace-nowrap cursor-pointer mt-4 md:mt-0 active:scale-95 transition-all duration-300 ease-in-out text-white font-bold bg-interactive-primary rounded-full flex items-center justify-center py-3 px-2 w-full md:w-[223px]"
        >
          Criar evento
        </button>
      </div>
    </>
  )
}
