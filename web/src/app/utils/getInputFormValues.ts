import { IEvent } from "../@interfaces/IEvent"

export function getFormValuesToSubmit(formData: IFormData): IEvent {
  const id = formData.selectedToEdit?.id ?? undefined
  const name = (() => {
    const inputElement = document.getElementById(
      "eventName"
    ) as HTMLInputElement
    return inputElement.value
  })()
  const coverImage = formData.coverImage ?? formData.selectedToEdit?.coverImage
  const privacy = document.getElementById("privacy")!.innerText as
    | "private"
    | "public"
  const description = (() => {
    const inputElement = document.getElementById(
      "description"
    ) as HTMLInputElement
    return inputElement.value
  })()
  const cep = (() => {
    const inputElement = document.getElementById("cep") as HTMLInputElement
    return inputElement.value
  })()
  const number = (() => {
    const inputElement = document.getElementById("number") as HTMLInputElement
    return inputElement.value
  })()
  const address = (() => {
    const inputElement = document.getElementById("address") as HTMLInputElement
    return inputElement.value
  })()
  const complement = (() => {
    const inputElement = document.getElementById(
      "complement"
    ) as HTMLInputElement
    return inputElement.value
  })()
  const neighborhood = (() => {
    const inputElement = document.getElementById(
      "neighborhood"
    ) as HTMLInputElement
    return inputElement.value
  })()
  const city = (() => {
    const inputElement = document.getElementById("city") as HTMLInputElement
    return inputElement.value
  })()
  const state = (() => {
    const inputElement = document.getElementById("state") as HTMLInputElement
    return inputElement.value
  })()
  const startDate = (() => {
    const inputElement = document.getElementById(
      "startDate"
    ) as HTMLInputElement
    return inputElement.value
  })()
  const startTime = (() => {
    const inputElement = document.getElementById(
      "startTime"
    ) as HTMLInputElement
    return inputElement.value
  })()
  return {
    id,
    name,
    coverImage,
    privacy,
    description,
    cep,
    number,
    address,
    complement,
    neighborhood,
    city,
    state,
    startDate: new Date(startDate),
    startTime,
  }
}
