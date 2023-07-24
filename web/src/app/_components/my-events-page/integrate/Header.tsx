import { Fragment } from "react"
import { PageTitle } from "@/app/_components/@globals"
import { Search, CreateEventButton } from "./integrate"
import { headerStyles as css } from "./styles"

export const Header = () => {
  return (
    <Fragment>
      <PageTitle title="Meus Eventos" />
      <div className={css.wrapper}>
        <Search />
        <CreateEventButton />
      </div>
    </Fragment>
  )
}
