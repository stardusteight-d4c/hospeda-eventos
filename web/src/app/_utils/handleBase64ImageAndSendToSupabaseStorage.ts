import ShortUniqueId from "short-unique-id"
import { dataURLtoFile } from "./dataURLtoFile"
import { supabase } from "./supabase/supabase"
import { info } from "./toasters/toasters"

export async function handleBase64ImageAndSendToSupabaseStorage(
  base64Image: string
): Promise<{ file: File | null; imageUrl: string }> {
  if (base64Image.includes("npkgygdsueoipbtxntly.supabase.co")) {
    return { file: null, imageUrl: base64Image }
  } else {
    info("Convertendo imagem em base64 para arquivo...")
    const STORAGE_URL = `https://npkgygdsueoipbtxntly.supabase.co/storage/v1/object/public/thumbnails/`
    const uid = new ShortUniqueId({ length: 15 })
    const fileName = `${uid()}.png`
    const file = dataURLtoFile(base64Image, fileName)
    const imageUrl = STORAGE_URL + fileName
    await supabase.storage
      .from("thumbnails")
      .upload(fileName, file, {
        cacheControl: "3600",
        upsert: false,
      })
      .then(() => {
        info("Arquivo armazenado com sucesso no Supabase Storage!")
        return
      })
      .catch((error) => console.log(error))
    return { file, imageUrl }
  }
}
