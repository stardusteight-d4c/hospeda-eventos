import { Header, Sidebar } from "@/app/components/@globals"
import { Main } from "@/app/components/main/Main"

export default function MyEventsPage() {
  return (
    <div className="relative bg-white max-w-screen w-full overflow-x-hidden">
      <Header />
      <Sidebar />
      <div className="flex max-w-7xl w-full mx-auto">
        <Main />
      </div>
    </div>
  )
}
