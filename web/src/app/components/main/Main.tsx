import { AccommodationTable } from "./integrate/AccommodationTable"
import { Header } from "./integrate/Header"

export const Main = () => {
  return (
    <main className="pb-8 mt-8 pl-[145px] pr-[89px] w-full">
      <Header />
      <AccommodationTable />
    </main>
  )
}
