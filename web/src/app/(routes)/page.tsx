import { Sidebar } from "@/app/_components/@globals"
import { Main, Header } from "@/app/_components/home-page"
import { homeStyles as css } from "../styles"
import { ReactNode } from "react"

interface WrapperProps {
  children: ReactNode
}

export default function Home() {
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
      {children}
    </div>
  )
}
