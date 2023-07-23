import { Header, Sidebar } from "@/app/_components/@globals"
import { Main } from "@/app/_components/my-events-page/Main"
import { ReactNode } from "react"

interface WrapperProps {
  children: ReactNode
}

export default function MyEventsPage() {
  return (
    <Wrapper>
      <Main />
    </Wrapper>
  )
}

const Wrapper = ({ children }: WrapperProps) => {
  return (
    <div className="relative bg-white max-w-screen w-full overflow-x-hidden">
      <Header />
      <Sidebar />
      <div className="flex max-w-7xl w-full mx-auto">{children}</div>
    </div>
  )
}
