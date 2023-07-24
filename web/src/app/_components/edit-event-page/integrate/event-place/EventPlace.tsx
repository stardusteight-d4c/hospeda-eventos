import { Fragment } from "react"
import { useFormDataContext } from "@/app/_context/FormContextProvider"
import { InputForm } from "../InputForm"
import { InputData } from "../data"
import { eventPlaceStyles as css } from "./styles"

interface Props {
  inputData: InputData
}

export const EventPlace = ({ inputData }: Props) => {
  const { formData } = useFormDataContext()

  return (
    <Fragment>
      <h3 className={css.title}>Local do evento</h3>
      <div className={css.firstGridContainer}>
        {[inputData.cep, inputData.number].map((inputData, index) => {
          const selectedValue =
            formData.selectedToEdit && formData.selectedToEdit[inputData.id]
          return (
            <InputForm
              key={index}
              {...inputData}
              styles="col-span-1"
              selectedToEditFieldValue={selectedValue}
            />
          )
        })}
      </div>
      <InputForm
        {...inputData.address}
        selectedToEditFieldValue={formData.selectedToEdit?.address}
      />
      <div className={css.secondGridContainer}>
        {[
          inputData.complement,
          inputData.neighborhood,
          inputData.city,
          inputData.state,
        ].map((inputData, index) => {
          const selectedValue =
            formData.selectedToEdit && formData.selectedToEdit[inputData.id]
          return (
            <InputForm
              key={index}
              {...inputData}
              styles="col-span-1"
              selectedToEditFieldValue={selectedValue}
            />
          )
        })}
      </div>
      <div className={css.divider} />
    </Fragment>
  )
}
