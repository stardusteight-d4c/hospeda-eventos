import { Header } from "@/app/components/header/Header"
import { Main } from "@/app/components/main/Main"
import { Sidebar } from "@/app/components/sidebar/Sidebar"

export default function MyEventsPage() {
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
