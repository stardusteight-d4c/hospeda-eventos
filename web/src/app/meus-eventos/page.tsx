import { Header } from "@/app/components/header/Header"
import { Main } from "@/app/components/main/Main"
import { Sidebar } from "@/app/components/sidebar/Sidebar"

export default function MyEventsPage() {
  return (
    <div className="relative bg-white max-w-screen w-full overflow-x-hidden">
      <Header />
      <div className="flex max-w-7xl w-full mx-auto">
        <Sidebar />
        <Main />
      </div>
    </div>
  )
}
