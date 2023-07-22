import { HostTable } from "./integrate/HostTable"
import { Header } from "./integrate/Header"

export const Main = () => {
  return (
    <main className="pb-8 mt-8 px-4 md:pl-[145px] md:pr-[89px] w-full">
      <Header />
      <HostTable />
    </main>
  )
}
