import { Fragment } from "react"
import { InputForm } from "../InputForm"
import { useFormDataContext } from "@/app/_context/FormContextProvider"
import { InputData } from "../data"

interface Props {
  inputData: InputData
}

export const DateAndTime = ({inputData}: Props) => {
  const { formData } = useFormDataContext()

  function formatDateToYYYYMMDD(date: Date) {
    const year = date.getFullYear()
    const month = String(date.getMonth() + 1).padStart(2, "0")
    const day = String(date.getDate()).padStart(2, "0")
    return `${year}-${month}-${day}`
  }

  return (
    <Fragment>
      <h3 className="text-content-title text-xl font-bold mb-5">
        Data e horário
      </h3>
      <div className="flex items-center gap-x-4">
        <InputForm
          {...inputData.startDate}
          selectedToEditFieldValue={formatDateToYYYYMMDD(
            new Date(formData.selectedToEdit?.startDate!)
          )}
        />
        <InputForm
          {...inputData.startTime}
          selectedToEditFieldValue={formData.selectedToEdit?.startTime}
        />
      </div>
    </Fragment>
  )
}
