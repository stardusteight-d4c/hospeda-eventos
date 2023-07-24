"use client"

import { useEffect, useState } from "react"
import { TogglePrivacy } from "../TogglePrivacy"
import { useFormDataContext } from "@/app/_context/FormContextProvider"
import { privacyFieldStyles as css } from "./styles"

export const PrivacyField = () => {
  const { formData } = useFormDataContext()
  const [privacy, setPrivacy] = useState<"public" | "private">("public")
  useEffect(() => {
    if (formData.selectedToEdit?.privacy) {
      setPrivacy(formData.selectedToEdit?.privacy)
    }
  }, [])

  return (
    <div className={css.wrapper}>
      <label className={css.label}>Privacidade do evento</label>
      <TogglePrivacy privacy={privacy} setPrivacy={setPrivacy} />
    </div>
  )
}
