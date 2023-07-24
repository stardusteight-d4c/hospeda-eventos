import { AppRouterInstance } from "next/dist/shared/lib/app-router-context"
import { getFormValuesToSubmit } from "./getInputFormValues"
import { validateForm } from "./validateForm"
import ShortUniqueId from "short-unique-id"
import { supabase } from "./supabase/supabase"
import { dataURLtoFile } from "./dataURLtoFile"

interface SubmitFunction {
  formData: IFormData
  router: AppRouterInstance
}

export async function handleSubmit({ formData, router }: SubmitFunction) {
  const eventData = getFormValuesToSubmit(formData)
  validateForm(eventData)
  // handleBase64StringAndSendToSupabaseStorage
  const STORAGE_URL = `https://npkgygdsueoipbtxntly.supabase.co/storage/v1/object/public/thumbnails/`
  const uid = new ShortUniqueId({ length: 15 })
  const fileName = `${uid()}.png`
  const file = dataURLtoFile(eventData.coverImage, fileName)
  const imageUrl = STORAGE_URL + fileName

  console.log('file', file);
  console.log('imageUrl', imageUrl);
  

  await supabase.storage
    .from("thumbnails")
    .upload(fileName, file, {
      cacheControl: "3600",
      upsert: false,
    })
    .then(async () => {
      const data = {
        ...eventData,
        coverImage: imageUrl,
      }
      console.log("data", data)
      // fetch(`${process.env.NEXT_SERVER_URL}/event`, {
      //   method: "POST",
      //   headers: {
      //     "Content-Type": "application/json",
      //   },
      //   body: JSON.stringify(data),
      // })
      //   .then((response) => {
      //     if (!response.ok) {
      //       throw new Error("network response was not ok")
      //     }
      //     return response.json()
      //   })
      //   .then(() => {
      //     setTimeout(() => {
      //       location.reload()
      //     }, 500)
      //     router.push("/meus-eventos")
      //   })
      // .catch((error) => {
      //   console.error("There was an error making the request:", error)
      // })
    })
    .catch((error) => console.log(error))
}
