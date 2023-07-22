import { Header } from "./components/header/Header"
import { Sidebar } from "./components/sidebar/Sidebar"

export default function Home() {
  return (
    <div className="relative bg-white max-w-[100vw] w-full overflow-x-hidden">
      <Header />
      <div className="flex max-w-7xl w-full mx-auto">
        <Sidebar />
      </div>
    </div>
  )
}
