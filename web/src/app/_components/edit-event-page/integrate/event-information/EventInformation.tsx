import { Fragment } from "react"
import { NameField, PrivacyField, DescriptionField, Uploader } from "."
import { eventInformationStyles as css } from "./styles"
import { InputData } from "../data"

interface Props {
  inputData: InputData
}

export const EventInformation = ({ inputData }: Props) => {
  return (
    <Fragment>
      <h2 className={css.title}>Informações do evento</h2>
      <NameField inputData={inputData} />
      <Uploader />
      <PrivacyField />
      <DescriptionField />
      <div className={css.divider} />
    </Fragment>
  )
}
