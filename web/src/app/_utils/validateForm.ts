import { IEvent } from "../_interfaces/IEvent"
import { error } from "./toasters/toasters"

export function validateForm(eventData: IEvent) {
  const cepPattern = /^[0-9]{5}-[0-9]{3}$/
  const dateValue = eventData.startDate
  const dateObject = new Date(dateValue)
  const currentDate = new Date()
  const differenceInMilliseconds = dateObject.getTime() - currentDate.getTime()
  const fiveDaysInMilliseconds = 5 * 24 * 60 * 60 * 1000 // 5 day on future
  if (eventData.name === "" || eventData.name.length < 3) {
    error(
      "O nome do evento não pode estar vazio e deve conter pelo menos 3 caracteres."
    )
    return
  } else if (
    eventData.description === "" ||
    eventData.description.length < 50
  ) {
    error(
      "A descrição do evento não pode estar vazia e deve conter pelo menos 50 caracteres."
    )
    return
  } else if (eventData.cep === "" || !cepPattern.test(eventData.cep)) {
    error("O cep não está em um formato válido.")
    return
  }
  // @ts-ignore
  else if (eventData.number === "" || isNaN(eventData.number.trim())) {
    error("O número do endereço não é um número válido.")
    return
  } else if (eventData.address === "" || eventData.address.length < 10) {
    error(
      "O endereço não pode estar vazio e deve conter ao menos 10 caracteres."
    )
    return
  } else if (eventData.complement === "") {
    error("O complemento não pode estar vazio.")
    return
  } else if (eventData.neighborhood === "") {
    error("O bairro não pode estar vazio.")
    return
  } else if (eventData.city === "") {
    error("A cidade deve ser informada.")
    return
  } else if (eventData.state === "" || eventData.state.length > 2) {
    error(
      "O estado não pode estar vazio e dever ser preenchido apenas com a sigla do estado."
    )
    return
  } else if (
    // @ts-ignore
    isNaN(new Date(eventData.startDate)) ||
    !(differenceInMilliseconds >= fiveDaysInMilliseconds)
  ) {
    error(
      "A data de início do evento não é válida e deve ser marcada com pelos menos 5 dias de antecedência."
    )
    return
  } else if (eventData.startTime === "") {
    error("O horário de início do evento não é válido.")
    return
  }
}
