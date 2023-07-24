import { Fragment } from "react"
import { useFormDataContext } from "@/app/_context/FormContextProvider"
import { InputForm } from "../InputForm"
import { InputData } from "../data"

interface Props {
  inputData: InputData
}

export const EventPlace = ({ inputData }: Props) => {
  const { formData } = useFormDataContext()

  return (
    <Fragment>
      <h3 className="text-content-title text-xl font-bold mb-5">
        Local do evento
      </h3>
      <div className="grid grid-cols-2 gap-x-4 w-full mb-4">
        <InputForm
          {...inputData.cep}
          styles="col-span-1"
          selectedToEditFieldValue={formData.selectedToEdit?.cep}
        />
        <InputForm
          {...inputData.number}
          styles="col-span-1"
          selectedToEditFieldValue={formData.selectedToEdit?.number}
        />
      </div>
      <InputForm
        {...inputData.address}
        selectedToEditFieldValue={formData.selectedToEdit?.address}
      />
      <div className="grid grid-cols-2 gap-4 mt-4">
        <InputForm
          {...inputData.complement}
          styles="col-span-1"
          selectedToEditFieldValue={formData.selectedToEdit?.complement}
        />
        <InputForm
          {...inputData.neighborhood}
          styles="col-span-1"
          selectedToEditFieldValue={formData.selectedToEdit?.neighborhood}
        />
        <InputForm
          {...inputData.city}
          styles="col-span-1"
          selectedToEditFieldValue={formData.selectedToEdit?.city}
        />
        <InputForm
          {...inputData.state}
          styles="col-span-1"
          selectedToEditFieldValue={formData.selectedToEdit?.state}
        />
      </div>
      <div className="w-full h-0 border-t border-t-layout-body my-8" />
    </Fragment>
  )
}
