import { Header, EventTable } from "./integrate"
import { mainStyles as css } from "./styles"

export const Main = () => {
  return (
    <main className={css.wrapper}>
      <Header />
      <EventTable />
    </main>
  )
}
