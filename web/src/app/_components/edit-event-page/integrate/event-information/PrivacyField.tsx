"use client"

import { useEffect, useState } from "react"
import { TogglePrivacy } from "../TogglePrivacy"
import { useFormDataContext } from "@/app/_context/FormContextProvider"

export const PrivacyField = () => {
  const { formData } = useFormDataContext()
  const [privacy, setPrivacy] = useState<"public" | "private">("public")
  useEffect(() => {
    if (formData.selectedToEdit?.privacy) {
      setPrivacy(formData.selectedToEdit?.privacy)
    }
  }, [])

  return (
    <div className="w-full mt-[18px] flex flex-col gap-y-2">
      <label className="text-content-base">Privacidade do evento</label>
      <TogglePrivacy privacy={privacy} setPrivacy={setPrivacy} />
    </div>
  )
}
