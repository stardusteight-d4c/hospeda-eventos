"use client"

import React, { createContext, useContext, useState } from "react"

interface Props {
  children: React.ReactNode
}

interface ContextAPI {
  formData: IFormData
  setFormData: React.Dispatch<React.SetStateAction<IFormData>>
}

export const MyContext = createContext<ContextAPI>({
  formData: {
    selectedToEdit: null,
    eventName: "",
    uploadedFile: null,
    coverImage: "",
    privacy: "public",
    description: "",
    cep: "",
    number: "",
    address: "",
    complement: "",
    neighborhood: "",
    city: "",
    state: "",
    startDate: new Date(),
    startTime: "",
  },
  setFormData: () => {},
})

export const FormContextProvider = ({ children }: Props) => {
  const [formData, setFormData] = useState<IFormData>({
    selectedToEdit: null,
    eventName: "",
    uploadedFile: null,
    coverImage: "",
    privacy: "public",
    description: "",
    cep: "",
    number: "",
    address: "",
    complement: "",
    neighborhood: "",
    city: "",
    state: "",
    startDate: new Date(),
    startTime: "",
  })

  const contextValue: ContextAPI = { formData, setFormData }

  return (
    <MyContext.Provider value={contextValue}>{children}</MyContext.Provider>
  )
}

export const useFormDataContext = () => useContext(MyContext)
