import { Header } from "./components/header/Header"
import { Main } from "./components/main/Main"
import { Sidebar } from "./components/sidebar/Sidebar"

export default function Home() {
  return (
    <div className="relative bg-white w-screen">
      <Header />
      <div className="flex max-w-7xl w-full mx-auto">
        <Sidebar />
        <Main />
      </div>
    </div>
  )
}
