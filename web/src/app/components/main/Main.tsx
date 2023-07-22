import { AccommodationTable } from "./integrate/AccommodationTable"
import { Header } from "./integrate/Header"

export const Main = () => {
  return (
    <main className="py-8 mt-24 pl-[145px] pr-[89px] w-full">
      <Header />
      <AccommodationTable />
    </main>
  )
}
