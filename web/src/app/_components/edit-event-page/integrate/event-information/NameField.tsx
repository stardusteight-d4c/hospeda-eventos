import React from "react"
import { useFormDataContext } from "@/app/_context/FormContextProvider"
import { InputForm } from "../InputForm"
import { InputData } from "../data"

interface Props {
  inputData: InputData
}

export const NameField = ({ inputData }: Props) => {
  const { formData } = useFormDataContext()
  return (
    <div className="mt-[46px]">
      <InputForm
        {...inputData.eventName}
        selectedToEditFieldValue={formData.selectedToEdit?.eventName}
      />
    </div>
  )
}
