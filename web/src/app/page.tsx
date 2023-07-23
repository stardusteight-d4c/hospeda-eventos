import { Sidebar } from "@/app/components/@globals"
import { Main, Header } from "@/app/components/home"
import { homeStyles as css } from "./styles"
import { ReactNode } from "react"

interface WrapperProps {
  children: ReactNode
}

export default function Home() {
  return (
    <Wrapper>
      <Header />
      <Sidebar />
      <Main />
    </Wrapper>
  )
}

const Wrapper = ({ children }: WrapperProps) => {
  return <div className={css.wrapper}>{children}</div>
}
