import React from "react"
import { useRouter } from "next/navigation"
import { useFormDataContext } from "@/app/_context/FormContextProvider"
import { handleSubmit } from "@/app/_utils/handleSubmit"

export const HandleSubmitButtons = () => {
  const router = useRouter()
  const { formData } = useFormDataContext()

  return (
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
  )
}
