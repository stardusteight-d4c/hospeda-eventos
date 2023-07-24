import { useRouter } from "next/navigation"
import { useFormDataContext } from "@/app/_context/FormContextProvider"
import { handleSubmit } from "@/app/_utils/handleSubmit"
import { handleSubmitButtonsStyles as css } from "./styles"

export const HandleSubmitButtons = () => {
  const router = useRouter()
  const { formData } = useFormDataContext()

  return (
    <div className={css.wrapper}>
      {formData.selectedToEdit !== null ? (
        <button
          type="button"
          onClick={() => handleSubmit({ formData, router })}
          className={css.updateButton}
        >
          Salvar alterações
        </button>
      ) : (
        <button
          type="button"
          onClick={() => handleSubmit({ formData, router })}
          className={css.postButton}
        >
          Cadastrar
        </button>
      )}
    </div>
  )
}
