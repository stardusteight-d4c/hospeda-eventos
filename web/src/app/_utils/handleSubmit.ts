import { AppRouterInstance } from "next/dist/shared/lib/app-router-context"
import { getFormValuesToSubmit } from "./getInputFormValues"
import { validateForm } from "./validateForm"
import { handleBase64ImageAndSendToSupabaseStorage } from "./handleBase64ImageAndSendToSupabaseStorage"
import { info, success, error } from "./toasters/toasters"

interface SubmitFunction {
  formData: IFormData
  router: AppRouterInstance
  method: "POST" | "PUT"
}

export async function handleSubmit({
  formData,
  router,
  method,
}: SubmitFunction) {
  const eventData = getFormValuesToSubmit(formData)
  if (!validateForm(eventData)) {
    return
  }
  info("O envio do evento está sendo processado...")
  const { imageUrl } = await handleBase64ImageAndSendToSupabaseStorage(
    eventData.coverImage
  )
  const transformedData = {
    ...eventData,
    coverImage: imageUrl,
  }
  fetch(`${process.env.NEXT_SERVER_URL}/event`, {
    method: method,
    headers: {
      "Content-Type": "application/json",
    },
    body: JSON.stringify(transformedData),
  })
    .then(() => {
      success("O evento foi enviado com sucesso!")
      setTimeout(() => {
        location.reload()
      }, 500)
      router.push("/meus-eventos")
    })
    .catch((err) => {
      error("Ops! Houve uma falha durante o envio.")
      console.error("there was an error making the request:", err)
    })
}
