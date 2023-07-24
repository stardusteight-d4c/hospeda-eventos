import { AppRouterInstance } from "next/dist/shared/lib/app-router-context"
import { getFormValuesToSubmit } from "./getInputFormValues"
import { validateForm } from "./validateForm"

interface SubmitFunction {
  formData: IFormData
  router: AppRouterInstance
}

export function handleSubmit({ formData, router }: SubmitFunction) {
  const eventData = getFormValuesToSubmit(formData)
  validateForm(eventData)

  const test = {
    ...eventData,
    coverImage:
      "https://media-cdn.tripadvisor.com/media/photo-s/16/1a/ea/54/hotel-presidente-4s.jpg",
  }
  fetch(`${process.env.NEXT_SERVER_URL}/event`, {
    method: "POST",
    headers: {
      "Content-Type": "application/json",
    },
    body: JSON.stringify(test),
  })
    .then((response) => {
      if (!response.ok) {
        throw new Error("network response was not ok")
      }
      return response.json()
    })
    .then(() => {
      setTimeout(() => {
        location.reload()
      }, 500)
      router.push("/meus-eventos")
    })
    .catch((error) => {
      console.error("There was an error making the request:", error)
    })
}
