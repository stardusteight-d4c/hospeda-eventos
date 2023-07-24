"use client"

import { useFormDataContext } from "@/app/_context/FormContextProvider"
import { RichTextHeader } from "./RichTextHeader"
import { descriptionFieldStyles as css } from "./styles"

export const DescriptionField = () => {
  const { setFormData, formData } = useFormDataContext()

  return (
    <div className={css.wrapper}>
      <label htmlFor="description" className={css.label}>
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
          className={css.textarea}
        />
      </div>
    </div>
  )
}
