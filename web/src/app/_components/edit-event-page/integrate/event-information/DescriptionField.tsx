"use client"

import { useFormDataContext } from "@/app/_context/FormContextProvider"
import { RichTextHeader } from "./RichTextHeader"

export const DescriptionField = () => {
  const { setFormData, formData } = useFormDataContext()

  return (
    <div className="w-full mt-[18px] flex flex-col gap-y-2">
      <label htmlFor="" className="text-content-base">
        Descrição
      </label>
      <div>
        <RichTextHeader />
        <textarea
          id="description"
          defaultValue={formData.selectedToEdit?.description}
          onChange={(event: React.ChangeEvent<HTMLTextAreaElement>) => {
            const { id, value } = event.target
            setFormData((prevFormData) => ({
              ...prevFormData,
              [id]: value,
            }))
          }}
          placeholder="Placeholder"
          spellCheck="false"
          className="p-3 w-full text-content-title min-h-[108px] max-h-[108px] resize-none outline-none border border-input-border rounded-b-xl"
        />
      </div>
    </div>
  )
}
