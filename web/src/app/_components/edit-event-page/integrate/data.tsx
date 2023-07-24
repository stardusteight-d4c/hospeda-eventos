"use client"

import { Dispatch, SetStateAction, useState } from "react"

export const makeInputData = (
  inputValues: InputValues,
  setInputValues: Dispatch<SetStateAction<InputValues>>
) => {
  return {
    eventName: {
      label: "Nome do evento",
      id: "eventName",
      placeholder: "Insira o nome do evento",
      inputValues,
      setInputValues,
    },
    cep: {
      label: "CEP",
      id: "cep",
      placeholder: "Ex.: 00000-000",
      inputValues,
      setInputValues,
    },
    number: {
      label: "Número",
      id: "number",
      placeholder: "Ex.: 170",
      inputValues,
      setInputValues,
    },
    address: {
      label: "Endereço",
      id: "address",
      placeholder: "Ex.: Rua Pedro Neves, 170 - Bairro Lima, Santos - SP",
      inputValues,
      setInputValues,
    },
    complement: {
      label: "Complemento",
      id: "complement",
      placeholder: "Ex.: apt.42",
      inputValues,
      setInputValues,
    },
    neighborhood: {
      label: "Bairro",
      id: "neighborhood",
      placeholder: "Ex.: Bairro Lima",
      inputValues,
      setInputValues,
    },
    city: {
      label: "Cidade",
      id: "city",
      placeholder: "Ex.: Santos",
      inputValues,
      setInputValues,
    },
    state: {
      label: "Estado",
      id: "state",
      placeholder: "Ex.: SP",
      inputValues,
      setInputValues,
    },
    startDate: {
      label: "Data de início",
      id: "startDate",
      type: "date",
      inputValues,
      setInputValues,
    },
    startTime: {
      label: "Horário de início",
      id: "startTime",
      type: "time",
      inputValues,
      setInputValues,
    },
    description: {
      id: "description",
    },
    privacy: {
      id: "privacy",
    },
  }
}
