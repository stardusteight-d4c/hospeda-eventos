import { useRouter } from "next/navigation"
import { useFormDataContext } from "@/app/_context/FormContextProvider"
import { handleSubmit } from "@/app/_utils/handleSubmit"
import { handleSubmitButtonsStyles as css } from "./styles"
import { useMyEventsContext } from "@/app/_context/MyEventsContextProvider"

export const HandleSubmitButtons = () => {
  const router = useRouter()
  const { formData } = useFormDataContext()
  const { requestAgain, setRequestAgain } = useMyEventsContext()

  return (
    <div className={css.wrapper}>
      {formData.selectedToEdit !== null ? (
        <button
          type="button"
          onClick={() =>
            handleSubmit({
              formData,
              router,
              method: "PUT",
              requestAgain,
              setRequestAgain,
            })
          }
          className={css.updateButton}
        >
          Salvar alterações
        </button>
      ) : (
        <button
          type="button"
          onClick={() =>
            handleSubmit({
              formData,
              router,
              method: "POST",
              requestAgain,
              setRequestAgain,
            })
          }
          className={css.postButton}
        >
          Cadastrar
        </button>
      )}
    </div>
  )
}
