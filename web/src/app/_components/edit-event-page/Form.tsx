"use client"

import { ReactNode, useState } from "react"
import {
  inputInitialDefaultValues,
  makeInputData,
  EventInformation,
  EventPlace,
  DateAndTime,
  HandleSubmitButtons,
} from "./integrate"
import { formStyles as css } from "./styles"

interface WrapperProps {
  children: ReactNode
}

export const Form = () => {
  const [inputValues, setInputValues] = useState<InputValues>(
    inputInitialDefaultValues
  )
  const inputData = makeInputData(inputValues, setInputValues)

  return (
    <Wrapper>
      <EventInformation inputData={inputData} />
      <EventPlace inputData={inputData} />
      <DateAndTime inputData={inputData} />
      <HandleSubmitButtons />
    </Wrapper>
  )
}

const Wrapper = ({ children }: WrapperProps) => (
  <form className={css.wrapper}>{children}</form>
)
