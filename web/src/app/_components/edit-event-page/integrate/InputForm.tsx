"use client"

import { Dispatch, SetStateAction, useRef } from "react"
import { useFormDataContext } from "@/app/_context/FormContextProvider"
import { inputFormStyles as css } from "./styles"

interface Props {
  label: string
  id: string
  placeholder?: string
  type?: string
  styles?: string
  selectedToEditFieldValue?: any
  inputValues: InputValues
  setInputValues: Dispatch<SetStateAction<InputValues>>
}

export const InputForm = ({
  label,
  id,
  placeholder,
  type = "text",
  styles,
  selectedToEditFieldValue,
  inputValues,
  setInputValues,
}: Props) => {
  const { setFormData } = useFormDataContext()
  const inputValuesRef = useRef(inputValues)

  const handleChange = (event: React.ChangeEvent<HTMLInputElement>) => {
    const { id, value } = event.target
    setInputValues({
      ...inputValues,
      [id]: value,
    })
    inputValuesRef.current = { ...inputValues, [id]: value }
    setFormData((prevFormData) => ({
      ...prevFormData,
      ...inputValuesRef.current,
    }))
  }

  return (
    <div className={css.wrapper(styles!)}>
      <label htmlFor={id} className={css.label}>
        {label}
      </label>
      <input
        id={id}
        type={type}
        defaultValue={selectedToEditFieldValue}
        onChange={(e) => handleChange(e)}
        className={css.input}
        placeholder={placeholder}
      />
    </div>
  )
}
