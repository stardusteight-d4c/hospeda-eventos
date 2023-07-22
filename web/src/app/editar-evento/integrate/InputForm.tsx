"use client"

import { useFormDataContext } from "@/app/@context/FormContextProvider"
import { Dispatch, SetStateAction, useRef, useState } from "react"

interface Props {
  label: string
  id: string
  placeholder: string
  type?: string
  inputValues: InputValues
  setInputValues: Dispatch<SetStateAction<InputValues>>
}

export const InputForm = ({
  label,
  id,
  placeholder,
  type = "text",
  inputValues,
  setInputValues,
}: Props) => {
  const { formData, setFormData } = useFormDataContext()
  const inputValuesRef = useRef(inputValues); 

  const handleChange = (event: React.ChangeEvent<HTMLInputElement>) => {
    const { id, value } = event.target;
    setInputValues({
      ...inputValues,
      [id]: value,
    });
    inputValuesRef.current = { ...inputValues, [id]: value }
    setFormData((prevFormData) => ({
      ...prevFormData,
      ...inputValuesRef.current,
    }));
  };


  return (
    <div className="w-full flex flex-col gap-y-2">
      <label htmlFor={id} className="text-content-base">
        {label}
      </label>
      <input
        id={id}
        type={type}
        onChange={(e) => handleChange(e)}
        className="p-3 border border-input-border rounded-xl"
        placeholder={placeholder}
      />
    </div>
  )
}