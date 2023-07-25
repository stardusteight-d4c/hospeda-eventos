import { ReactNode } from "react"
import { Header, Sidebar } from "@/app/_components/@globals"
import { Main } from "@/app/_components/my-events-page"
import { myEventsStyles as css } from "./styles"

interface WrapperProps {
  children: ReactNode
}

export default function MyEvents() {
  return (
    <Wrapper>
      <Main />
    </Wrapper>
  )
}

const Wrapper = ({ children }: WrapperProps) => {
  return (
    <div className={css.wrapper}>
      <Header />
      <Sidebar />
      <div className={css.container}>{children}</div>
    </div>
  )
}
