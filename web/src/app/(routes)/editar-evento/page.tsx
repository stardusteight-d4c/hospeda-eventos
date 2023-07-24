import { ReactNode } from "react"
import { Toaster } from "react-hot-toast"
import { Header } from "@/app/_components/edit-event-page/Header"
import { Form } from "@/app/_components/edit-event-page/Form"
import { editEventStyles as css } from "./styles"

interface WrapperProps {
  children: ReactNode
}

export default function EditEvent() {
  return (
    <Wrapper>
      <Form />
    </Wrapper>
  )
}

const Wrapper = ({ children }: WrapperProps) => {
  return (
    <div className={css.wrapper}>
      <Toaster />
      <div className={css.container}>
        <Header />
        {children}
      </div>
    </div>
  )
}
